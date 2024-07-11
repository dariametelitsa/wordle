// @flow 
import * as React from 'react';
import { Letter, LetterProps, LetterState } from "../letter/Letter";
import { Tip } from "../tips/Tip";
import { useEffect, useState } from "react";

export type wordType = {
    letter?: string;
    state: LetterState;
}

type WordProps = {
    word: wordType[];
    tip?: string;
};

export const Word = ({word, tip}: WordProps) => {
    const [newWord, setNewWord] = useState<LetterProps[]>(word);

    useEffect(() => {
        const onKeyDown = (event:KeyboardEvent) => {
            let key = event.key;
            let found = key.match(/[a-zA-Z]/gi);

            //console.log('Key pressed', event.key);
            if(key === 'Backspace' && newWord.length !== 0) {
                setNewWord(newWord.slice(0, newWord.length - 2));
                return;
            }
            if(found) {
                let attempt: LetterProps = {letter: key.toUpperCase(), state: 'active'};
                setNewWord([...newWord, attempt]);
            }

        };
        document.addEventListener('keydown', onKeyDown);

        return () => {
            document.removeEventListener('keydown', onKeyDown);
        };
    }, []);

    //console.log(newWord)

    return (
        <div className={'flex justify-center items-center gap-2 relative'}>
            {
                newWord.map(letter => {
                    return <Letter state={letter.state} letter={letter.letter}></Letter>
                })
            }
            {tip && <Tip text={tip}/>}
        </div>
    );
};