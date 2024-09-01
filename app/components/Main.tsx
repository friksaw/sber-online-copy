'use client'

import * as React from "react";
import Image from "next/image";
import MainHeader from "@/app/ui/MainHeader";
import FastPayment from "@/app/ui/FastPayment";
import MainStats from "@/app/ui/MainStats";

export default function Main({ balance, expenses, handlePayProcessModal, isPayProcessModalOpen, paySum, changePaySum, doPayment, handleControl }: any) {
    return (
        <div>
            <MainHeader balance={balance} handleControl={handleControl} />
            <FastPayment
                handlePayProcessModal={handlePayProcessModal}
                isPayProcessModalOpen={isPayProcessModalOpen}
                paySum={paySum}
                changePaySum={changePaySum}
                doPayment={doPayment}
                handleControl={handleControl}
            />
            <MainStats expenses={expenses} />
        </div>
    );
}
