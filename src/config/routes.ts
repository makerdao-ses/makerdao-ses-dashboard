import { featureFlags } from '../../feature-flags/feature-flags';
import { CURRENT_ENVIRONMENT } from './endpoints';

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://expenses.makerdao.network';

export const siteRoutes = {
  home: '/',
  coreUnitsOverview: featureFlags[CURRENT_ENVIRONMENT].FEATURE_FINANCES_OVERVIEW ? '/core-units' : '/',
  financesOverview: '/',
  coreUnitAbout: (shortCode: string) => `/core-unit/${shortCode}`,
  coreUnitReports: (shortCode: string) => `/core-unit/${shortCode}/finances/reports`,
  coreUnitActivityFeed: (shortCode: string) => `core-unit/${shortCode}/activity-feed`,
  globalActivityFeed: '/activity-feed',
  cookiesPolicy: '/cookies-policy',

  // auth
  login: '/login',
  manageAccounts: '/auth/manage/accounts',
  adminProfile: '/auth/manage/my-profile',
  userProfile: '/auth/user-profile',
  // TODO: add the accounts routes
};
