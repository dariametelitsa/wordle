import type { Meta, StoryObj } from '@storybook/react';
import { Word } from "./Word";


const meta = {
    title: 'Example/Word',
    component: Word,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Word>;

export default meta;
type Story = StoryObj<typeof meta>;

export const EveryLetterWrong: Story = {
    args: {
        word: [
            {
                letter: 'N',
                state: "wrong"
            },
            {
                letter: 'M',
                state: "wrong"
            },
            {
                letter: 'M',
                state: "wrong"
            },
            {
                letter: 'O',
                state: 'wrong'
            },
            {
                letter: 'A',
                state: 'wrong'
            },
        ]
    },
};

export const Attempt: Story = {
    args: {
        word: [
            {
                letter: 'W',
                state: "onPlace"
            },
            {
                letter: 'M',
                state: "wrong"
            },
            {
                letter: 'D',
                state: "outOfPlace"
            },
            {
                letter: 'O',
                state: 'outOfPlace'
            },
            {
                letter: 'L',
                state: 'outOfPlace'
            },
        ]
    },
};


export const RightWord: Story = {
    args: {
        word: [
            {
                letter: 'W',
                state: "onPlace"
            },
            {
                letter: 'O',
                state: "onPlace"
            },
            {
                letter: 'R',
                state: "onPlace"
            },
            {
                letter: 'L',
                state: 'onPlace'
            },
            {
                letter: 'D',
                state: 'onPlace'
            },
        ]
    },
};

export const EmptyWord: Story = {
    args: {
        word: [
            {
                state: "empty"
            },
            {
                state: "empty"
            },
            {
                state: "empty"
            },
            {
                state: 'empty'
            },
            {
                state: 'empty'
            },
        ]
    },
};
