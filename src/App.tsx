import React, { useEffect } from 'react';
import './App.css';
import { WORDS } from './assets/wordsLib';
import { getRandom } from "./components/functions/functions";
import { Field } from "./components/field/Field";

function App() {

    const NUMBER_OF_GUESSES = 6;
    let guessesRemaining = NUMBER_OF_GUESSES;
    let currentGuess = [];
    let nextLetter: string[] = [];
    let searchWord = WORDS[getRandom(0, WORDS.length - 1)];
    console.log(searchWord);

    useEffect(() => {
        const onKeyDown = (event:KeyboardEvent) => {
            let key = event.key;
            let found = key.match(/[a-zA-Z]/gi);

            console.log('Key pressed', event.key);
            if(key === 'Backspace' && nextLetter.length !== 0) {
                nextLetter.pop();
                return;
            }

        };
        document.addEventListener('keydown', onKeyDown);

        return () => {
            document.removeEventListener('keydown', onKeyDown);
        };
    }, []);

    return (
        <div className="App bg-gray-200 h-screen flex justify-center items-center w-full flex-col">
            <h1 className="text-4xl font-bold text-cyan-700">Let's play "Wordle"</h1>
            <Field attempts={NUMBER_OF_GUESSES}/>
        </div>
    );
}

export default App;
