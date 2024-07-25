import * as React from 'react';

type ButtonProps = {
    callBack: () => void;
    children: React.ReactNode;
};
export const Button = (props: ButtonProps) => {
    return (
        <button onClick={()=>{props.callBack()}} className={'bg-cyan-500 px-8 py-3 m-2 rounded-md font-bold text-white hover:bg-cyan-600 focus:outline'}>
            {props.children}
        </button>
    );
};