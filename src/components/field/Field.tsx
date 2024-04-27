// @flow 
import * as React from 'react';
import { FaAmazonPay, FaBeer, FaPoo } from "react-icons/fa";
import { ReactNode } from "react";
import { BsFillLightningFill, BsPlus } from "react-icons/bs";
import { MdChangeCircle, MdSwipeDown } from 'react-icons/md'

type Props = {
    
};
export const Field = (props: Props) => {
    return (
        <div className={'fixed top-0 left-0 h-screen w-16 m-0 flex flex-col items-center justify-center bg-gray-900 text-white'}>
            <SideVarIcon text={'tooltip'} icon={<FaBeer size={'28'}/>}/>
            <SideVarIcon text={'tooltip'} icon={<BsPlus size={'28'}/>}/>
            <SideVarIcon text={'tooltip'} icon={<BsFillLightningFill size={'28'}/>}/>
            <SideVarIcon text={'tooltip'} icon={<FaPoo size={'28'}/>}/>
            <SideVarIcon text={'tooltip'} icon={<FaAmazonPay size={'28'}/>}/>
            <SideVarIcon text={'tooltip'} icon={<MdChangeCircle size={'28'}/>}/>
            <SideVarIcon text={'tooltip'} icon={<MdSwipeDown size={'28'}/>}/>
        </div>
    );
};

const SideVarIcon = ({icon, text='tooltip'}: {icon: ReactNode, text: string}) => (
    <div className={'sidebar-icon group'}>
        {icon}

        <span className={'sidebar-tooltip group-hover:scale-100'}>{text}</span>
    </div>
);