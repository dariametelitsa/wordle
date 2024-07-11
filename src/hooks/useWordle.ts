import { LetterType } from "../types/Types";
import { useState } from "react";

const useWordle = (solution: string) => {
    const NUMBER_OF_GUESSES = 6;
    const [turn, setTurn] = useState<number>(0);
    const [currentGuess, setCurrentGuess] = useState<string>('');
    const [guesses, setGuesses] = useState<Array<LetterType>>([]);
    const [history, setHistory] = useState<Array<string>>([]);
    const [isCorrect, setIsCorrect] = useState(false);

    const formatGuess = (wordAttempt: string): Array<LetterType> => {
        let res = [];

        return [];
    }

    const addNewGuess = () => {

    }

    const handleKeyUp = () => {
    }

    return {
        turn,
        currentGuess,
        guesses,
        isCorrect,
        handleKeyUp,
    }
}

export default useWordle;