import type { Meta, StoryObj } from '@storybook/react';

import { Space } from '../../components';

const meta = {
  title: 'Example/Space',
  component: Space,
  tags: ['autodocs'],
  argTypes: {
    children: { type: 'symbol' },
  },
} satisfies Meta<typeof Space>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: (
      <>
        <div className="w-14 h-14 flex items-center justify-center text-white rounded-lg bg-fuchsia-500">
          01
        </div>
        <div className="w-14 h-14 flex items-center justify-center text-white rounded-lg bg-fuchsia-500">
          02
        </div>
        <div className="w-14 h-14 flex items-center justify-center text-white rounded-lg bg-fuchsia-500">
          03
        </div>
      </>
    ),
  },
};
