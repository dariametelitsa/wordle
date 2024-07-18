// @flow
import * as React from 'react';
import { LetterStatus } from "../../types/Types";

export type LetterProps = {
    letter?: string | null
    state: LetterStatus
    index?: number
};
export const Letter = ({letter, state, index}: LetterProps) => {
    let delay = 0;
    let style = {};
    if (index || index === 0) {
        delay = index * 500;
        style = {
            animationDelay: `${delay}ms`,
            '--bg-color-end': state === 'wrongLetter' ? 'rgb(242 243 245)' : state === 'rightPosition' ? 'rgb(52 211 153)' : state === 'wrongPosition' ? 'rgb(252 211 77)' : 'rgb(212 215 220)',
        }
    }

    const letterStyle = state === 'wrongLetter' ? `animate-flip` : state === 'rightPosition' ? `animate-flip` : state === 'wrongPosition' ? `animate-flip` : state === 'active' ? 'bg-gray-400 shadow-inner border-2 border-white' : 'bg-gray-400 shadow-inner animate-bounce';


    return (
        <div className={`bg-gray-400 flex justify-center items-center size-16 p-3 dark:bg-gray-800 rounded-2xl font-bold text-white text-3xl
        ${letterStyle}`} style={style}>
            {letter ? letter.toUpperCase() : ''}
        </div>
    );
};