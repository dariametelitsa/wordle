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

    const handleKeyUp = (e: KeyboardEvent) => {
        if(e.key === 'Backspace') {
            if (currentGuess.length > 0) {
                setCurrentGuess(prevState => prevState.slice(0, -1));
            }
            return
        }
        if(/^[A-Za-z]$/.test(e.key)) {
            if (currentGuess.length < 5) {
                setCurrentGuess(prevState => prevState + e.key)
            }
        }

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