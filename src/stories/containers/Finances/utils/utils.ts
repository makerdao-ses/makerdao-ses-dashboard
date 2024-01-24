import { siteRoutes } from '@ses/config/routes';
import { fetchAnalytics } from '@ses/containers/Finances/api/queries';
import { SortEnum } from '@ses/core/enums/sortEnum';
import { BudgetStatus, ResourceType } from '@ses/core/models/interfaces/types';
import { NUMBER_ROWS_FINANCES_TABLE } from '@ses/core/utils/const';
import lightTheme from '@ses/styles/theme/light';
import { DateTime } from 'luxon';
import type {
  DelegateExpenseTableHeader,
  ItemRow,
  LineChartSeriesData,
  Metric,
  MetricValues,
  MomentDataItem,
  PeriodicSelectionFilter,
  TableFinances,
} from './types';
import type { ValuesDataWithBorder } from '@ses/core/models/dto/chartDTO';
import type { ChangeTrackingEvent } from '@ses/core/models/interfaces/activity';
import type {
  ValueAndUnit,
  BudgetMetric,
  Analytic,
  BreakdownBudgetAnalytic,
  AnalyticGranularity,
} from '@ses/core/models/interfaces/analytic';
import type { Budget } from '@ses/core/models/interfaces/budget';
import type { BudgetStatement } from '@ses/core/models/interfaces/budgetStatement';

