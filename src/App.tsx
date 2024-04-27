import React from 'react';
import './App.css';
import { Field } from "./components/field/Field";
import { Letter } from "./components/letter/Letter";

function App() {
    return (
        <div className="App">
            <h1 className="text-3xl font-bold underline">Wordle</h1>
            <p className={'text-center text-green-500'}>Some text</p>
            <p>Additing after added storybook</p>
            <div className={'container'}>
                <Letter letter={'m'} state={'wrong'}/>
                <Letter state={'empty'}/>
                <Letter letter={'m'} state={'onPlace'}/>
                <Letter letter={'m'} state={'outOfPlace'}/>
            </div>

        </div>
    );
}

export default App;
