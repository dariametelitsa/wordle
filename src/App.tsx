import React, { useEffect, useState } from 'react';
import './App.css';
import { Field } from "./components/field/Field";
import { wordsAPI } from "./api/wordsAPI";
import { setDictionaryStructure } from "./utils/setDictionaryStructure";
import { DictionaryType } from "./types/Types";
import { getRandom } from "./utils/getRandom";

export const NUMBER_OF_GUESSES = 6;
export const WORD_LENGTH = 5;

function App() {
    const [solution, setSolution] = useState<string | null>(null);
    const [dictionary, setDictionary] = useState<DictionaryType | null>(null);

    let guessesRemaining = NUMBER_OF_GUESSES;
    let currentGuess = [];
    let nextLetter: string[] = [];
    //let searchWord = WORDS[getRandom(0, WORDS.length - 1)];

    useEffect(() => {
        wordsAPI.getDictionary()
            .then(res => {
                setDictionary(setDictionaryStructure(res));
                const randomIndex = getRandom(0, res.length - 1);
                setSolution(res[randomIndex].word);
            })
            .catch(e => {
                console.log(e.message)
            })
    }, []);


    // useEffect(() => {
    //     const onKeyDown = (event: KeyboardEvent) => {
    //         let key = event.key;
    //         let found = key.match(/[a-zA-Z]/gi);
    //
    //         console.log('Key pressed', event.key);
    //         if (key === 'Backspace' && nextLetter.length !== 0) {
    //             nextLetter.pop();
    //             return;
    //         }
    //
    //     };
    //     document.addEventListener('keydown', onKeyDown);
    //
    //     return () => {
    //         document.removeEventListener('keydown', onKeyDown);
    //     };
    // }, []);

    return (
        <div className="App bg-gray-200 h-screen flex justify-center items-center w-full flex-col">
            <h1 className="text-4xl font-bold text-cyan-700">Let's play "Wordle"</h1>
            {solution && <p>{solution}</p>}
            {solution && dictionary && <Field solution={solution} dictionary={dictionary}/>}
        </div>
    );
}

export default App;
