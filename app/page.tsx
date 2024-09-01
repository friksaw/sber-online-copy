'use client'

import Image from "next/image";
import BottomNav from "@/app/ui/BottomNav";
import * as React from "react";
import Box from "@mui/material/Box";
import Main from "@/app/components/Main";
import Capital from "@/app/components/Capital";
import Payments from "@/app/components/Payments";
import History from "@/app/components/History";
import {useEffect, useState} from "react";
import Controls from "@/app/components/Controls";
import PayProcessModal from "@/app/components/PayProcessModal";

export default function Home() {
    const [currentPage, setCurrentPage]: any = useState(0);
    const [isControlsOpen, setIsControlsOpen]: any = useState(1);

    const [balance, setBalance]: any = useState('4 062,00');
    const [expenses, setExpenses]: any = useState('72 048');
    const [paySum, setPaySum]: any = useState('0');
    const [payName, setPayName]: any = useState('');

    const [scale, setScale]: any = useState(1);

    const [isPayProcessModalOpen, setIsPayProcessModalOpen]: any = useState(false);

    const handlePayProcessModal = () => {
        setIsPayProcessModalOpen((isOpen: any) => !isOpen);
    };

    const handleControl = () => {
        setIsControlsOpen((isOpen: any) => !isOpen);
    };


    const pageWidth: any = 363
    const pageHeight: any = 807

    const onChangePage: any = (newPage: any) => {
        setCurrentPage(newPage)
    }

    const changeBalance: any = (newBalance: any) => {
        setBalance(newBalance);
    };
    const changeExpenses: any = (newExpenses: any) => {
        setExpenses(newExpenses);
    };
    const changePaySum: any = (newSum: any) => {
        setPaySum(newSum);
    };

    const changePayName: any = (newName: any) => {
        setPayName(newName);
    };

    const doPay = () => {
        // Remove non-numeric characters and replace comma with period for parsing
        const balanceNumeric = parseFloat(balance.replace(/\s/g, '').replace(',', '.'));
        const paySumNumeric = parseFloat(paySum.replace(/\s/g, '').replace(',', '.'));

        // Perform subtraction
        const newBalance = balanceNumeric - paySumNumeric;

        // Format the result back into the string with comma as decimal separator
        const formattedBalance = newBalance.toLocaleString('ru-RU', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });

        // Update the state with the formatted balance
        setBalance(formattedBalance);
    };


    useEffect(() => {
        const updateScale = () => {
            const screenWidth = window.innerWidth;
            const screenHeight = window.innerHeight;
            const scaleX = screenWidth / pageWidth;
            const scaleY = screenHeight / pageHeight;

            const newScale = Math.min(scaleX, scaleY);
            setScale(newScale);
        };

        updateScale();

        window.addEventListener('resize', updateScale);

        return () => window.removeEventListener('resize', updateScale);
    }, []);

    const renderPage: any = () => {
        switch (currentPage) {
            case 0:
                return <Main
                    balance={balance}
                    expenses={expenses}
                    handlePayProcessModal={handlePayProcessModal}
                    isPayProcessModalOpen={isPayProcessModalOpen}
                    paySum={paySum}
                    handleControl={handleControl}
                />;
            case 1:
                return <Capital />;
            case 2:
                return <div>Assistant</div>;
            case 3:
                return <Payments />;
            case 4:
                return <History />;
            default:
                return <Main
                    balance={balance}
                    expenses={expenses}
                    handlePayProcessModal={handlePayProcessModal}
                    isPayProcessModalOpen={isPayProcessModalOpen}
                    paySum={paySum}
                    handleControl={handleControl}
                />;
        }
    };

    return (
        <Box
            sx={{
                margin: '0 auto',
                alignSelf: 'center',
            }}
        >
            <Controls
                isOpen={isControlsOpen}
                balance={balance}
                changeBalance={changeBalance}
                expenses={expenses}
                changeExpenses={changeExpenses}
            />

            <div
                style={{
                    backgroundImage: 'url("/images/bgs/bg1.svg")',
                    backgroundSize: 'cover',
                    width: pageWidth,
                    height: pageHeight,
                    overflow: 'hidden',
                    transform: `scale(${scale})`,
                }}
            >

                <BottomNav
                    currentPage={currentPage}
                    onChangePage={onChangePage}
                    pageWidth={pageWidth}
                >
                    <PayProcessModal
                        isOpen={isPayProcessModalOpen}
                        handleModal={handlePayProcessModal}
                        paySum={paySum}
                        changePaySum={changePaySum}
                        payName={payName}
                        changePayName={changePayName}
                        doPay={doPay}
                    />
                    <div>{renderPage()}</div>
                </BottomNav>
            </div>
        </Box>

    );
}
