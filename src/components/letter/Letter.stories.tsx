import type { Meta, StoryObj } from '@storybook/react';
import { Letter } from "./Letter";

const meta = {
    title: 'Example/Letter',
    component: Letter,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Letter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
    args: {
        letter: 'N',
        state: 'idle'
    },
};

export const Wrong: Story = {
    args: {
        letter: 'N',
        state: 'wrongLetter'
    },
};

export const OnPlace: Story = {
    args: {
        letter: 'N',
        state: 'rightPosition'
    },
};

export const OutOfPlace: Story = {
    args: {
        letter: 'N',
        state: 'wrongPosition'
    },
};

export const Active: Story = {
    args: {
        letter: 'N',
        state: 'active'
    },
};