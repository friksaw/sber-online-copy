'use client'

import * as React from "react";
import Image from "next/image";
import {Skeleton} from "@mui/material";

export default function HistoryHeader({ sumToday, depositsToday, isPageLoaded, handleControl }: any) {
    return (
        <div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    padding: '45px 6px 36px 18px',
                }}
            >
                <a onClick={handleControl}>
                    <Image
                        src="/images/avatars/myAvatar.svg"
                        width={37}
                        height={37}
                        alt=''
                    />
                </a>

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
                        padding: '0 18px 8px 18px'
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
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            marginTop: 10,
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
                                margin: '0 8px 0 16px'
                            }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    width: 96
                                }}
                            >
                                <Image
                                    src="/images/history/green-no-eye.svg"
                                    width={24}
                                    height={22}
                                    alt=''
                                />
                                <Image
                                    src="/images/cross.svg"
                                    width={19}
                                    height={19}
                                    alt=''
                                    style={{
                                        marginRight: 8,
                                    }}
                                />
                            </div>

                            <p
                                style={{
                                    fontSize: 12,
                                    marginTop: 16
                                }}
                            >
                                Как скрыть операцию
                            </p>
                        </div>

                        <div
                            className='card'
                            style={{
                                justifyContent: 'space-between',
                                flexDirection: 'column',
                                alignContent: 'space-between',
                                backgroundColor: '#1E1E1E',
                                padding: '18px 12px',
                                width: '100%',
                                height: 107,
                                marginRight: 4
                            }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    width:  192
                                }}
                            >
                                {
                                    isPageLoaded ?
                                <p className='pGrey'>
                                    Расходы за сегодня
                                </p>: <Skeleton variant="rectangular" width={120} height={20}
                                                style={{borderRadius: 4}}/>}
                                <Image
                                    src="/images/history/history-arrow.svg"
                                    width={9}
                                    height={11}
                                    alt=''
                                    style={{
                                        alignSelf: 'start',
                                    }}
                                />
                            </div>
                            {
                                isPageLoaded ?
                            <p
                                style={{
                                    fontSize: 18,
                                }}
                            >
                                {sumToday} ₽
                            </p>
                                    : <Skeleton variant="rectangular" width={80} height={24}
                                                style={{borderRadius: 4}}/>}
                            {
                                isPageLoaded ?
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    marginTop: 16,
                                }}
                            >
                                <p
                                    style={{
                                        color: '#1C8A31',
                                        fontSize: 12,
                                    }}
                                >
                                    + {depositsToday} ₽
                                </p>
                                <p
                                    style={{
                                        marginLeft: 4,
                                        fontSize: 12,
                                    }}
                                >
                                    зачислений
                                </p>
                            </div> : <Skeleton variant="rectangular" width={120} height={20}
                                               style={{borderRadius: 4}}/>}
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
                            <p style={{fontSize: 12, marginTop: 16, textWrap: 'nowrap'}}>
                                Выписки <br/>и справки
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