export const calculateValuesByBreakpoint = (
  isTable: boolean,
  isDesktop1024: boolean,
  isDesktop1280: boolean,
  isDesktop1440: boolean
) => {
  const radius = isTable || isDesktop1024 ? [32, 64] : isDesktop1280 ? [50, 96] : isDesktop1440 ? [48, 96] : [48, 96];
  const center = isTable
    ? [68, '50%']
    : isDesktop1024
    ? ['50%', '50%']
    : isDesktop1280
    ? ['50%', '50%']
    : ['50%', '50%'];
  const paddingLegend = isTable
    ? [20, 60, 0, 0]
    : isDesktop1024
    ? [18, 58, 0, 0]
    : isDesktop1280
    ? [22, 6, 0, 0]
    : isDesktop1440
    ? [22, 2, 0, 0]
    : [22, 2, 0, 0];

  const paddingRichTextName = isTable ? [20, 0, 14, 0] : isDesktop1024 ? [26, 0, 7, 0] : [26, 0, 13.7, 1];
  const paddingRichTextValue = isTable ? [-6, -2, 0, 0] : isDesktop1024 ? [-8, 0, 0, 0] : [0, 0, 0, 2];
  const paddingRichTextDai = isTable ? [-6, 4, 0, 8] : isDesktop1024 ? [-8, 4, 0, 4] : [0, 4, 0, 4];
  const paddingRichTextPercent = isTable ? [-6, 0, 0, 0] : isDesktop1024 ? [0, 0, 8, 0] : [0, 0, 0, 0];

  return {
    radius,
    center,
    paddingLegend,
    paddingRichTextName,
    paddingRichTextValue,
    paddingRichTextDai,
    paddingRichTextPercent,
  };
};
export const mockDataApiTeam: MomentDataItem[] = [
  {
    id: '34',
    code: 'SES-001',
    shortCode: 'SES',
    name: 'Sustainable Ecosystem Scaling',
    image: 'https://makerdao-ses.github.io/ecosystem-dashboard/ecosystem-actors/POWERHOUSE/POWERHOUSE_logo.png',
    category: [],
    sentenceDescription: '',
    paragraphDescription: '',
    paragraphImage: '',
    lastModified: DateTime.fromISO('2023-09-01T09:08:34.123'),
    reportMonth: DateTime.fromISO('2023-03-01T09:08:34.123'),
    totalActuals: 2048873,
    lastActivity: {
      id: '343',
      created_at: '2023-08-30T09:08:34.123',
      event: 'event',
      params: {},
      description: '',
    },
    legacyBudgetStatementUrl: '',
    budgetId: '',
    type: ResourceType.CoreUnit,
    auditors: [],
    socialMediaChannels: [],
    contributorCommitment: [],
    cuGithubContribution: [],
    updates: [],
    scopes: [],
    budgetStatements: [
      {
        id: '234',
        owner: {
          id: '34',
          icon: 'https://makerdao-ses.github.io/ecosystem-dashboard/core-units/ses-001/logo.png',
          name: 'Sustainable Ecosystem Scaling',
          shortCode: 'SES',
        },
        status: BudgetStatus.Draft,
        ownerType: '',
        month: '2023-09-01',
        ownerCode: 'ses',
        mkrProgramLength: 34,
        publicationUrl: '3432',
        activityFeed: [],
        auditReport: [],
        budgetStatementFTEs: [],
        budgetStatementMKRVest: [],
        budgetStatementWallet: [],
        comments: [],
        actualExpenses: 865423,
        forecastExpenses: 0,
        paymentsOnChain: 0,
        paymentsOffChain: 0,
      },
    ],
    cuMip: null,
  },
  {
    id: '45',
    code: 'RISK-01',
    shortCode: 'RISK',
    name: 'RISK-01',
    image: 'https://makerdao-ses.github.io/ecosystem-dashboard/core-units/risk-001/RISK_logo.png',
    category: [],
    sentenceDescription: '',
    paragraphDescription: '',
    paragraphImage: '',
    lastModified: DateTime.fromISO('2023-09-01T09:08:34.123'),
    reportMonth: DateTime.fromISO('2023-09-01T09:08:34.123'),
    totalActuals: 2048873,
    lastActivity: {
      id: '343',
      created_at: '2023-09-01T09:08:34.123',
      event: 'event',
      params: {},
      description: '',
    },
    legacyBudgetStatementUrl: '',
    budgetId: '',
    type: ResourceType.CoreUnit,
    auditors: [],
    socialMediaChannels: [],
    contributorCommitment: [],
    cuGithubContribution: [],
    updates: [],
    scopes: [],
    budgetStatements: [
      {
        id: '234',
        owner: {
          id: '34',
          icon: 'https://makerdao-ses.github.io/ecosystem-dashboard/core-units/ses-001/logo.png',
          name: 'Sustainable Ecosystem Scaling',
          shortCode: 'SES',
        },
        status: BudgetStatus.Draft,
        ownerType: '',
        month: '2023-05-01',
        ownerCode: 'ses',
        mkrProgramLength: 34,
        publicationUrl: '3432',
        activityFeed: [{ created_at: '2023-09-01T09:08:34.123' } as ChangeTrackingEvent],
        auditReport: [],
        budgetStatementFTEs: [],
        budgetStatementMKRVest: [],
        budgetStatementWallet: [],
        comments: [],
        actualExpenses: 1125789,
        forecastExpenses: 0,
        paymentsOnChain: 0,
        paymentsOffChain: 0,
      },
    ],
    cuMip: null,
  },
  {
    id: '34',
    code: 'GOV-001',
    shortCode: 'GV',
    name: 'Governance Alpha',
    image: 'https://makerdao-ses.github.io/ecosystem-dashboard/core-units/pe-001/pe_logo.png',
    category: [],
    sentenceDescription: '',
    paragraphDescription: '',
    paragraphImage: '',
    lastModified: DateTime.fromISO('2023-09-22T09:08:34.123'),
    reportMonth: DateTime.fromISO('2014-01-25T09:08:34.123'),
    totalActuals: 2048873,
    lastActivity: {
      id: '343',
      created_at: '2023-09-01T09:08:34.123',
      event: 'event',
      params: {},
      description: '',
    },
    legacyBudgetStatementUrl: '',
    budgetId: '',
    type: ResourceType.EcosystemActor,
    auditors: [],
    socialMediaChannels: [],
    contributorCommitment: [],
    cuGithubContribution: [],
    updates: [],
    scopes: [],
    budgetStatements: [
      {
        id: '234',
        owner: {
          id: '34',
          icon: 'https://makerdao-ses.github.io/ecosystem-dashboard/core-units/ses-001/logo.png',
          name: 'Sustainable Ecosystem Scaling',
          shortCode: 'SES',
        },
        status: BudgetStatus.Final,
        ownerType: '',
        month: '2024-04-01',
        ownerCode: 'ses',
        mkrProgramLength: 34,
        publicationUrl: '3432',
        activityFeed: [],
        auditReport: [],
        budgetStatementFTEs: [],
        budgetStatementMKRVest: [],
        budgetStatementWallet: [],
        comments: [],
        actualExpenses: 256365,
        forecastExpenses: 0,
        paymentsOnChain: 0,
        paymentsOffChain: 0,
      },
    ],
    cuMip: null,
  },
  {
    id: '34',
    code: 'RWF-001',
    shortCode: 'RWF',
    name: 'Real-World Finance',
    image: 'https://makerdao-ses.github.io/ecosystem-dashboard/core-units/rwf-001/RWF_logo.png',
    category: [],
    sentenceDescription: '',
    paragraphDescription: '',
    paragraphImage: '',
    lastModified: DateTime.fromISO('2023-09-12T09:08:34.123'),
    reportMonth: DateTime.fromISO('2013-03-25T09:08:34.123'),
    totalActuals: 456347,
    lastActivity: {
      id: '343',
      created_at: '2023-09-01T09:08:34.123',
      event: 'event',
      params: {},
      description: '',
    },
    legacyBudgetStatementUrl: '',
    budgetId: '',
    type: ResourceType.CoreUnit,
    auditors: [],
    socialMediaChannels: [],
    contributorCommitment: [],
    cuGithubContribution: [],
    updates: [],
    scopes: [],
    budgetStatements: [],
    cuMip: null,
  },
  {
    id: '34',
    code: 'GRO-001',
    shortCode: 'GRO',
    name: 'Growth',
    image: 'https://makerdao-ses.github.io/ecosystem-dashboard/core-units/gro-001/gro_logo.png',
    category: [],
    sentenceDescription: '',
    paragraphDescription: '',
    paragraphImage: '',
    lastModified: DateTime.fromISO('2023-09-02T09:08:34.123'),
    reportMonth: DateTime.fromISO('2012-04-25T09:08:34.123'),
    totalActuals: 244567,
    lastActivity: {
      id: '343',
      created_at: '2023-09-01T09:08:34.123',
      event: 'event',
      params: {},
      description: '',
    },
    legacyBudgetStatementUrl: '',
    budgetId: '',
    type: ResourceType.CoreUnit,
    auditors: [],
    socialMediaChannels: [],
    contributorCommitment: [],
    cuGithubContribution: [],
    updates: [],
    scopes: [],
    budgetStatements: [],
    cuMip: null,
  },
  {
    id: '34',
    code: 'GRO-001',
    shortCode: 'GRO',
    name: 'Growth',
    image: 'https://makerdao-ses.github.io/ecosystem-dashboard/core-units/gro-001/gro_logo.png',
    category: [],
    sentenceDescription: '',
    paragraphDescription: '',
    paragraphImage: '',
    lastModified: DateTime.fromISO('2023-09-02T09:08:34.123'),
    reportMonth: DateTime.fromISO('2012-04-25T09:08:34.123'),
    totalActuals: 244567,
    lastActivity: {
      id: '343',
      created_at: '2023-09-01T09:08:34.123',
      event: 'event',
      params: {},
      description: '',
    },
    legacyBudgetStatementUrl: '',
    budgetId: '',
    type: ResourceType.CoreUnit,
    auditors: [],
    socialMediaChannels: [],
    contributorCommitment: [],
    cuGithubContribution: [],
    updates: [],
    scopes: [],
    budgetStatements: [],
    cuMip: null,
  },
];

