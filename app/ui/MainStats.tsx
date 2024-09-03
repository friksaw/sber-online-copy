'use client'

import * as React from "react";
import Image from "next/image";
import {useEffect, useState} from "react";

export default function MainStats({ expenses, month }: any) {
    const [transactionsPart, setTransactionsPart]: any = useState(0);
    const [eduPart, setEduPart]: any = useState(0);

    useEffect(() => {
        // Calculate transactionsPart whenever expenses changes
        const calculateTransactionsPart = () => {
            const parsedExpenses: any = Math.floor(parseFloat(expenses.replace(/\s/g, '')));
            const newTransactionsPart: any = 0.7 * parsedExpenses;
            const newEduPart: any = parsedExpenses - newTransactionsPart;

            // Преобразуем в целое число и форматируем
            const formattedTransactionsPart: any = Math.floor(newTransactionsPart).toLocaleString('ru-RU', {
                useGrouping: true,
                separator: ' '
            });
            const formattedEduPart: any = Math.floor(newEduPart).toLocaleString('ru-RU', {
                useGrouping: true,
                separator: ' '
            });

            setTransactionsPart(formattedTransactionsPart);
            setEduPart(formattedEduPart);
        };

        calculateTransactionsPart();

        const expensesChangeListener: any = () => {
            calculateTransactionsPart();
        }
        window.addEventListener('resize', expensesChangeListener);

        return () => window.removeEventListener('resize', expensesChangeListener);

    }, [expenses]);


    return (
        <div
            style={{

            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    margin: '32px 16px 12px 16px'
                }}
            >
                <h3>
                    Расходы в {month}
                </h3>
                <p className='pGreen'>
                    Все
                </p>
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginLeft: 16,
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                    }}
                >
                    <div
                        className='card'
                        style={{
                            justifyContent: 'space-between',
                            backgroundColor: '#1E1E1E',
                            padding: '18px 12px',
                            width: 148,
                            height: 163,
                            marginRight: 4
                        }}
                    >
                        <Image
                            src="/images/stats/allExpenses.svg"
                            width={43}
                            height={42}
                            alt=''
                        />
                        <div>
                            <h3>
                                {expenses} ₽
                            </h3>
                            <p
                                className='pGrey'
                                style={{
                                    marginTop: 8,
                                }}
                            >
                                Все расходы
                            </p>
                        </div>
                    </div>
                    <div
                        className='card'
                        style={{
                            justifyContent: 'space-between',
                            backgroundColor: '#1E1E1E',
                            padding: '18px 12px',
                            width: 148,
                            height: 163,
                            margin: '0 4px'
                        }}
                    >
                        <Image
                            src="/images/stats/peopleExpenses.svg"
                            width={48}
                            height={42}
                            alt=''
                        />
                        <div>
                            <p
                                className='pGrey'
                                style={{
                                    marginBottom: 8,
                                }}
                            >
                                Переводы людям
                            </p>
                            <h4>
                                {transactionsPart} ₽
                            </h4>

                        </div>
                    </div>
                    <div
                        className='card'
                        style={{
                            justifyContent: 'space-between',
                            backgroundColor: '#1E1E1E',
                            padding: '18px 12px',
                            width: 148,
                            height: 163,
                            margin: '0 4px'
                        }}
                    >
                        <Image
                            src="/images/stats/allExpenses.svg"
                            width={43}
                            height={42}
                            alt=''
                        />
                        <div>
                            <p
                                className='pGrey'
                                style={{
                                    marginBottom: 8,
                                }}
                            >
                                Образование
                            </p>
                            <p>
                                {eduPart} ₽
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}