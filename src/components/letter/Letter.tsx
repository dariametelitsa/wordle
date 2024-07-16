// @flow
import * as React from 'react';
import { LetterStatus } from "../../types/Types";

// export type LetterState = 'empty' | 'wrong' | 'onPlace' | 'outOfPlace' | 'active';

export type LetterProps = {
    letter?: string | null;
    state: LetterStatus;
};
export const Letter = ({letter, state}: LetterProps) => {
    const letterStyle = state === 'wrongLetter' ? 'bg-gray-300' : state === 'rightPosition' ? 'bg-emerald-400' : state === 'wrongPosition' ? 'bg-amber-300' : state === 'active' ? 'bg-gray-400 shadow-inner border-2 border-white' : 'bg-gray-400 shadow-inner';

    return (
        <div className={`flex justify-center items-center size-16 p-3 dark:bg-gray-800 rounded-2xl font-bold text-white text-3xl >
        ${letterStyle}`}>
            {letter ? letter.toUpperCase() : ''}
        </div>
    );
};