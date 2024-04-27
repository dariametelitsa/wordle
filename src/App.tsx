import React from 'react';
import './App.css';
import { WORDS } from './assets/wordsLib';
import { getRandom } from "./components/functions/functions";
import { Field } from "./components/field/Field";

function App() {

    const NUMBER_OF_GUESSES = 6;
    let guessesRemaining = NUMBER_OF_GUESSES;
    let currentGuess = [];
    let nextLetter = [];
    let searchWord = WORDS[getRandom(0, WORDS.length - 1)];
    console.log(searchWord);

    return (
        <div className="App bg-gray-200 h-screen flex justify-center items-center w-full flex-col">
            <h1 className="text-4xl font-bold text-cyan-700">Let's play "Wordle"</h1>
            <Field/>

        </div>
    );
}

export default App;
