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





const paymentsYesterday: any = [
    {
        name: 'Александр Александрович Ж.',
        desc: 'Клиенту Сбера',
        sum: '889',
        person: '/images/history/sber.svg',
    },
    {
        name: 'Марина Сергеевна И.',
        desc: 'В другой банк',
        sum: '600',
        person: '/public/images/history/sber.svg',
    },
    {
        name: 'Георгий Янович П.',
        desc: 'Клиенту Сбера',
        sum: '889',
        person: '/images/history/sber.svg',
    },
    {
        name: 'Афанасий Александрович Ж.',
        desc: 'Клиенту Сбера',
        sum: '889',
        person: '/images/history/sber.svg',
    },
    {
        name: 'Владимир Дмитриевич Д.',
        desc: 'Клиенту Сбера',
        sum: '889',
        person: '/images/history/sber.svg',
    },
    {
        name: 'Александр Александрович Ж.',
        desc: 'Клиенту Сбера',
        sum: '889',
        person: '/images/history/sber.svg',
    },
];

export default function Home() {
    const [currentPage, setCurrentPage]: any = useState(0);
    const [isControlsOpen, setIsControlsOpen]: any = useState(1);

    const [balance, setBalance]: any = useState('4 062,00');
    const [expenses, setExpenses]: any = useState('72 048');
    const [paySum, setPaySum]: any = useState('0');
    const [payName, setPayName]: any = useState('');
    const [month, setMonth]: any = useState('сентябре');
    const [sumYesterday, setSumYesterday]: any = useState(0);

    const [scale, setScale]: any = useState(1);

    const [isPayProcessModalOpen, setIsPayProcessModalOpen]: any = useState(false);


    const handlePayProcessModal = () => {
        setIsPayProcessModalOpen((isOpen: any) => !isOpen);
    };

    const handleControl = () => {
        setIsControlsOpen((isOpen: any) => !isOpen);
    };

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
    const changeMonth: any = (newMonth: any) => {
        setMonth(newMonth);
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



    const useScreenWidth = () => {
        const [screenWidth, setScreenWidth]: any = useState(363);

        useEffect(() => {
            const handleResize = () => {
                setScreenWidth(window.innerWidth < 700 ? window.innerWidth : 363);
            };

            handleResize(); // Initial setup on component mount
            window.addEventListener('resize', handleResize);

            return () => window.removeEventListener('resize', handleResize);
        }, []);

        return screenWidth;
    };

    const pageWidth: any = useScreenWidth();
    const pageHeight: any = 807


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


    function shuffleYesterdayMessages() {
        for (let i = paymentsYesterday.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [paymentsYesterday[i], paymentsYesterday[j]] = [paymentsYesterday[j], paymentsYesterday[i]];
        }
    }

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
                    month={month}
                />;
            case 1:
                return <Capital />;
            case 2:
                return <div>Assistant</div>;
            case 3:
                return <Payments />;
            case 4:
                return <History
                    paymentsYesterday={paymentsYesterday}
                    sumYesterday={sumYesterday}
                />;
            default:
                return <Main
                    balance={balance}
                    expenses={expenses}
                    handlePayProcessModal={handlePayProcessModal}
                    isPayProcessModalOpen={isPayProcessModalOpen}
                    paySum={paySum}
                    handleControl={handleControl}
                    month={month}
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
                month={month}
                changeMonth={changeMonth}
                shuffleYesterdayMessages={shuffleYesterdayMessages}
            />

            <div
                style={{
                    backgroundImage: 'url("/images/bgs/bg1.svg")',
                    backgroundSize: 'contain',
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
                        pageWidth={pageWidth}
                    />
                    <div>{renderPage()}</div>
                </BottomNav>
            </div>
        </Box>

    );
}
