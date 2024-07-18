// @flow 
import * as React from 'react';
import { Button } from "../button/Button";

type Props = {
    isCorrect: boolean
    turn: number
    solution: string
    restartGame: () => void
};
export const Modal = ({isCorrect, turn, solution, restartGame}: Props) => {
    return (
        <div className={`bg-cyan-800 bg-opacity-75 fixed w-screen h-screen top-0 left-0`}>
            {isCorrect && (
                <div className={'max-w-96 bg-white p-10 rounded shadow-2xl my-52 mx-auto'}>
                    <h1 className={'font text-4xl mb-5'}>You win!</h1>
                    <hr/>
                    <p className={`font-bold uppercase mt-5`}>{solution}</p>
                    <p className={'mb-5'}>You found the solution in {turn} guesses</p>
                    <Button callBack={() => restartGame()}>Start new game</Button>
                </div>
            )}
            {!isCorrect && (
                <div className={'max-w-96 bg-white p-10 rounded shadow-2xl my-52 mx-auto'}>
                    <h1 className={'font text-4xl mb-5'}>So unlucky</h1>
                    <hr/>
                    <p className={`font-bold uppercase mt-5`}>{solution}</p>
                    <p className={'mb-5'}>Better luck next time</p>
                    <Button callBack={() => restartGame()}>Start new game</Button>
                </div>
            )}

        </div>
    );
};