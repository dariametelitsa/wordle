// @flow 
import * as React from 'react';

export type LetterState = 'empty' | 'wrong' | 'onPlace' | 'outOfPlace' | 'active';
type LetterProps = {
    letter?: string;
    state: LetterState;

};
export const Letter = ({letter, state}: LetterProps) => {
    const style = state === 'wrong' ?  'bg-gray-300' : state === 'onPlace' ? 'bg-emerald-400' : state === 'outOfPlace' ? 'bg-amber-300' : state === 'active' ? 'bg-gray-400 shadow-inner border-2 border-white' : 'bg-gray-400 shadow-inner';

    console.log(style);
    return (
        <div className={`flex justify-center items-center size-16 p-3 dark:bg-gray-800 rounded-2xl font-bold text-white text-3xl ${style}` } >
            { letter && letter.toUpperCase()}
        </div>
    );
};