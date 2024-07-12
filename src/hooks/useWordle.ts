import { DictionaryType, LetterType } from "../types/Types";
import { useState } from "react";
import { checkIsWordInDictionary } from "../utils/checkIsWordInDictionary";

const useWordle = (solution: string, dictionary: DictionaryType) => {
    const NUMBER_OF_GUESSES = 6;
    const [turn, setTurn] = useState<number>(0);
    const [currentGuess, setCurrentGuess] = useState<string>('');
    const [guesses, setGuesses] = useState<Array<Array<LetterType>>>([...Array(NUMBER_OF_GUESSES)]);
    const [history, setHistory] = useState<Array<string>>([]);
    const [isCorrect, setIsCorrect] = useState(false);

    const formatGuess = (wordAttempt: string): Array<LetterType> => {
        let solutionArray: Array<string | null> = solution.split('');
        let formattedGuess = currentGuess.toLowerCase()
            .split('')
            .map((w) => {
                return ({letter: w, status: "wrongLetter"} as LetterType)
            });
        //find right letter position
        formattedGuess.forEach((w, ind) => {
            if(w.letter === solutionArray[ind]) {
                formattedGuess[ind].status = 'rightPosition';
                solutionArray[ind] = null;
            }
        })
        //find wrong letter position
        formattedGuess.forEach((w, ind) => {
            if(w.status !== 'rightPosition' && solutionArray.includes(w.letter)) {
                formattedGuess[ind].status = 'wrongPosition';
                solutionArray[solutionArray.indexOf(w.letter)] = null;
            }
        })
        return formattedGuess;
    }

    const addNewGuess = (currentGuess: string, formattedGuess: Array<LetterType>) => {
        if(currentGuess === solution) {
            setIsCorrect(true)
        }
        setHistory(prevHistory => [...prevHistory, currentGuess]);
        setGuesses(prevGuesses => {
            let newGuesses = [...prevGuesses];
            newGuesses[turn] = formattedGuess;
            return newGuesses
            //return [...prevGuesses, formattedGuess]
            })
        setTurn(prevTurn => prevTurn + 1);
        setCurrentGuess('');
    }

    const handleKeyUp = (e: KeyboardEvent) => {
        if (e.key === "Enter") {
            if (turn > 6) {
                console.warn("You don't have try anymore")
                return
            }
            if (currentGuess.length !== 5) {
                console.warn("A word must be 5 chars long")
                return;
            }
            if (history.includes(currentGuess)) {
                console.warn("You've already tried that word")
                return;
            }
            if (!checkIsWordInDictionary(currentGuess, dictionary)) {
                console.warn("There's not such word")
                return;
            }
            const formatted = formatGuess(currentGuess);
            addNewGuess(currentGuess, formatted);
        }
        if (e.key === 'Backspace') {
            if (currentGuess.length > 0) {
                setCurrentGuess(prevState => prevState.slice(0, -1));
            }
            return
        }
        if (/^[A-Za-z]$/.test(e.key)) {
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