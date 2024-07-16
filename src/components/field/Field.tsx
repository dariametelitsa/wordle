// @flow
import * as React from 'react';
import { useEffect, useState } from 'react';
import useWordle from "../../hooks/useWordle";
import { DictionaryType } from "../../types/Types";
import { Button } from "../button/Button";
import { Grid } from "../grid/Grid";
import { InfoMessage } from "../infoMessage/InfoMessage";

type FieldProps = {
    solution: string
    dictionary: DictionaryType
};

export const Field = ({solution, dictionary}: FieldProps) => {
    const [message, setMessage] = useState<null | string>(null);
    const {currentGuess, handleKeyUp, guesses, isCorrect, turn, handleOnClick} = useWordle({solution, dictionary, setMessage});



    useEffect(() => {
        window.addEventListener('keyup', handleKeyUp);
        return () => window.removeEventListener('keyup', handleKeyUp);
    }, [handleKeyUp]);

    useEffect(() => {
        console.log(guesses, turn, isCorrect)
    }, [guesses, turn, isCorrect]);

    return (
        <div>
            {message && <InfoMessage message={message} setMessage={setMessage}/>}
            <div>Wordle - {currentGuess}</div>
            <div className="flex justify-center items-center w-full flex-col gap-2 mt-8">
                <Grid currentGuess={currentGuess} guesses={guesses} turn={turn}/>
                <Button callBack={handleOnClick}>Enter the word</Button>
            </div>
        </div>
    )
};

