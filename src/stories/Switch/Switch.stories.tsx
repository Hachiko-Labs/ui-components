import type { Meta, StoryObj } from '@storybook/react';

import { Switch } from '../../components';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Example/Switch',
  component: Switch,
  tags: ['autodocs'],
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithLabel = (args: any) => (
  <div className="flex items-center">
    <label className="mr-2">Label</label>
    <Switch {...args} />
  </div>
);

export const DefaultChecked: Story = {
  args: {
    defaultChecked: true,
  },
};

export const Small: Story = {
  args: {
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
  },
};