// TODO: Update function when are data in the API
export const getStatus = (budget: BudgetStatement[]) => budget[0]?.status;
export const getShowCTA = () => false;
export const getQuarterlyForFilters = (year: string): string[] => {
  const period: string[] = [];
  for (let i = 1; i <= 4; i++) {
    period.push(`Q${i} ${year}`);
  }
  return period;
};
export const getSemiAnnualForFilters = (year: string): string[] => [`H${1} ${year}`, `H${2} ${year}`];
export const getExpenseMonthWithData = (budget: BudgetStatement) => {
  if (budget.activityFeed?.length) {
    return DateTime.fromISO(budget.activityFeed?.[0]?.created_at);
  }

  return undefined;
};

export const isCoreUnit = (item: MomentDataItem) => item?.type === ResourceType.CoreUnit;

export const getHeadersExpenseReport = (
  headersSort: SortEnum[],
  selectedMetric: string,
  isSmallDesk: boolean
): DelegateExpenseTableHeader[] => [
  {
    header: 'Contributors',
    styles: {
      boxSizing: 'border-box',
      minWidth: 310,
      paddingLeft: 16,
    },
    sortReverse: true,
    sort: headersSort[0],
  },
  {
    header: isSmallDesk ? 'Rep Month' : 'Reporting Month',
    styles: {
      width: 130,
      marginLeft: -22,

      [lightTheme.breakpoints.up('desktop_1280')]: {
        width: 152,
        marginLeft: -22,
      },
      [lightTheme.breakpoints.up('desktop_1440')]: {
        marginLeft: -102,
      },
    },
    sortReverse: true,
    sort: headersSort[1],
  },
  {
    header: selectedMetric.replace('Expenses', ''),
    sort: headersSort[2],
    styles: {
      width: 130,
      marginLeft: -26,

      [lightTheme.breakpoints.up('desktop_1280')]: {
        marginLeft: -52,
      },
      [lightTheme.breakpoints.up('desktop_1440')]: {
        marginLeft: -102,
        justifyContent: 'center',
      },
    },
    sortReverse: true,
  },

  {
    header: 'Status',
    sort: headersSort[3],
    styles: {
      width: 100,
      marginLeft: -20,
      [lightTheme.breakpoints.up('desktop_1280')]: {
        marginLeft: -22,
      },
      [lightTheme.breakpoints.up('desktop_1440')]: {
        marginLeft: -80,
        justifyContent: 'center',
      },
    },
    sortReverse: true,
  },
  {
    header: 'Last Modified',
    sort: headersSort[4],
    styles: {
      width: 130,

      [lightTheme.breakpoints.up('desktop_1280')]: {
        marginLeft: 30,
      },
      [lightTheme.breakpoints.up('desktop_1440')]: {
        marginLeft: 0,
        marginRight: -80,
        justifyContent: 'center',
      },
    },
    sortReverse: true,
  },
  {
    header: '',
    sort: SortEnum.Disabled,
    styles: {
      width: 111,
      [lightTheme.breakpoints.up('desktop_1280')]: {
        marginLeft: 0,
        width: 110,
      },
      [lightTheme.breakpoints.up('desktop_1440')]: {
        marginLeft: 0,
        justifyContent: 'center',
      },
    },
    sortReverse: true,
  },
];

