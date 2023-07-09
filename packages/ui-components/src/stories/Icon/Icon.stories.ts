import type { Meta, StoryObj } from '@storybook/react'

import { Icon } from '../../components'

const meta = {
  title: 'Example/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    onClick: { type: 'function' },
  },
} satisfies Meta<typeof Icon>

export default meta
type Story = StoryObj<typeof meta>

export const MaterialIcon: Story = {
  args: {
    children: 'add',
  },
}

export const CustomIcon: Story = {
  args: {
    customIcon: 'spinner',
  },
}
