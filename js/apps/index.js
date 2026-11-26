/* ============================================================================
   Emulator Application Registry & Factory Dispatcher
   ============================================================================ */

import { EmulatorApplication } from './base.js';
import { LegacyProfileApplication } from './legacyApp.js';

const REGISTRY = {};

export function register(caseId, AppClass) {
  REGISTRY[caseId] = AppClass;
}

export function create(caseData, host) {
  if (!caseData) return null;
  const AppClass = caseData.AppClass || REGISTRY[caseData.id] || LegacyProfileApplication;
  return new AppClass(caseData, host);
}

export function getReverseAudit(caseData) {
  if (!caseData) return null;
  const dummyHost = {
    renderScreen: function () {},
    log: function () {},
    exposeBehavior: function () {},
    showDownloadOverlay: function () {},
    schedule: function () {},
    getEnv: function () { return { day: 3, round: 1, ipEnv: 'xinggang', devMode: true, ageProfile: 'young', hookForcedOn: false }; }
  };
  const instance = create(caseData, dummyHost);
  return instance ? instance.getReverseAuditReport() : null;
}

export { EmulatorApplication };

export const Apps = {
  EmulatorApplication: EmulatorApplication,
  register: register,
  create: create,
  getReverseAudit: getReverseAudit
};
