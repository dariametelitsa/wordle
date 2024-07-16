// @flow 
import * as React from 'react';
import { LetterType } from "../../types/Types";
import { Word } from "../word/Word";

type Props = {
    currentGuess: string
    guesses: Array<Array<LetterType>>
    turn: number
};
export const Grid = ({currentGuess, guesses, turn} : Props) => {
    return (
        <div>
            {guesses.map((g, ind) => {
                if(ind === turn) {
                    return <Word key={ind} guess={currentGuess}/>
                }
                return <Word key={ind} guess={g}/>
            })}
        </div>
    );
};