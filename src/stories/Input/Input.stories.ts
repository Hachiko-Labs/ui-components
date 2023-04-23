import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '../../components';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Example/Input',
  component: Input,
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Small: Story = {
  args: {
    placeholder: 'Basic usage',
    size: 'small',
    bordered: false,
    disabled: false,
  },
};

export const Medium: Story = {
  args: {
    placeholder: 'Basic usage',
    size: 'medium',
    bordered: false,
  },
};

export const Large: Story = {
  args: {
    placeholder: 'Basic usage',
    size: 'large',
    bordered: false,
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Basic usage',
    size: 'medium',
    disabled: true,
    bordered: true,
  },
};
