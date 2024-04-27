import * as React from 'react';
import { FaInfo } from "react-icons/fa";

type TipProps = {

};
export const Tip = ({text}: {text: string}) => {
    return (
        <div className={'tip'}>
            <FaInfo size={'14'}/>
        <span className={'sidebar-tooltip group-hover:scale-100'}>{text}</span>
        </div>
    );
};
