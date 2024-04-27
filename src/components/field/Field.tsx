// @flow
import * as React from 'react';
import { Word, wordType } from "../word/Word";
import { Button } from "../button/Button";
import { Tip } from "../tips/Tip";
// import { FaAmazonPay, FaBeer, FaPoo } from "react-icons/fa";
// import { ReactNode } from "react";
// import { BsFillLightningFill, BsPlus } from "react-icons/bs";
// import { MdChangeCircle, MdSwipeDown } from 'react-icons/md'

type Props = {};
const currentState: wordType[] = [
    {state: 'empty'},
    {state: 'empty'},
    {state: 'empty'},
    {state: 'empty'},
    {state: 'empty'}
]

const currentState2: wordType[] = [
    {state: 'active'},
    {state: 'active'},
    {state: 'active'},
    {state: 'active'},
    {state: 'active'}
]

export const Field = (props: Props) => {
    return (
        // <div className={'fixed top-0 left-0 h-screen w-16 m-0 flex flex-col items-center justify-center bg-gray-900 text-white'}>
        //     <SideVarIcon text={'tooltip'} icon={<FaBeer size={'28'}/>}/>
        // </div>
        <div className="flex justify-center items-center w-full flex-col gap-2 mt-8">
            <Word word={currentState} tip={'Info'}></Word>
            <Word word={currentState2}></Word>
            <Word word={currentState}></Word>
            <Word word={currentState}></Word>
            <Word word={currentState}></Word>
            <Word word={currentState}></Word>
            <Button callBack={()=>{}}>Enter the word</Button>
        </div>
    );
};
//
// const SideVarIcon = ({icon, text='tooltip'}: {icon: ReactNode, text: string}) => (
//     <div className={'sidebar-icon group'}>
//         {icon}
//
//         <span className={'sidebar-tooltip group-hover:scale-100'}>{text}</span>
//     </div>
// );