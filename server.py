#!/usr/bin/env python3
"""Zero-dependency local static HTTP server for SoftwarePlease ES Modules."""

import argparse
import functools
import http.server
import pathlib
import socketserver
import sys
import threading
import webbrowser

sys.dont_write_bytecode = True

ROOT_DIR = pathlib.Path(__file__).resolve().parent
DEFAULT_PORT = 8000
MAX_PORT_ATTEMPTS = 21


class ReusableThreadingHTTPServer(socketserver.ThreadingMixIn, http.server.HTTPServer):
    allow_reuse_address = True
    daemon_threads = True


class DevRequestHandler(http.server.SimpleHTTPRequestHandler):
    """Serves local files with strict MIME types and no-store cache headers."""

    extensions_map = {
        **http.server.SimpleHTTPRequestHandler.extensions_map,
        '.js': 'application/javascript; charset=utf-8',
        '.mjs': 'application/javascript; charset=utf-8',
        '.css': 'text/css; charset=utf-8',
        '.json': 'application/json; charset=utf-8',
        '.svg': 'image/svg+xml',
    }

    def end_headers(self):
        self.send_header('Cache-Control', 'no-store')
        super().end_headers()


def create_server(port=None, directory=ROOT_DIR):
    """Bind a local HTTP server on 127.0.0.1 with optional auto-fallback from DEFAULT_PORT."""
    handler = functools.partial(DevRequestHandler, directory=str(directory))
    explicit = port is not None
    start_port = DEFAULT_PORT if port is None else port

    if explicit:
        return ReusableThreadingHTTPServer(('127.0.0.1', start_port), handler)

    last_err = None
    for candidate in range(start_port, start_port + MAX_PORT_ATTEMPTS):
        try:
            return ReusableThreadingHTTPServer(('127.0.0.1', candidate), handler)
        except OSError as exc:
            last_err = exc
    raise OSError(f'No free port found in range {start_port}-{start_port + MAX_PORT_ATTEMPTS - 1}') from last_err


def main():
    parser = argparse.ArgumentParser(description='Start local dev server for SoftwarePlease')
    parser.add_argument('--port', type=int, default=None, help='Port to bind (default: auto starting from 8000)')
    parser.add_argument('--no-open', action='store_true', help='Do not open default web browser automatically')
    args = parser.parse_args()

    try:
        httpd = create_server(port=args.port, directory=ROOT_DIR)
    except OSError as exc:
        print(f'[SoftwarePlease] 无法启动本地服务器: {exc}', file=sys.stderr)
        sys.exit(1)

    actual_port = httpd.server_address[1]
    url = f'http://127.0.0.1:{actual_port}/'
    print(f'[SoftwarePlease] 本地服务器已启动: {url}')
    print(f'[SoftwarePlease] 根目录: {ROOT_DIR}')
    print('[SoftwarePlease] 按 Ctrl+C 停止服务器。')

    if not args.no_open:
        timer = threading.Timer(0.4, webbrowser.open, args=(url,))
        timer.daemon = True
        timer.start()

    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print('\n[SoftwarePlease] 正在关闭本地服务器...')
    finally:
        httpd.server_close()


if __name__ == '__main__':
    main()
