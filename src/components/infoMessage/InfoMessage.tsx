// @flow 
import * as React from 'react';
import { toast } from "react-toastify";
import { messageType } from "../../types/Types";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";

type Props = {
    message: string
    setMessage: (message: string | null) => void
    messageType?: messageType
};

export const InfoMessage = ({message, setMessage, messageType}: Props) => {
    const TIMER = 3000;

    useEffect(() => {
        toast(message, {
            position: "top-center"
        });

        setTimeout(() => {
            setMessage(null);
        }, TIMER);
    }, [message, setMessage]);



    return ( <>
        <ToastContainer autoClose={TIMER} />
    </>)
};