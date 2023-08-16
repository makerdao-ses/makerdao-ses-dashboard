import { createThemeModeVariants } from '@ses/core/utils/storybook/factories';
import BreadcrumbYearNavigation from './BreadcrumbYearNavigation';
import type { NavigationBreadcrumb } from '@ses/components/Breadcrumbs/Breadcrumbs';
import type { ComponentMeta } from '@storybook/react';
import type { FigmaParams } from 'storybook-addon-figma-comparator/dist/ts/types';

export default {
  title: 'Pages/NewFinances/BreadcrumbYearNavigation',
  component: BreadcrumbYearNavigation,

  parameters: {
    chromatic: {
      viewports: [1440],
      pauseAnimationAtEnd: true,
    },
  },
} as ComponentMeta<typeof BreadcrumbYearNavigation>;

const args = [
  {
    years: ['2022', '2023'],
    handleChange: () => null,
    onOpen: () => null,
    onClose: () => null,
    selectedValue: '2023',
    isOpen: false,
    trailingAddress: [
      {
        label: 'Finances',
        url: '#',
      },
    ] as NavigationBreadcrumb[],
  },
];
export const [[LightMode, DarkMode]] = createThemeModeVariants(BreadcrumbYearNavigation, args);

LightMode.parameters = {
  figma: {
    component: {
      1440: {
        component:
          'https://www.figma.com/file/pyaYEjcwF2b5uf9y0vIfIy/SES-Dashboard?type=design&node-id=22069:258713&mode=dev',
        options: {
          componentStyle: {
            width: 1440,
          },
          style: {
            top: -1,
            left: -1,
          },
        },
      },
    },
  } as FigmaParams,
};
