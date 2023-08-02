import { EcosystemActorBuilder } from '@ses/core/businessLogic/builders/actors/actorsBuilder';
import { ResourceType } from '@ses/core/models/interfaces/types';
import { createThemeModeVariants } from '@ses/core/utils/storybook/factories';
import ActorItem from './ActorItem';
import type { SocialMediaChannels } from '@ses/core/models/interfaces/socialMedia';
import type { ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/Actor/ActorItem',
  component: ActorItem,
  parameters: {
    chromatic: {
      viewports: [375, 834, 1194, 1440],
    },
    date: new Date('2023-07-12T09:08:34.123'),
  },
} as ComponentMeta<typeof ActorItem>;
const variantsArgs = [
  {
    actor: new EcosystemActorBuilder()
      .withId('23')
      .withCode('PH-001')
      .withName('Powerhouse Inc.')
      .withType(ResourceType.EcosystemActor)
      .withImage('https://live.staticflickr.com/65535/52808669587_127cc79684_m.jpg')
      .withLastActivity({
        created_at: '2023-07-12T09:08:34.123',
        description: '',
        event: '',
        params: {},
        id: '45',
      })
      .addCategory('Active Ecosystem Actor')
      .addScope({
        id: '1',
        code: 'SUP',
        name: 'Support Scope',
      })
      .addScope({
        id: '3',
        code: 'STA',
        name: 'Stability Scope',
      })
      .withSocials({
        twitter: '#',
        forumProfile: '#',
        forumPlatform: '#',
        youtube: '#',
        votingPortal: '#',
        forumTag: '#',
        github: '#',
        discord: '#',
        website: '#',
        linkedIn: '#',
      } as SocialMediaChannels)
      .build(),
  },
  {
    actor: new EcosystemActorBuilder()
      .withId('23')
      .withCode('PH-001')
      .withName('Phoenix Labs')
      .withType(ResourceType.EcosystemActor)
      .withImage('https://live.staticflickr.com/65535/52808669587_127cc79684_m.jpg')
      .addCategory('Scope Facilitator')
      .addScope({
        id: '1',
        code: 'SUP',
        name: 'Support Scope',
      })
      .addScope({
        id: '3',
        code: 'ACC',
        name: 'Accessibility Scope',
      })
      .withSocials({
        twitter: '#',
        github: '#',
        discord: '#',
      } as SocialMediaChannels)
      .build(),
  },
];

export const [[Actors, ActorsDark], [ActorsNoData, ActorsNoDataDark]] = createThemeModeVariants(
  ActorItem,
  variantsArgs
);

Actors.parameters = {
  figma: {
    component: {
      375: {
        component:
          'https://www.figma.com/file/pyaYEjcwF2b5uf9y0vIfIy/SES-Dashboard?type=design&node-id=20207:261117&mode=design&t=wRmSRg2ehkFZ7VM6-4',
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
      834: {
        component:
          'https://www.figma.com/file/pyaYEjcwF2b5uf9y0vIfIy/SES-Dashboard?type=design&node-id=20191:258352&mode=dev',
        options: {
          style: {
            left: -12,
            top: -8,
          },
          componentStyle: {
            width: 770,
          },
        },
      },
      1194: {
        component:
          'https://www.figma.com/file/pyaYEjcwF2b5uf9y0vIfIy/SES-Dashboard?type=design&node-id=21280:239621&mode=design&t=5e4k5IXzEp49OBht-4',
        options: {
          style: {
            left: -3,
            top: -3,
          },
          componentStyle: {
            width: 1130,
          },
        },
      },
      1280: {
        component:
          'https://www.figma.com/file/pyaYEjcwF2b5uf9y0vIfIy/SES-Dashboard?type=design&node-id=21280:240472&mode=design&t=lb9naPStBM41CUSA-4',
        options: {
          style: {
            left: -3,
            top: -3,
          },
          componentStyle: {
            width: 1184,
          },
        },
      },
      1440: {
        component:
          'https://www.figma.com/file/pyaYEjcwF2b5uf9y0vIfIy/SES-Dashboard?type=design&node-id=21280:242349&mode=design&t=lb9naPStBM41CUSA-4',
        options: {
          style: {
            left: -3,
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
ActorsNoData.parameters = {
  figma: {
    component: {
      375: {
        component:
          'https://www.figma.com/file/pyaYEjcwF2b5uf9y0vIfIy/SES-Dashboard?type=design&node-id=20802:265431&mode=design&t=I60yJeKsDvkkmRMX-4',
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
      834: {
        component:
          'https://www.figma.com/file/pyaYEjcwF2b5uf9y0vIfIy/SES-Dashboard?type=design&node-id=21280:239020&mode=design&t=I60yJeKsDvkkmRMX-4',
        options: {
          style: {
            left: -12,
            top: -8,
          },
          componentStyle: {
            width: 770,
          },
        },
      },
      1194: {
        component:
          'https://www.figma.com/file/pyaYEjcwF2b5uf9y0vIfIy/SES-Dashboard?type=design&node-id=20191:256836&mode=design&t=I60yJeKsDvkkmRMX-4',
        options: {
          style: {
            left: -3,
            top: -3,
          },
          componentStyle: {
            width: 1130,
          },
        },
      },
      1280: {
        component:
          'https://www.figma.com/file/pyaYEjcwF2b5uf9y0vIfIy/SES-Dashboard?type=design&node-id=21280:240505&mode=design&t=I60yJeKsDvkkmRMX-4',
        options: {
          style: {
            left: -3,
            top: -3,
          },
          componentStyle: {
            width: 1184,
          },
        },
      },
      1440: {
        component:
          'https://www.figma.com/file/pyaYEjcwF2b5uf9y0vIfIy/SES-Dashboard?type=design&node-id=21280:242382&mode=design&t=I60yJeKsDvkkmRMX-4',
        options: {
          style: {
            left: -3,
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

ActorsDark.parameters = {};
