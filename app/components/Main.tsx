'use client'

import * as React from "react";
import MainHeader from "@/app/ui/MainHeader";
import FastPayment from "@/app/ui/FastPayment";
import MainStats from "@/app/ui/MainStats";

export default function Main({
                                 cardNum,
                                 bankNum,
                                 peopleSum,
                                 fastPayments,
                                 setFastPayments,
                                 balance,
                                 expenses,
                                 handlePayProcessModal,
                                 isPayProcessModalOpen,
                                 paySum,
                                 changePaySum,
                                 doPayment,
                                 handleControl,
                                 month,
                                 isPageLoaded
                             }: any) {
    return (
        <div>
            <MainHeader cardNum={cardNum} bankNum={bankNum} balance={balance} handleControl={handleControl}
                        isPageLoaded={isPageLoaded}/>
            <FastPayment
                handlePayProcessModal={handlePayProcessModal}
                isPayProcessModalOpen={isPayProcessModalOpen}
                paySum={paySum}
                changePaySum={changePaySum}
                doPayment={doPayment}
                handleControl={handleControl}

                fastPayments={fastPayments}
                setFastPayments={setFastPayments}
            />
            <MainStats expenses={expenses} month={month} isPageLoaded={isPageLoaded} peopleSum={peopleSum}/>
        </div>
    );
}
