import * as React from 'react';
import { FaInfo } from "react-icons/fa";

type TipProps = {
    text: string
};
export const Tip = ({text}: TipProps) => {
    return (
        <div className={'tip'}>
            <FaInfo size={'14'}/>
        <span className={'sidebar-tooltip group-hover:scale-100'}>{text}</span>
        </div>
    );
};
