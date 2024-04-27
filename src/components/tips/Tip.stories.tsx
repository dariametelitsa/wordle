import type { Meta, StoryObj } from '@storybook/react';
import { Tip } from "./Tip";


const meta = {
    title: 'Example/Tip',
    component: Tip,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Tip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
    args: {
        text: 'Some tip'
    },
};
