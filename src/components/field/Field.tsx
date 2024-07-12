// @flow
import * as React from 'react';
import { Word, wordType } from "../word/Word";
import { Button } from "../button/Button";
import useWordle from "../../hooks/useWordle";
import { useEffect } from "react";
// import { FaAmazonPay, FaBeer, FaPoo } from "react-icons/fa";
// import { ReactNode } from "react";
// import { BsFillLightningFill, BsPlus } from "react-icons/bs";
// import { MdChangeCircle, MdSwipeDown } from 'react-icons/md'

type FieldProps = {
    solution: string
};
const currentState: wordType[] = [
    {state: 'empty'},
    {state: 'empty'},
    {state: 'empty'},
    {state: 'empty'},
    {state: 'empty'}
]

export const Field = ({solution}: FieldProps) => {
    const {currentGuess, handleKeyUp} = useWordle(solution);
    useEffect(() => {
        window.addEventListener('keyup', handleKeyUp);

        return () => window.removeEventListener('keyup', handleKeyUp);
    }, [handleKeyUp]);


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