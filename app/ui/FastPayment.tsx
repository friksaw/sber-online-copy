'use client'

import * as React from "react";
import Image from "next/image";
import {Avatar} from "@mui/material";
import FastPaymentButton from "@/app/ui/FastPaymentButton";

export default function FastPayment() {
    return (
        <div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    margin: '32px 16px 4px 16px'
                }}
            >
                <h3>
                    Переводы на Сбер
                </h3>
                <p className='pGreen'>
                    Все (7)
                </p>
            </div>


            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                }}
            >
                <FastPaymentButton text='Новый перевод' picture='new'/>
                <FastPaymentButton text='Ирина Юрьевна Е.'/>
                <FastPaymentButton text='Полина Петровна...'/>
                <FastPaymentButton text='Леша Досов' picture='/images/main/myAvatar.svg'/>
                <FastPaymentButton text='Полина Петровна...'/>
                <FastPaymentButton text='Somebody'/>
            </div>

        </div>
    );
}