export const enumForStories: SortEnum[] = [
  SortEnum.Asc,
  SortEnum.Neutral,
  SortEnum.Neutral,
  SortEnum.Neutral,
  SortEnum.Neutral,
];

export const getLinkLastExpenseReport = (code: string, reportExpenseItems: MomentDataItem[]) => {
  const reportResult = reportExpenseItems.find((report) => report.shortCode === code);
  if (reportResult) {
    const typeReport = isCoreUnit(reportResult);
    if (typeReport) {
      return siteRoutes.coreUnitAbout(code);
    } else {
      return siteRoutes.ecosystemActorAbout(code);
    }
  }
};

export const monthAbbreviations = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const getMetricByPeriod = (
  period: PeriodicSelectionFilter,
  isMobile: boolean,
  isTable: boolean,
  isDesk1024: boolean,
  isDesk1280: boolean,
  isDesk1440: boolean,
  isDesk1920: boolean
) => {
  let metricsCount = 0;

  // This is for metrics base on the resolution
  if (period === 'Semi-annual') {
    metricsCount = 1;
  } else if (period === 'Annually') {
    if (isMobile) {
      metricsCount = 3;
    } else {
      metricsCount = 5;
    }
  } else if (period === 'Monthly' && (isDesk1440 || isDesk1920)) {
    metricsCount = 1;
  } else if (period === 'Quarterly') {
    if (isTable) metricsCount = 1;
    if (isDesk1024 || isDesk1280 || isDesk1440) metricsCount = 2;
    if (isDesk1920) metricsCount = 3;
  }

  return metricsCount;
};

