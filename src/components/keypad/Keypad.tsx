// @flow 
import * as React from 'react';
import { useEffect, useState } from "react";
import { wordsAPI } from "../../api/wordsAPI";
import { AlphabetType, LetterStatus } from "../../types/Types";

type Props = {
    usedKeys: {[key: string]: LetterStatus}
    onDigitalLetterPressed: (key: string) => void
};
export const Keypad = ({usedKeys, onDigitalLetterPressed}: Props) => {
    const [letters, setLetters] = useState<Array<AlphabetType> | null>(null);

    useEffect(() => {
        wordsAPI.getLetters()
            .then(res => {
                setLetters(res)
            })
    }, []);


    return (
        <div className={'flex flex-wrap max-w-xl justify-center gap-1'}>
            {letters && letters.map(l => {

                const letterColor = usedKeys[l.key] === 'wrongLetter' ? `bg-gray-200` : usedKeys[l.key] === 'rightPosition' ? `bg-emerald-400` : usedKeys[l.key] === 'wrongPosition' ? `bg-amber-300`: usedKeys[l.key] === 'active' ? 'bg-gray-400 shadow-inner border-2 border-white' : 'bg-gray-400';

                return (<div onClick={() => onDigitalLetterPressed(l.key)} className={`flex justify-center items-center w-12 h-16 border-2 rounded-2xl border-gray-100 transition ease-in-out delay-300 ${letterColor}`} key={l.key}>{l.key}</div>)
            })}
        </div>
    );
};