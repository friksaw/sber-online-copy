'use client'

import * as React from "react";
import Image from "next/image";
import {Avatar} from "@mui/material";
import AvatarPayment from "@/app/ui/AvatarPayment";

export default function FastPayment() {
    return (
        <div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    margin: '32px 16px'
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
                <AvatarPayment text='Новый перевод' picture='new'/>
                <AvatarPayment text='Ирина Юрьевна Е.'/>
            </div>

        </div>
    );
}