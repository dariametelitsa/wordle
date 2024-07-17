// @flow
import * as React from 'react';
import { Letter } from "../letter/Letter";
import { Tip } from "../tips/Tip";
import { LetterType } from "../../types/Types";
import { WORD_LENGTH } from "../../App";

type WordProps = {
    tip?: string;
    guess: Array<LetterType> | string
};

export const Word = ({guess, tip}: WordProps) => {

    if (guess) {
        if (typeof guess === 'string') {
            const currentGuess = guess.split('');
            const emptyLetters = Array.from({length: WORD_LENGTH - currentGuess.length}, (_, ind) => (<Letter key={WORD_LENGTH + ind} letter={null} state={'active'}/>))

            return (
                <div className={'flex justify-center items-center gap-2 relative m-2'}>
                    {currentGuess.map((l, ind) => {
                        return <Letter key={ind} letter={l} state={'idle'}/>
                    })}
                    {emptyLetters}
                </div>
            )
        }

        return (
            <div className={'flex justify-center items-center gap-2 relative m-2'}>
                {
                    guess.map((l, ind) => {
                        return (<Letter key={ind}
                                        letter={l.letter}
                                        state={l.status}
                                        index={ind}
                        ></Letter>)
                    })
                }
                {tip && <Tip text={tip}/>}
            </div>
        )
    }

    return (
        <div className={'flex justify-center items-center gap-2 relative m-2'}>
            <Letter state={'idle'}></Letter>
            <Letter state={'idle'}></Letter>
            <Letter state={'idle'}></Letter>
            <Letter state={'idle'}></Letter>
            <Letter state={'idle'}></Letter>
            {tip && <Tip text={tip}/>}
        </div>
    );
};