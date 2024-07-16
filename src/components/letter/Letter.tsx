// @flow
import * as React from 'react';
import { LetterStatus } from "../../types/Types";

// export type LetterState = 'empty' | 'wrong' | 'onPlace' | 'outOfPlace' | 'active';

export type LetterProps = {
    letter?: string | null
    state: LetterStatus
    index?: number
};
export const Letter = ({letter, state, index}: LetterProps) => {
    let delay = '';
    if(index) {
        delay = `animation-delay-${index*100}`;
    }
    const letterStyle = state === 'wrongLetter' ? `bg-gray-300 animate-flip` : state === 'rightPosition' ? `bg-emerald-400 animate-flip ${delay}` : state === 'wrongPosition' ? `bg-amber-300 animate-flip`: state === 'active' ? 'bg-gray-400 shadow-inner border-2 border-white' : 'bg-gray-400 shadow-inner animate-bounce';

    return (
        <div className={`flex justify-center items-center size-16 p-3 dark:bg-gray-800 rounded-2xl font-bold text-white text-3xl
        ${letterStyle}`}>
            {letter ? letter.toUpperCase() : ''}
        </div>
    );
};