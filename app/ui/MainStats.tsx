'use client'

import * as React from "react";
import Image from "next/image";

export default function MainStats({ expenses }: any) {
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
                    Расходы в августе
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
                                8 100 ₽
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
                                3 330 ₽
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}