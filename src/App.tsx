import React from 'react';
import './App.css';
import { WORDS } from './data/wordsLib';
import { getRandom } from "./components/functions/functions";

function App() {

    const NUMBER_OF_GUESSES = 6;
    let guessesRemaining = NUMBER_OF_GUESSES;
    let currentGuess = [];
    let nextLetter = [];
    let searchWord = WORDS[getRandom(0, WORDS.length - 1)];
    console.log(searchWord);

    return (
        <div className="App">
            <h1 className="text-3xl font-bold">Let's play "Wordle"</h1>
            <div className={'container bg-gray-200'}>
            </div>

        </div>
    );
}

export default App;
