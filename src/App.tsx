import React from 'react';
import './App.css';
import { Field } from "./components/field/Field";

function App() {
    return (
        <div className="App">
            <h1 className="text-3xl font-bold underline">Wordle</h1>
            <p className={'text-center text-green-500'}>Some text</p>
            <p>Additing after added storybook</p>
            <div className={'flex'}>
                <Field/>
            </div>

        </div>
    );
}

export default App;