export const sortDataByElementCount = (data: TableFinances[]) => {
  if (!data) {
    return [];
  }
  return data.sort((a, b) => b.rows.length - a.rows.length);
};

// Get first element of each table that always have to appear
export const getFirstElementEachTable = (data: TableFinances[]): ItemRow[] => {
  const orderData = sortDataByElementCount(data);
  const getFirstElements = orderData.map((item: TableFinances) => item.rows[0]);
  return getFirstElements;
};

export const showOnlySixteenRowsWithOthers = (data: TableFinances[]) => {
  const maxRows = NUMBER_ROWS_FINANCES_TABLE;
  const others: ItemRow[] = [];
  let totalRowsPerTable = 0;
  let itemArrayTableHasOthers: TableFinances = {
    rows: [],
    tableName: '',
    others: false,
  };

  const orderData = sortDataByElementCount(data);
  const firstElementOfArray = getFirstElementEachTable(orderData);
  // Take the first element of each table
  const result = firstElementOfArray.map((row, index) => ({
    tableName: orderData[index].tableName,
    rows: [firstElementOfArray[index]],
    others: false,
  }));
  const totalRows = data.reduce((acc, element) => acc + element.rows.length, 0);
  const numberHeaders = data.length;
  if (totalRows <= maxRows) {
    return data;
  }
  for (const item of orderData) {
    // Stop if some table with the header of all table sum 16
    if (item.rows.length + totalRowsPerTable + firstElementOfArray.length - 1 > maxRows) {
      itemArrayTableHasOthers = {
        rows: item.rows,
        others: true,
        tableName: item.tableName,
      };

      break;
    }

    const indexItem = result.findIndex((element) => element.tableName === item.tableName);

    const takeAllElementLessOne = item.rows.slice(1, item.rows.length);

    result[indexItem].rows.push(...takeAllElementLessOne);
    totalRowsPerTable += item.rows.length;
  }
  // Rest on, because already take from each table
  if (itemArrayTableHasOthers.rows.length <= maxRows && totalRowsPerTable - 1 + numberHeaders !== maxRows) {
    const indexItem = result.findIndex((element) => element.tableName === itemArrayTableHasOthers.tableName);

    itemArrayTableHasOthers.rows.forEach((item, index) => {
      if (totalRowsPerTable + numberHeaders < maxRows && index !== 0) {
        result[indexItem].rows.push(item);

        totalRowsPerTable++;
      } else {
        // Only put if not the one element
        if (index !== 0) {
          others.push(item);
        }
      }
    });

    if (indexItem !== orderData.length - 1) {
      result[indexItem].others = true;
      const resultOthers = getMetricsForOthersRow(others);
      result[indexItem].rows.push(resultOthers);
    } else {
      result[indexItem].others = false;
    }
  }

  return result;
};
export const generateColorPalette = (index: number, numColors: number, existingColors: string[] = []) => {
  const baseHue = (index * (360 / numColors)) % 360;
  const colors = [];

  for (let i = 0; i < numColors; i++) {
    const hue = (baseHue + i * (360 / numColors)) % 360;
    const color = `hsl(${hue}, 70%, 50%)`;
    colors.push(color);
  }

  return [...existingColors, ...colors];
};
// Remove prefix in the string
export const removePrefix = (inputString: string, prefix: string) => {
  if (!inputString) return 'No-Name';
  const escapedPrefix = prefix.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`^${escapedPrefix}\\s*`, 'i');
  const result = inputString.replace(regex, '');
  return result;
};
// Prefix to delete from Api text
export const prefixToRemove = 'End-game';

// Colors for the first level in Finances Charts OverView
export const existingColors: string[] = ['#F99374', '#447AFB', '#2DC1B1'];
export const existingColorsDark: string[] = ['#F77249', '#447AFB', '#1AAB9B'];

// Got all the level
export const getNumbersFromIdPath = (idPath: string) => {
  if (idPath.length === 0) {
    return idPath;
  }
  const numbers = idPath.split('/').map((item) => item);
  return numbers;
};

