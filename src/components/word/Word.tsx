// @flow 
import * as React from 'react';
import { Letter, LetterState } from "../letter/Letter";
import { Tip } from "../tips/Tip";

export type wordType = {
    letter?: string;
    state: LetterState;
}

type WordProps = {
    word: wordType[];
    tip?: string;
};

export const Word = ({word, tip}: WordProps) => {
    return (
        <div className={'flex justify-center items-center gap-2 relative'}>
            {
                word.map(letter => {
                    return <Letter state={letter.state} letter={letter.letter}></Letter>
                })
            }
            {tip && <Tip text={tip}/>}
        </div>
    );
};