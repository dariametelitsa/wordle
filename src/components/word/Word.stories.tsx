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
        guess: [
            {
                letter: 'N',
                status: 'wrongLetter'
            },
            {
                letter: 'M',
                status: 'wrongLetter'
            },
            {
                letter: 'M',
                status: 'wrongLetter'
            },
            {
                letter: 'O',
                status: 'wrongLetter'
            },
            {
                letter: 'A',
                status: 'wrongLetter'
            },
        ]
    },
};

export const Attempt: Story = {
    args: {
        guess: [
            {
                letter: 'W',
                status: "rightPosition"
            },
            {
                letter: 'M',
                status: "wrongLetter"
            },
            {
                letter: 'D',
                status: "wrongPosition"
            },
            {
                letter: 'O',
                status: 'wrongPosition'
            },
            {
                letter: 'L',
                status: 'wrongPosition'
            },
        ]
    },
};

export const RightWord: Story = {
    args: {
        guess: [
            {
                letter: 'W',
                status: "rightPosition"
            },
            {
                letter: 'O',
                status: "rightPosition"
            },
            {
                letter: 'R',
                status: "rightPosition"
            },
            {
                letter: 'L',
                status: 'rightPosition'
            },
            {
                letter: 'D',
                status: 'rightPosition'
            },
        ]
    },
};

export const TryingEnterTheWord: Story = {
    args: {
        guess: [
            {
                letter: 'W',
                status: "active"
            },
            {
                letter: 'O',
                status: "active"
            },
            {
                letter: 'R',
                status: "active"
            },
            {
                letter: 'L',
                status: 'active'
            },
            {
                letter: 'D',
                status: 'active'
            },
        ]
    },
};

// export const EmptyWord: Story = {
//     args: {
//         guess: [
//             {
//                 letter: null,
//                 status: 'idle'
//             },
//             {
//                 letter: null,
//                 status: "idle"
//             },
//             {
//                 letter: null,
//                 status: "idle"
//             },
//             {
//                 letter: null,
//                 status: 'idle'
//             },
//             {
//                 letter: null,
//                 status: 'idle'
//             },
//         ]
//     },
// };
