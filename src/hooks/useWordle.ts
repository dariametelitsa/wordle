import { DictionaryType, LetterStatus, LetterType } from "../types/Types";
import { useState } from "react";
import { checkIsWordInDictionary } from "../utils/checkIsWordInDictionary";
import { NUMBER_OF_GUESSES, WORD_LENGTH } from "../App";

type useWordleType ={
    solution: string,
    dictionary: DictionaryType,
    setMessage: (message: string | null) => void;
}

const useWordle = ({solution, dictionary, setMessage}: useWordleType) => {
    const [turn, setTurn] = useState<number>(0);
    const [currentGuess, setCurrentGuess] = useState<string>('');
    const [guesses, setGuesses] = useState<Array<Array<LetterType>>>([...Array(NUMBER_OF_GUESSES)]);
    const [history, setHistory] = useState<Array<string>>([]);
    const [isCorrect, setIsCorrect] = useState(false);
    const [usedKeys, setUsedKeys] = useState<{[key: string]: LetterStatus}>({});

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
            setIsCorrect(true);
        }
        setHistory(prevHistory => [...prevHistory, currentGuess]);
        setGuesses(prevGuesses => {
            let newGuesses = [...prevGuesses];
            newGuesses[turn] = formattedGuess;
            return newGuesses
            })
        setTurn(prevTurn => prevTurn + 1);

        setUsedKeys((prev) => {
            let newKeys = {...prev};
            formattedGuess.forEach((l) => {
                const currentStatus = newKeys[l.letter];
                if(l.status === 'rightPosition') {
                    newKeys[l.letter] = 'rightPosition';
                    return
                }
                if(l.status === 'wrongPosition' && currentStatus !== 'rightPosition') {
                    newKeys[l.letter] = 'wrongPosition';
                    return
                }
                if (l.status === 'wrongLetter' && currentStatus !== 'rightPosition' && currentStatus !== 'wrongPosition') {
                    newKeys[l.letter] = 'wrongLetter';
                    return
                }
            })
            return newKeys;
        });
        setCurrentGuess('');
    }

    const enterWord = () => {
        if (turn >= NUMBER_OF_GUESSES) {
            console.warn("You don't have try anymore");
            setMessage("You don't have try anymore");
            return
        }
        if (currentGuess.length !== WORD_LENGTH) {
            console.warn("A word must be 5 chars long");
            setMessage("A word must be 5 chars long");
            return;
        }
        if (history.includes(currentGuess)) {
            console.warn("You've already tried that word");
            setMessage("You've already tried that word");
            return;
        }
        if (!checkIsWordInDictionary(currentGuess, dictionary)) {
            console.warn("There's not such word");
            setMessage("There's not such word");
            return;
        }
        const formatted = formatGuess(currentGuess);
        addNewGuess(currentGuess, formatted);
    }

    const handleOnClick = () => {
        enterWord()
    }

    const handleKeyUp = (e: KeyboardEvent) => {
        if (e.key === "Enter") {
            enterWord();
        }
        if (e.key === 'Backspace') {
            if (currentGuess.length > 0) {
                setCurrentGuess(prevState => prevState.slice(0, -1));
            }
            return
        }
        if (/^[A-Za-z]$/.test(e.key)) {
            if (currentGuess.length < WORD_LENGTH) {
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
        handleOnClick,
        usedKeys,
    }
}

export default useWordle;