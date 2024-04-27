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
        state: 'empty'
    },
};

export const Wrong: Story = {
    args: {
        letter: 'N',
        state: 'wrong'
    },
};

export const OnPlace: Story = {
    args: {
        letter: 'N',
        state: 'onPlace'
    },
};

export const OutOfPlace: Story = {
    args: {
        letter: 'N',
        state: 'outOfPlace'
    },
};

export const Active: Story = {
    args: {
        letter: 'N',
        state: 'active'
    },
};