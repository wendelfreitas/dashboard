import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { MediaMatchProps } from './index';
import MediaMatch from '.';

export default {
  title: 'Utils/Media Match',
  component: MediaMatch,
  parameters: {
    docs: {
      description: {
        component:
          'A utility component to use media query inside components, without condiotionals.',
      },
    },
  },
} as Meta;

/**
 * Primary UI component for user interaction
 */
export const Desktop: Story<MediaMatchProps> = () => (
  <MediaMatch greaterThan="medium">Only on Desktop</MediaMatch>
);

Desktop.parameters = {
  docs: {
    description: {
      story:
        'Simple wrapper to render conditional components when user is in **desktop**.',
    },
  },
};

export const Mobile: Story<MediaMatchProps> = () => (
  <MediaMatch lessThan="medium">Only on Mobile</MediaMatch>
);

Mobile.parameters = {
  docs: {
    description: {
      story:
        'Simple wrapper to render conditional components when user is in **mobile**.',
    },
  },
  viewport: {
    defaultViewport: 'mobile1',
  },
};
