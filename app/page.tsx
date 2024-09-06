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
import {Avatar, ListItemAvatar, Skeleton} from "@mui/material";

import { v4 as uuidv4 } from 'uuid';






export default function Home() {
    const [currentPage, setCurrentPage]: any = useState(0);
    const [isControlsOpen, setIsControlsOpen]: any = useState(0);
    const [currentTime, setCurrentTime] = useState<string>('');

    const [balance, setBalance]: any = useState('4 062,00');
    const [payBankImg, setPayBankImg]: any = useState('/images/banks/t.png');
    const [expenses, setExpenses]: any = useState('72 048');
    const [paySum, setPaySum]: any = useState('2 000');
    const [payName, setPayName]: any = useState('Павел Получатель Л.');
    const [month, setMonth]: any = useState('сентябре');
    const [sumYesterday, setSumYesterday]: any = useState('16 700');
    const [sumToday, setSumToday]: any = useState('0');
    const [peopleSum, setPeopleSum]: any = useState('20 019');
    const [depositsToday, setDepositsToday]: any = useState('0');


    const [cardNum, setCardNum]: any = useState('3962');
    const [bankNum, setBankNum]: any = useState('3181');
    const [paySumCom, setPaySumCom]: any = useState('0');

    const [scale, setScale]: any = useState(1);
    const [isCheckModalOpen, setIsCheckModalOpen]: any = useState(0);

    const [isPayProcessModalOpen, setIsPayProcessModalOpen]: any = useState(false);

    const [isCheckLoaded, setIsCheckLoaded]: any = useState(0);
    const [isPageLoaded, setIsPageLoaded]: any = useState(true);
    const [isCheckOpen, setIsCheckOpen]: any = useState(0);
    const [checkData, setCheckData]: any = useState([]);

    const [payPhone, setPayPhone]: any = useState('+7 (9800) 555 35-35');
    const [payResBankNum, setPayResBankNum]: any = useState('9876');
    const [paySenderName, setPaySenderName]: any = useState('Сергеев Сергеев С.');
    const [paySenderBankNum, setPaySenderBankNum]: any = useState('5423');

    const [paySenderBankName, setPaySenderBankName]: any = useState('Клиенту Сбера');
    const [paySbpBankName, setPaySbpBankName]: any = useState('');
    const [payCommission, setPayCommission]: any = useState('0');
    const [paySuip, setPaySuip]: any = useState('5861b8d1b21a42fbad7');


    const [payMethod, setPayMethod]: any = useState(0);
    const [selectedItemIndex, setSelectedItemIndex]: any = useState(null);




    useEffect(() => {
        const updateCurrentTime = () => {
            const date = new Date();
            const hours = date.getHours();
            const minutes = date.getMinutes();
            const formattedTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
            setCurrentTime(formattedTime);
        };

        // Update current time initially and every minute
        updateCurrentTime();
        const intervalId = setInterval(updateCurrentTime, 60000); // Update every minute

        return () => clearInterval(intervalId); // Cleanup interval on unmount
    }, []);
    const [paymentsYesterday, setPaymentsYesterday]: any = useState([

        {
            name: 'Полина Петровна И.',
            bankName: 'Т-Банк',
            sum: '600',
            resBankNum: '4545',

        },
        {
            name: 'Ирина Юрьевна Е.',
            bankName: 'Перевод по СБП',
            sum: '9 000',
            isBadged: 1,
            comission: 0,
            resBankNum: '7676',
        },
        {
            name: 'Георгий Янович П.',
            bankName: 'Альфа-Банк',
            sum: '1 220',
            resBankNum: '2324',

        },
        {
            name: 'Виталий Савин В.',
            bankName: 'Клиенту Сбера',
            sum: '120',
            resBankNum: '6587',

        },
        {
            name: 'Владимир Дмитриевич Д.',
            bankName: 'Клиенту Сбера',
            sum: '500',
            isBadged: 1,
            resBankNum: '6575',

        },
        {
            name: 'Полина Петровна И.',
            bankName: 'Клиенту Сбера',
            sum: '500',
            resBankNum: '0965',

        },
        {
            name: 'Марина Савина Л.',
            bankName: 'ВТБ',
            sum: '600',
            resBankNum: '2343',

        },
        {
            name: 'Федор Янович П.',
            bankName: 'Т-Банк',
            sum: '1 220',
            resBankNum: '1212',

        },
        {
            name: 'Борис Мушкиновский Е.',
            bankName: 'Перевод на карту другого банка',
            sum: '120',
            resBankNum: '0909',

        },
        {
            name: 'Владимир Чехов Д.',
            bankName: 'ВТБ',
            sum: '500',
            isBadged: 1,
            resBankNum: '0765',

        },
        {
            name: 'Анастасия Рябова Д.',
            bankName: 'Клиенту Сбера',
            sum: '500',
            resBankNum: '6554',

        },
    ])


    const [paymentsToday, setPaymentsToday]: any = useState([]);




    const [fastPayments, setFastPayments]: any = useState([]);

    useEffect(() => {
        // Function to filter payments and update fastPayments
        const filterPayments: any = () => {
            const filteredPayments: any = paymentsYesterday.filter((payment: any) => payment.payMethod === 0);
            // Ensure only the last 5 items are kept
            const limitedPayments: any = filteredPayments.slice(-5);
            setFastPayments(limitedPayments);
        };

        // Call filterPayments whenever paymentsYesterday changes
        filterPayments();
    }, [paymentsYesterday, paymentsToday]);









    const handleOpenCheck: any = () => {
        if (!isCheckLoaded) {
            setTimeout(() => setIsCheckLoaded(1), 1000);
        } else {
            setIsCheckLoaded(0)
        }
        setIsCheckOpen((isOpen: any) => !isOpen);
    };

    const handlePayProcessModal: any = () => {
        setIsPayProcessModalOpen((isOpen: any) => !isOpen);
    };

    const handleCheckPayModal: any = (index: any) => {
        setIsCheckModalOpen((isOpen: any) => !isOpen);
        console.log(index)
        setSelectedItemIndex(index);
    };

    const handleControl: any = () => {
        setIsControlsOpen((isOpen: any) => !isOpen);
    };

    const onChangePage: any = (newPage: any) => {
        setIsPageLoaded(false)
        setCurrentPage(newPage)
        setTimeout(() => setIsPageLoaded(true), 400);
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
    const changePayMethod: any = (newMethod: any) => {
        setPayMethod(newMethod);
    };
    const changePeopleSum: any = (newSum: any) => {
        setPeopleSum(newSum);
    };
    const changePaySbpBankName: any = (newName: any) => {
        setPaySbpBankName(newName);
    };
    const changePayCommission: any = (newCommission: any) => {
        setPayCommission(newCommission);
    };

    const changePayName: any = (newName: any) => {
        setPayName(newName);
    };
    const changeBankNum: any = (newNum: any) => {
        setBankNum(newNum);
    };
    const changeCardNum: any = (newNum: any) => {
        setCardNum(newNum);
    };

    function generateSuip() {
        const timestamp = Date.now().toString(36); // временная метка в base36
        const randomNum = Math.random().toString(36).substr(2, 5); // случайное число в base36
        const uuid = uuidv4().replace(/-/g, '').substring(0, 19);
        setPaySuip(uuid);
    }

    const changePaySuip: any = (newSuip: any) => {
        setPaySuip(newSuip);
    };
    const changePaySenderBankName: any = (event: any) => {
        setPaySenderBankName((event.target as HTMLInputElement).value);
    };
    const changeMonth: any = (newMonth: any) => {
        setMonth(newMonth);
    };
    const changeSumYesterday: any = (sumYesterday: any) => {
        setSumYesterday(sumYesterday);
    };
    const changePayPhone: any = (newPayPhone: any) => {
        setPayPhone(newPayPhone);
    };
    const changePaySenderBankNum: any = (newPaySenderBankNum: any) => {
        setPaySenderBankNum(newPaySenderBankNum);
    };
    const changePaySenderName: any = (newPaySenderName: any) => {
        setPaySenderName(newPaySenderName);
    };
    const changePayResBankNum: any = (newPayResBankName: any) => {
        setPayResBankNum(newPayResBankName);
    };


    const doPay = () => {
        const balanceNumeric: any = parseFloat(balance.replace(/\s/g, '').replace(',', '.'));
        const sumTodayNumeric: any = parseFloat(sumToday.replace(/\s/g, '').replace(',', '.'));
        const expensesNumeric: any = parseFloat(expenses.replace(/\s/g, '').replace(',', '.'));
        const paySumNumeric: any = parseFloat(paySum.replace(/\s/g, '').replace(',', '.'));
        const payCommissionNumeric: any = parseFloat(payCommission.replace(/\s/g, '').replace(',', '.'));

        const newBalance: any = balanceNumeric - paySumNumeric;
        const newExpenses: any = expensesNumeric + paySumNumeric;
        const newSumToday: any = paySumNumeric + sumTodayNumeric;
        const newPaySumCom: any = paySumNumeric + payCommissionNumeric;

        const formattedBalance: any = newBalance.toLocaleString('ru-RU', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });

        const formattedSumToday: any = newSumToday.toLocaleString('ru-RU', {
            useGrouping: true,
            separator: ' ',
        });
        const formattedPaySum = paySumNumeric.toLocaleString('ru-RU', {
                useGrouping: true,
                separator: ' ',
            });

        const formattedCommission: any = payCommissionNumeric.toLocaleString('ru-RU', {
            useGrouping: true,
            separator: ' ',
        });
        const formattedExpensesSum: any = newExpenses.toLocaleString('ru-RU', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });
        const formattedPaySumCom: any = newPaySumCom.toLocaleString('ru-RU', {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        });



        const newPayment: any = {
            name: payName,
            bankName: paySenderBankName,
            sum: formattedPaySum,
            commission: formattedCommission,
            resBankNum: payResBankNum,
            sbpBankName: paySbpBankName,

        };

        if (paySenderBankName === 'Альфа-Банк') {
            setPayBankImg('/images/banks/alfa.png')
        } else if (paySenderBankName === 'Т-Банк') {
            setPayBankImg('/images/banks/t.png')
        } else if (paySenderBankName === 'ВТБ') {
            setPayBankImg('/images/banks/vtb.png')
        } else if (paySenderBankName === 'Перевод на карту другого банка' || paySenderBankName === 'Перевод по СБП' || paySenderBankName === 'Открытие' || paySenderBankName === 'РСХБ') {
            setPayBankImg('/images/banks/banks.svg')
        } else {
            setPayBankImg('/images/history/sber.svg')
        }



        setPaySumCom(formattedPaySumCom)
        setBalance(formattedBalance);
        setSumToday(formattedSumToday);
        setPaymentsToday((prevPayments: any) => [...prevPayments, newPayment]);
        setExpenses(formattedExpensesSum);
    };

    const deleteItem = () => {
        console.log(0)
    };

    function getRandomNumber({ min, max }: any): any {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }



    const addDeposit: any = () => {
        const randomSum: any = getRandomNumber({ min: 500, max: 20000 });
        const newSumToday: any = Math.floor(randomSum);

        // Convert to integers for calculation
        const depositsSumNumeric: any = Math.floor(parseFloat(depositsToday.replace(/\s/g, '').replace(',', '.')));
        const newDepositsToday: any = depositsSumNumeric + randomSum;

        // Format with space as thousands separator and no decimals
        const formattedDepositsSum: any = newDepositsToday.toLocaleString('ru-RU', {
            useGrouping: true, // Enable thousands separator
            separator: ' ' // Set space as the separator
        });
        // Format with space as thousands separator and no decimals
        const formattedSumToday: any = newSumToday.toLocaleString('ru-RU', {
            useGrouping: true, // Enable thousands separator
            separator: ' ' // Set space as the separator
        });

        const newPayment: any = {
            name: 'Геннадий Ефимов Г.',
            bankName: 'Клиент Сбера',
            sum: '+ ' + formattedSumToday,
            commission: 0,
            resBankNum: '5436',
            sbpBankName: paySbpBankName,
        };

        setPaymentsToday((prevPayments: any) => [...prevPayments, newPayment]);
        setDepositsToday(formattedDepositsSum);
    };


    const useScreenWidth = () => {
        const [screenWidth, setScreenWidth]: any = useState(0);

        useEffect(() => {
            const handleResize: any = () => {
                setScreenWidth(window.innerWidth < 480 ? window.innerWidth : 363);
            };

            handleResize(); // Initial setup on component mount
            window.addEventListener('resize', handleResize);

            return () => window.removeEventListener('resize', handleResize);
        }, []);

        return screenWidth;
    };

