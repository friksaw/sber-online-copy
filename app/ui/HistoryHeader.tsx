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
                    padding: '45px 6px 36px 18px',
                }}
            >
                <Image
                    src="/images/avatars/myAvatar.svg"
                    width={37}
                    height={37}
                    alt=''

                />
                <div
                    style={{
                        borderRadius: 100,
                        backgroundColor: '#02385E',
                        width: 278,
                        height: 36,
                        padding: '9px 12px 0 16px',
                        margin: '0 4px 0 14px'
                    }}
                >
                    <p
                        style={{
                            fontSize: 13,
                        }}
                    >
                        Поиск
                    </p>
                </div>
            </div>

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        padding: '36px 18px 8px 18px'
                    }}
                >
                    <h1>
                        История
                    </h1>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                        }}
                    >
                        <Image
                            src="/images/main/noEye.svg"
                            width={31}
                            height={22}
                            alt=''
                        />
                        <Image
                            src="/images/main/3dots.svg"
                            width={16}
                            height={4}
                            style={{
                                marginLeft: 16
                            }}
                            alt=''
                        />
                    </div>
                </div>
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
                            padding: '12px 12px',
                            width: 107,
                            height: 107,
                            margin: '0 4px'
                        }}
                    >
                        <Image
                            src="/images/history/docs.svg"
                            width={32}
                            height={32}
                            alt=''
                        />
                        <p
                            style={{
                                fontSize: 12,
                                marginTop: 16
                            }}
                        >
                            Выписки и справки
                        </p>
                    </div>

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
                            height={32}
                            alt=''
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
