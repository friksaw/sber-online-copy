'use client'

import * as React from "react";
import Image from "next/image";
import {Avatar} from "@mui/material";
import FastPaymentButton from "@/app/ui/FastPaymentButton";

export default function FastPayment({ handlePayProcessModal, isPayProcessModalOpen, paySum, changePaySum, doPayment }: any) {
    return (
        <div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    margin: '32px 16px 12px 16px'
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
                <FastPaymentButton
                    handlePayProcessModal={handlePayProcessModal}
                    isPayProcessModalOpen={isPayProcessModalOpen}
                    paySum={paySum}
                    changePaySum={changePaySum}
                    doPayment={doPayment}
                    text={<p style={{
                        textAlign: 'center',
                        fontSize: 12,
                        width: 52,
                        textWrap: 'nowrap'
                    }}>Новый<br/>перевод</p>}
                    picture='new'
                />
                <FastPaymentButton text={<p style={{
                    textAlign: 'center',
                    fontSize: 12,
                    width: 52,
                    textWrap: 'nowrap'
                }}>Ирина<br/>Юрьевна Е.</p>}/>
                <FastPaymentButton text={<p style={{
                    textAlign: 'center',
                    fontSize: 12,
                    width: 52,
                }}>Полина<br/>Петровна...</p>} />
                <FastPaymentButton text={<p style={{
                    textAlign: 'center',
                    fontSize: 12,
                    marginLeft: -12,
                    width: 52,
                    textWrap: 'nowrap'
                }}>Леша Досов</p>} picture='/images/avatars/example.jpg'/>
                <FastPaymentButton text={<p style={{
                    textAlign: 'center',
                    fontSize: 12,
                    width: 52,
                    textWrap: 'nowrap'
                }}>Марина</p>}/>
            </div>

        </div>
    );
}