// Define pageWidth and pageHeight outside useEffect
    const pageWidth: any = useScreenWidth();
    const pageHeight: any = 807;

    useEffect(() => {
        const updateScale = () => {
            const screenWidth: any = window.innerWidth;
            const screenHeight: any = window.innerHeight;
            const scaleX: any = screenWidth / pageWidth;
            const scaleY: any = screenHeight / pageHeight;
            let newScale: any = Math.min(scaleX, scaleY);

            if (window.innerWidth < 480) {
                newScale = screenWidth / pageWidth;
            } else {
                newScale = Math.min(scaleX, scaleY);

            }
            // Assuming you have a 'setScale' function defined elsewhere
            setScale(newScale);
        };

        updateScale(); // Initial setup on component mount
        window.addEventListener('resize', updateScale);

        return () => window.removeEventListener('resize', updateScale);
    }, [window.innerWidth, pageWidth, pageHeight]);

    const shuffleYesterdayMessages: any = () => {
        const shuffledPayments: any = [...paymentsYesterday];

        for (let i: any = shuffledPayments.length - 1; i > 0; i--) {
            const j: any = Math.floor(Math.random() * (i + 1));
            [shuffledPayments[i], shuffledPayments[j]] = [shuffledPayments[j], shuffledPayments[i]];
        }

        setPaymentsYesterday(shuffledPayments);
    };

    const renderPage: any = () => {
        switch (currentPage) {
            case 0:
                return <Main
                    isPageLoaded={isPageLoaded}
                    balance={balance}
                    expenses={expenses}
                    handlePayProcessModal={handlePayProcessModal}
                    isPayProcessModalOpen={isPayProcessModalOpen}
                    paySum={paySum}
                    handleControl={handleControl}
                    month={month}

                    fastPayments={fastPayments}
                    setFastPayments={setFastPayments}
                    peopleSum={peopleSum}
                    cardNum={cardNum}
                    bankNum={bankNum}
                />;
            case 1:
                return <div></div>;
            case 2:
                return <div></div>;
            case 3:
                return <div></div>;
            case 4:
                return <History
                    isPageLoaded={isPageLoaded}
                    paymentsYesterday={paymentsYesterday}
                    sumYesterday={sumYesterday}
                    paymentsToday={paymentsToday}
                    sumToday={sumToday}
                    depositsToday={depositsToday}
                    handleOpenCheck={handleOpenCheck}
                    handleControl={handleControl}

                    pageHeight={pageHeight}
                    handleCheckPayModal={handleCheckPayModal}
                    isCheckModalOpen={isCheckModalOpen}
                    deleteItem={deleteItem}
                    isControlOpen={isControlsOpen}



                />;
            default:
                return <Main
                    isPageLoaded={isPageLoaded}
                    balance={balance}
                    expenses={expenses}
                    handlePayProcessModal={handlePayProcessModal}
                    isPayProcessModalOpen={isPayProcessModalOpen}
                    paySum={paySum}
                    handleControl={handleControl}
                    month={month}

                    fastPayments={fastPayments}
                    setFastPayments={setFastPayments}

                    peopleSum={peopleSum}
                    cardNum={cardNum}
                    bankNum={bankNum}
                />;
        }
    };




    return (
        <div
            style={{
                margin: useScreenWidth() < 480 ? '0 auto' : '0 auto',
                marginTop: 0,
                alignSelf: 'center',
                transformOrigin: 'right',
                width: pageWidth,
                height: pageHeight,
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
                sumYesterday={sumYesterday}
                changeSumYesterday={changeSumYesterday}
                shuffleYesterdayMessages={shuffleYesterdayMessages}
                addDeposit={addDeposit}

                peopleSum={peopleSum}
                changePeopleSum={changePeopleSum}

                changeCardNum={changeCardNum}
                changeBankNum={changeBankNum}
                cardNum={cardNum}
                bankNum={bankNum}
            />

            <div
                style={{
                    backgroundImage: 'url("/images/bgs/bg1.svg")',
                    backgroundSize: 'cover',
                    width: pageWidth,
                    height: pageHeight,
                    transform: `scale(${scale})`,
                    maxWidth: pageWidth,
                    overflow: 'hidden',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        height: 28,
                        width: pageWidth,
                        position: 'absolute',
                        backgroundColor: 'black',
                        zIndex: '10000000000000000000000000000000000000000000000000000000000000000000000000!important'
                    }}
                >
                    <Image
                        src="/images/bgs/pbg2.png"
                        width={132}
                        height={36}
                        alt=''
                        style={{
                        }}
                    />
                    <p style={{fontWeight: 400, fontSize: 12, marginTop: 6, marginLeft: -16, zIndex: '10000000000000000000000000000000000000000000000000000000000000000000000000!important'}}>{currentTime}</p>
                    <Image
                        src="/images/bgs/pbg1.png"
                        width={140}
                        height={36}
                        alt=''
                        style={{
                            zIndex: '10000000000000000000000000000000000000000000000000000000000000000000000000!important'
                        }}
                    />
                </div>

                <PayProcessModal
                    isOpen={isPayProcessModalOpen}
                    handleModal={handlePayProcessModal}
                    paySum={paySum}
                    changePaySum={changePaySum}
                    payName={payName}
                    changePayName={changePayName}
                    doPay={doPay}
                    pageWidth={pageWidth}
                    renderPage={renderPage}
                    onChangePage={onChangePage}

                    isCheckLoaded={isCheckLoaded}
                    isCheckOpen={isCheckOpen}
                    handleOpenCheck={handleOpenCheck}
                    checkData={checkData}

                    payPhone={payPhone}
                    payResBankNum={payResBankNum}
                    paySenderName={paySenderName}
                    paySenderBankNum={paySenderBankNum}

                    changePayPhone={changePayPhone}
                    changePayResBankNum={changePayResBankNum}
                    changePaySenderName={changePaySenderName}
                    changePaySenderBankNum={changePaySenderBankNum}

                    changePayMethod={changePayMethod}
                    payMethod={payMethod}

                    changePaySenderBankName={changePaySenderBankName}
                    paySenderBankName={paySenderBankName}

                    changePayCommission={changePayCommission}
                    payCommission={payCommission}

                    paySuip={paySuip}
                    changePaySuip={changePaySuip}

                    handleCheckPayModal={handleCheckPayModal}
                    isCheckModalOpen={isCheckModalOpen}

                    pageHeight={pageHeight}

                    scale={scale}

                    payBankImg={payBankImg}
                    generateSuip={generateSuip}

                    selectedItemIndex={selectedItemIndex}

                    paymentsToday={paymentsToday}

                    paySumCom={paySumCom}

                    changePaySbpBankName={changePaySbpBankName}
                    paySbpBankName={paySbpBankName}
                />
                <BottomNav
                    currentPage={currentPage}
                    onChangePage={onChangePage}
                    pageWidth={pageWidth}
                >

                    <div
                        style={{
                            maxWidth: pageWidth
                        }}
                    >
                        {renderPage()}
                    </div>
                </BottomNav>
            </div>
        </div>

    );
}