const fillArrayWhenNoData = (series: { value: number }[]) => {
  const filledArray = new Array<{ value: number }>(12).fill({ value: 0 });

  const monthWithData = series.map((item) => ({
    value: item.value,
  }));
  monthWithData.forEach((itemY, index) => {
    filledArray[index] = {
      value: itemY.value || 0,
    };
  });
  return filledArray;
};

export const processingData = (series: { value: number }[]) => {
  const fillingArray = fillArrayWhenNoData(series);
  return fillingArray;
};

export const getYearsRange = () => {
  const year = DateTime.utc().year;
  const yearsRange = Array(1 + year - 2021)
    .fill('')
    .map((_, i) => (year - i).toString());
  return yearsRange;
};

const setMetric = (value: number, unit: string) =>
  ({
    value: Math.abs(value),
    unit,
  } as ValueAndUnit);

export const newBudgetMetric = () =>
  ({
    actuals: setMetric(0, ''),
    budget: setMetric(0, ''),
    forecast: setMetric(0, ''),
    paymentsOnChain: setMetric(0, ''),
    paymentsOffChainIncluded: setMetric(0, ''),
  } as BudgetMetric);

const getArrayAnalytic = (granularity: AnalyticGranularity): BudgetMetric[] => {
  const createBudgetMetric = () => ({
    actuals: {
      value: 0,
      unit: 'DAI',
    },
    budget: {
      value: 0,
      unit: 'DAI',
    },
    forecast: {
      value: 0,
      unit: 'DAI',
    },
    paymentsOnChain: {
      value: 0,
      unit: 'DAI',
    },
    paymentsOffChainIncluded: {
      value: 0,
      unit: 'DAI',
    },
  });

  let arrayLength;
  switch (granularity) {
    case 'monthly':
      arrayLength = 12;
      break;
    case 'quarterly':
      arrayLength = 4;
      break;
    case 'annual':
      arrayLength = 1;
      break;
    case 'semiAnnual':
      arrayLength = 2;
      break;
    default:
      arrayLength = 4;
  }

  return Array.from({ length: arrayLength }, createBudgetMetric);
};

const getBreakdownAnalytics = (
  analytics: Analytic,
  budgets: Budget[],
  granularity: AnalyticGranularity
): BreakdownBudgetAnalytic => {
  const budgetsAnalytics: BreakdownBudgetAnalytic = {};
  budgets.forEach((budget) => {
    const analyticsArray = getArrayAnalytic(granularity);

    budgetsAnalytics[`${budget.codePath}`] = analyticsArray;

    analytics.series.forEach((seriesItem, index) => {
      const budgetMetric = budgetsAnalytics[budget.codePath][index] || newBudgetMetric();

      seriesItem.rows.forEach((row) => {
        const budgetPath = row.dimensions.find((dimension) => dimension.name === 'budget')?.path;

        if (budget.codePath === budgetPath) {
          switch (row.metric) {
            case 'Actuals':
              budgetMetric.actuals = setMetric(row.value, row.unit);
              break;
            case 'Forecast':
              budgetMetric.forecast = setMetric(row.value, row.unit);
              break;
            case 'Budget':
              budgetMetric.budget = setMetric(row.value, row.unit);
              break;
            case 'PaymentsOnChain':
              budgetMetric.paymentsOnChain = setMetric(row.value, row.unit);
              break;
            case 'PaymentsOffChainIncluded':
              budgetMetric.paymentsOffChainIncluded = setMetric(row.value, row.unit);
              break;
            default:
              break;
          }
        }
        budgetsAnalytics[budget.codePath][index] = budgetMetric;
      });
    });
  });

  return budgetsAnalytics;
};

export const getBudgetsAnalytics = async (
  granularity: AnalyticGranularity,
  year: string,
  select: string,
  lod: number,
  budgets: Budget[]
) => {
  const analytics = await fetchAnalytics(granularity, year, select, lod);

  return getBreakdownAnalytics(analytics, budgets, granularity); // temporary
};

export const getLevelOfBudget = (levelPath: string) => {
  if (!levelPath) return 1;
  return levelPath.split('/').length + 1;
};
export const colors: string[] = ['#F99374', '#447AFB', '#2DC1B1'];
export const colorsDark: string[] = ['#F77249', '#447AFB', '#1AAB9B'];

