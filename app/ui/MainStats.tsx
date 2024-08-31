'use client'

import * as React from "react";
import Image from "next/image";

export default function MainStats() {
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
                            margin: '0 4px'
                        }}
                    >
                        <Image
                            src="/images/main/allExpenses.svg"
                            width={43}
                            height={42}                                alt=''

                        />
                        <div>
                            <h3>
                                14 330 ₽
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
                            src="/images/main/allExpenses.svg"
                            width={43}
                            height={42}                                alt=''

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
                            src="/images/main/allExpenses.svg"
                            width={43}
                            height={42}                                alt=''

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