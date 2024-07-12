// @flow
import * as React from 'react';
import { useEffect } from 'react';
import useWordle from "../../hooks/useWordle";
import { DictionaryType } from "../../types/Types";


type FieldProps = {
    solution: string
    dictionary: DictionaryType
};

export const Field = ({solution, dictionary}: FieldProps) => {
    const {currentGuess, handleKeyUp, guesses, isCorrect, turn} = useWordle(solution, dictionary);

    useEffect(() => {
        window.addEventListener('keyup', handleKeyUp);
        return () => window.removeEventListener('keyup', handleKeyUp);
    }, [handleKeyUp]);

    useEffect(() => {
        console.log(guesses, turn, isCorrect)
    }, [guesses, turn, isCorrect]);


    return (<div>Wordle - {currentGuess}</div>)

    // const generateField = (columnCount: number) => {
    //     let gameField = [];
    //     for (let i = 0; i < columnCount; i++) {
    //         gameField.push(<Word word={currentState}/>)
    //     }
    //     return gameField;
    // }
    //
    // return (
    //     <div className="flex justify-center items-center w-full flex-col gap-2 mt-8">
    //         {/*{generateField(attempts)}*/}
    //         <Button callBack={() => {
    //         }}>Enter the word</Button>
    //     </div>
    // );
};


// const SideVarIcon = ({icon, text='tooltip'}: {icon: ReactNode, text: string}) => (
//     <div className={'sidebar-icon group'}>
//         {icon}
//
//         <span className={'sidebar-tooltip group-hover:scale-100'}>{text}</span>
//     </div>
// );