// Legend for breakdown chart
export const breakdownChartMonthly = (isMobile: boolean, isWaterFall = false) => {
  const defaultArray = [
    isMobile ? 'J' : 'JAN',
    isMobile ? 'F' : 'FEB',
    isMobile ? 'M' : 'MAR',
    isMobile ? 'A' : 'APR',
    isMobile ? 'M' : 'MAY',
    isMobile ? 'J' : 'JUN',
    isMobile ? 'J' : 'JUL',
    isMobile ? 'A' : 'AUG',
    isMobile ? 'S' : 'SEP',
    isMobile ? 'O' : 'OCT',
    isMobile ? 'N' : 'NOV',
    isMobile ? 'D' : 'DEC',
  ];
  if (isWaterFall) {
    const start = isMobile ? 'S' : 'START';
    const finish = isMobile ? 'F' : 'FINISH';
    defaultArray.unshift(start);
    defaultArray.push(finish);
  }
  return defaultArray;
};

export const breakdownChartQuarterly = () => ['Q’1', 'Q’2', 'Q’3', 'Q’4'];
export const breakdownChartQuarterlyMetric = () => ['1ST QUARTER ', '2ND QUARTER', '3RD QUARTER', '4TH QUARTER'];
export const breakdownChartAnnually = () => ['Year'];
export const getGranularity = (granularity: AnalyticGranularity, isMobile: boolean, isWaterFall = false) => {
  switch (granularity?.toLocaleLowerCase()) {
    case 'monthly':
      return breakdownChartMonthly(isMobile, isWaterFall);
    case 'quarterly':
      return breakdownChartQuarterly();
    case 'annually':
      return breakdownChartAnnually();
    default:
      breakdownChartQuarterly();
  }
};

export const formatterBreakDownChart = (
  granularity: AnalyticGranularity,
  isMobile: boolean,
  year: string,
  value: string
) => {
  switch (granularity.toLocaleLowerCase()) {
    case 'monthly':
      if (isMobile) return value;
      return `{month|${value}}\n{year|${year}}`;
    case 'quarterly':
      return `{month|${value}}  {year|${year}}`;
    case 'annually':
      return `{month|${year}}`;
    default:
      return `{month|${value}}\n{year|${year}}`;
  }
};

export const getCorrectMetric = (budgetMetric: BudgetMetric, selectedMetric: Metric): ValuesDataWithBorder => {
  let metricKey: keyof BudgetMetric;
  switch (selectedMetric) {
    case 'Actuals':
      metricKey = 'actuals';
      break;
    case 'Forecast':
      metricKey = 'forecast';
      break;
    case 'Net Expenses On-chain':
      metricKey = 'paymentsOnChain';
      break;
    case 'Net Exp. On-Chain':
      metricKey = 'paymentsOnChain';
      break;
    case 'Net Expenses Off-chain':
      metricKey = 'paymentsOffChainIncluded';
      break;
    case 'Net Exp. Off-Chain Incl.':
      metricKey = 'paymentsOffChainIncluded';
      break;
    default:
      metricKey = 'budget';
  }

  return {
    value: budgetMetric[metricKey]?.value || 0,
    itemStyle: {
      borderRadius: [0, 0, 0, 0],
    },
  };
};

