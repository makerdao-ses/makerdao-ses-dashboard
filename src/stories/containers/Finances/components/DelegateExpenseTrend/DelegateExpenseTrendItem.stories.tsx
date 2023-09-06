import { createThemeModeVariants } from '@ses/core/utils/storybook/factories';
import { mockDataApiTeam } from '../../utils/utils';
import DelegateExpenseTrendItem from './DelegateExpenseTrendItem';

import type { ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/NewFinances/DelegateExpenseTrendItem',
  component: DelegateExpenseTrendItem,
  parameters: {
    chromatic: {
      viewports: [375, 834, 1194, 1280, 1440, 1920],
    },
    date: new Date('2023-03-14T09:08:34.123'),
  },
} as ComponentMeta<typeof DelegateExpenseTrendItem>;
const variantsArgs = [
  {
    handleLinkToPage: () => null,
    link: '#',
    isMobile: false,
    expenseReport: mockDataApiTeam[0],
  },
  {
    handleLinkToPage: () => null,
    link: '#',
    isMobile: true,
    expenseReport: mockDataApiTeam[0],
  },
];

export const [[DelegateExpense, DelegateExpenseDark], [DelegateExpenseMobile, DelegateExpenseMobileDark]] =
  createThemeModeVariants(DelegateExpenseTrendItem, variantsArgs);

DelegateExpense.parameters = {
  figma: {
    component: {
      834: {
        component:
          'https://www.figma.com/file/pyaYEjcwF2b5uf9y0vIfIy/SES-Dashboard?type=design&node-id=23823:194172&mode=dev',
        options: {
          style: {
            left: -12,
            top: -10,
          },
          componentStyle: {
            width: 770,
          },
        },
      },
      1194: {
        component:
          'https://www.figma.com/file/pyaYEjcwF2b5uf9y0vIfIy/SES-Dashboard?type=design&node-id=22944:241828&mode=dev',
        options: {
          style: {
            left: -4,

            top: -2,
          },
          componentStyle: {
            width: 1130,
          },
        },
      },
      1280: {
        component:
          'https://www.figma.com/file/pyaYEjcwF2b5uf9y0vIfIy/SES-Dashboard?type=design&node-id=22935:214505&mode=dev',
        options: {
          style: {
            left: -4,

            top: -2,
          },
          componentStyle: {
            width: 1184,
          },
        },
      },
      1440: {
        component:
          'https://www.figma.com/file/pyaYEjcwF2b5uf9y0vIfIy/SES-Dashboard?type=design&node-id=22935:200767&mode=dev',
        options: {
          style: {
            left: -4,

            top: -2,
          },
          componentStyle: {
            width: 1312,
          },
        },
      },
      1920: {
        component:
          'https://www.figma.com/file/pyaYEjcwF2b5uf9y0vIfIy/SES-Dashboard?type=design&node-id=22935:205067&mode=dev',
        options: {
          style: {
            left: -4,
            top: -2,
          },
          componentStyle: {
            width: 1312,
          },
        },
      },
    },
  },
};

DelegateExpenseDark.parameters = {};
DelegateExpenseMobile.parameters = {
  chromatic: {
    viewports: [375],
  },
  figma: {
    component: {
      375: {
        component:
          'https://www.figma.com/file/pyaYEjcwF2b5uf9y0vIfIy/SES-Dashboard?type=design&node-id=24106:111266&mode=dev',
        options: {
          style: {
            left: -40,
            top: -20,
          },
          componentStyle: {
            width: 343,
          },
        },
      },
    },
  },
};
DelegateExpenseMobileDark.parameters = {};
