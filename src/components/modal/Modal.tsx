// @flow 
import * as React from 'react';

type Props = {
    isCorrect: boolean
    turn: number
    solution: string
};
export const Modal = ({isCorrect, turn, solution}: Props) => {
    return (
        <div className={`bg-cyan-800 bg-opacity-75 fixed w-screen h-screen top-0 left-0`}>
            {isCorrect && (
                <div className={'max-w-96 bg-white p-10 rounded shadow-2xl my-52 mx-auto'}>
                    <h1>You win</h1>
                    <p>{solution}</p>
                    <p>You found the solution in {turn} guesses</p>
                </div>
            )}
            {!isCorrect && (
                <div>
                    <h1>You lose</h1>
                    <p>{solution}</p>
                    <p>Better luck next time</p>
                </div>
            )}
        </div>
    );
};