export const buildExpenseMetricsLineChartSeries = (
  data: {
    budget: number[];
    forecast: number[];
    actuals: number[];
    onChain: number[];
    offChain: number[];
  },
  inactiveSeries: string[],
  isLight: boolean
) => {
  const disabled = {
    Budget: inactiveSeries.includes('Budget'),
    Forecast: inactiveSeries.includes('Forecast'),
    Actuals: inactiveSeries.includes('Actuals'),
    'Net Expenses On-chain': inactiveSeries.includes('Net Expenses On-chain'),
    'Net Expenses Off-chain': inactiveSeries.includes('Net Expenses Off-chain'),
  };

  return [
    {
      name: 'Budget',
      data: disabled.Budget ? [] : data?.budget,
      type: 'line',
      itemStyle: {
        color: disabled.Budget ? '#ccc' : isLight ? '#F99374' : '#F77249',
      },
      isVisible: !disabled.Budget,
    },
    {
      name: 'Forecast',
      data: disabled.Forecast ? [] : data?.forecast,
      type: 'line',
      itemStyle: {
        color: disabled.Forecast ? '#ccc' : isLight ? '#447AFB' : '#447AFB',
      },
      isVisible: !disabled.Forecast,
    },
    {
      name: 'Actuals',
      data: disabled.Actuals ? [] : data?.actuals,
      type: 'line',
      itemStyle: {
        color: disabled.Actuals ? '#ccc' : isLight ? '#2DC1B1' : '#1AAB9B',
      },
      isVisible: !disabled.Actuals,
    },
    {
      name: 'Net Expenses On-chain',
      data: disabled['Net Expenses On-chain'] ? [] : data?.onChain,
      type: 'line',
      itemStyle: {
        color: disabled['Net Expenses On-chain'] ? '#ccc' : isLight ? '#FBCC5F' : '#FDC134',
      },
      isVisible: !disabled['Net Expenses On-chain'],
    },
    {
      name: 'Net Expenses Off-chain',
      data: disabled['Net Expenses Off-chain'] ? [] : data?.offChain,
      type: 'line',
      itemStyle: {
        color: disabled['Net Expenses Off-chain'] ? '#ccc' : isLight ? '#7C6B95' : '#6C40AA',
      },
      isVisible: !disabled['Net Expenses Off-chain'],
    },
  ] as LineChartSeriesData[];
};

export const getMetricsForOthersRow = (metrics: ItemRow[]): ItemRow => {
  const defaultValue: ItemRow = {
    name: 'Others',
    columns: [],
  } as ItemRow;

  if (metrics.length === 0) {
    return defaultValue;
  }

  const firstItem = metrics[0];
  const sumCol: MetricValues[] = [];

  for (let i = 0; i < firstItem.columns.length; i++) {
    const sumMetric: MetricValues = {
      Actuals: 0,
      Budget: 0,
      Forecast: 0,
      PaymentsOnChain: 0,
      PaymentsOffChainIncluded: 0,
    };

    for (const item of metrics) {
      const column = item.columns[i];
      sumMetric.Actuals += column.Actuals;
      sumMetric.Forecast += column.Forecast;
      sumMetric.Budget += column.Budget;
      sumMetric.PaymentsOnChain += column.PaymentsOnChain;
      sumMetric.PaymentsOffChainIncluded += column.PaymentsOffChainIncluded;
    }

    sumCol.push(sumMetric);
  }

  return {
    name: 'Others',
    columns: [...sumCol],
  } as ItemRow;
};

export const filterActiveMetrics = (activeMetrics: string[], headerTable: MetricValues[]) =>
  headerTable.map((header) => {
    const filteredMetrics: Partial<MetricValues> = {};

    activeMetrics.forEach((metric) => {
      const matchKey = getKeyMetric(metric);
      if (matchKey in header) {
        filteredMetrics[matchKey as keyof MetricValues] = header[matchKey as keyof MetricValues];
      }
    });

    return filteredMetrics;
  });

export const getShortNameForMetric = (metric: string): string => {
  if (metric === 'Net Expenses On-chain') {
    return 'On-chain';
  }
  if (metric === 'Net Expenses Off-chain') {
    return 'Off-chain';
  }
  return metric;
};
// Remove this when API return correct data
export const nameChanged = (name: string) => {
  const newName = removePrefix(name, prefixToRemove);
  return newName === 'Atlas Immutable'
    ? 'Atlas Immutable Budget'
    : newName === 'Alignment Scope Budgets'
    ? 'Scope Frameworks Budget'
    : newName === 'MakerDAO Legacy Budgets'
    ? 'MakerDAO Legacy Budget'
    : newName;
};

export const getKeyMetric = (metric: string) => {
  if (metric === 'Net Expenses On-chain') {
    return 'PaymentsOnChain';
  }
  if (metric === 'Net Expenses Off-chain') {
    return 'PaymentsOffChainIncluded';
  }
  return metric;
};
