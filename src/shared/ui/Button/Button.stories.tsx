import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonTheme } from './Button';

const meta = {
  title: 'shared/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Click',
  },
};

export const ClearTheme: Story = {
  args: {
    children: 'Click',
    theme: ButtonTheme.CLEAR,
  },
};

export const OutlineTheme: Story = {
  args: {
    children: 'Click',
    theme: ButtonTheme.OUTLINE,
  },
};
