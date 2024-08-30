'use client'

import * as React from "react";
import Image from "next/image";

export default function HistoryHeader() {
    return (
        <div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    padding: '48px 18px 36px 18px',
                }}
            >
                <Image
                    src="/images/main/myAvatar.svg"
                    width={37}
                    height={37}                                alt=''

                />
                <div
                    style={{
                        borderRadius: 100,
                        backgroundColor: '#02385E',
                        width: '100%',
                        height: 36,
                        padding: '8px 12px',
                        fontSize: 13,
                        margin: '0 4px 0 14px'
                    }}
                >
                    <p>
                        Поиск
                    </p>
                </div>
            </div>

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '0 18px 12px 18px'
                }}
            >
                <h1>
                    История
                </h1>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        marginTop: 10
                    }}
                >
                    <div
                        className='card'
                        style={{
                            justifyContent: 'space-between',
                            backgroundColor: '#1E1E1E',
                            padding: '18px 12px',
                            width: '100%',
                            height: 107,
                            marginRight: 4
                        }}
                    >

                    </div>
                    <div
                        className='card'
                        style={{
                            justifyContent: 'space-between',
                            backgroundColor: '#1E1E1E',
                            padding: '12px 12px',
                            width: 107,
                            height: 107,
                            margin: '0 4px'
                        }}
                    >
                        <Image
                            src="/images/history/docs.svg"
                            width={32}
                            height={32}                                alt=''

                        />
                        <p style={{fontSize: 12, marginTop: 16}}>
                            Выписки и справки
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
