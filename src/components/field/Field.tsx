// @flow
import * as React from 'react';
import { useEffect, useState } from 'react';
import useWordle from "../../hooks/useWordle";
import { DictionaryType } from "../../types/Types";
import { Button } from "../button/Button";
import { Grid } from "../grid/Grid";
import { InfoMessage } from "../infoMessage/InfoMessage";
import { Keypad } from "../keypad/Keypad";
import { NUMBER_OF_GUESSES } from "../../App";
import { Modal } from "../modal/Modal";

type FieldProps = {
    solution: string
    dictionary: DictionaryType
    restartGame: () => void
};

export const Field = ({solution, dictionary, restartGame}: FieldProps) => {
    const [message, setMessage] = useState<null | string>(null);
    const {currentGuess, handleKeyUp, guesses, isCorrect, turn, handleOnClick, usedKeys, cleanGameData} = useWordle({solution, dictionary, setMessage});
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        window.addEventListener('keyup', handleKeyUp);
        return () => window.removeEventListener('keyup', handleKeyUp);
    }, [handleKeyUp]);

    useEffect(() => {
        if(isCorrect) {
            setTimeout(()=> setShowModal(true), 3000);
            window.removeEventListener('keyup', handleKeyUp);
        }
        if(turn >= NUMBER_OF_GUESSES) {
            setTimeout(()=> setShowModal(true), 3000);
            window.removeEventListener('keyup', handleKeyUp);
        }
    }, [isCorrect, turn, handleKeyUp]);

    const restartGameHandler = () => {
        setShowModal(false);
        cleanGameData();
        restartGame();
    }

    return (
        <div>
            {message && <InfoMessage message={message} setMessage={setMessage}/>}
            <div>Wordle - {currentGuess}</div>
            <div className="flex justify-center items-center w-full flex-col gap-2 mt-8">
                <Grid currentGuess={currentGuess} guesses={guesses} turn={turn}/>
                <Button callBack={handleOnClick}>Enter the word</Button>
                <Keypad usedKeys={usedKeys}/>
                {showModal && <Modal isCorrect={isCorrect} turn={turn} solution={solution} restartGame={restartGameHandler}/>}
            </div>
        </div>
    )
};

