import type { Meta, StoryObj } from '@storybook/react';
import { Button } from "./Button";
import { action } from '@storybook/addon-actions';


const meta = {
    title: 'Example/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
    args: {
        callBack: action('on-click'),
        children: 'Button',
    },
};
