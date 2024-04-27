// @flow 
import * as React from 'react';
import { Letter, LetterState } from "../letter/Letter";

export type wordType = {
    letter?: string;
    state: LetterState;
}

type WordProps = {
    word: wordType[];
};

export const Word = ({word}: WordProps) => {
    return (
        <div className={'flex justify-center items-center gap-2'}>
            {
                word.map(letter => {
                    return <Letter state={letter.state} letter={letter.letter}></Letter>
                })
            }
        </div>
    );
};