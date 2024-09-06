'use client'

import * as React from "react";
import Image from "next/image";
import {Avatar, Skeleton} from "@mui/material";

export default function MainHeader({ cardNum, bankNum, balance, handleControl, isPageLoaded }: any) {
    return (
        <div
            style={{
                backgroundImage: 'url("/images/bgs/mainHeaderBg.svg")',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                borderRadius: '0 0 30px 30px',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    padding: '45px 6px 36px 18px',
                }}
            >
                <a onClick={handleControl}>
                    <Avatar
                        sx={{
                            width: 36,
                            height: 36,
                            backgroundColor: '#383838'

                        }}
                    >
                        <Image
                            src="/images/avatars/no.svg"
                            width={46}
                            height={46}
                            alt=''
                            style={{
                                marginBottom: 1
                            }}
                        />
                    </Avatar>
                </a>

                <div
                    style={{
                        borderRadius: 100,
                        backgroundColor: '#02385E',
                        width: 199,
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
                <Image
                    src="/images/main/cart.svg"
                    width={84}
                    height={38}
                    alt=''

                />
            </div>

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: '0 18px 12px 18px'
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}
                >
                    <h1>
                        Кошелёк
                    </h1>
                    <Image
                        src="/images/main/arrowRight.svg"
                        width={9}
                        height={14}
                        style={{
                            marginLeft: 16
                        }}
                        alt=''
                    />
                </div>
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
                    padding: '0 18px 31px 18px',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <div
                        className='card'
                        style={{
                            backgroundColor: '#305474',
                            height: 69,
                            width: 60,
                            marginBottom: 7,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Image
                            src="/images/main/qr.svg"
                            width={35}
                            height={35}
                            alt=''
                        />
                    </div>
                    <div
                        className='card'
                        style={{
                            backgroundColor: '#305474',
                            height: 69,
                            width: 60,

                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Image
                            src="/images/main/shield.svg"
                            width={32}
                            height={32}
                            alt=''
                        />
                    </div>
                </div>

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                    }}
                >
                    <div
                        className='card'
                        style={{
                            backgroundColor: '#305474',
                            margin: '0 8px',
                            width: 141,
                            height: 145,
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%',
                                justifyContent: 'space-between',
                                margin: 16,
                            }}
                        >
                            <div>
                                <Image
                                    src="/images/main/mir.png"
                                    width={29}
                                    height={29}
                                    alt=''
                                    style={{
                                        marginLeft: 3
                                    }}
                                />
                                <p className='pGrey' style={{marginLeft: 2, marginTop: 4}}>{cardNum}</p>
                            </div>

                                <div>
                                    {
                                        isPageLoaded ?
                                        <p
                                            style={{
                                                fontSize: 18,
                                                textWrap: 'nowrap',
                                            }}
                                        >
                                            {balance} ₽
                                        </p> : <Skeleton variant="rectangular" width={80} height={24} style={{ borderRadius: 4, marginBottom: 4 }} />
                                    }
                                    {
                                        isPageLoaded ?
                                            <div
                                                style={{
                                                    display: 'flex',
                                                    flexDirection: 'row',
                                                }}
                                            >
                                                <p className='pGrey'>
                                                    Счёт
                                                </p>
                                                <div
                                                    style={{
                                                        display: 'flex',
                                                        flexDirection: 'row',
                                                        alignItems: 'center',
                                                        margin: '0 4px'
                                                    }}
                                                >
                                                    <Image
                                                        src="/images/lil-dot.svg"
                                                        width={4}
                                                        height={4}
                                                        alt=''

                                                    />
                                                    <Image
                                                        src="/images/lil-dot.svg"
                                                        width={4}
                                                        height={4}
                                                        alt=''
                                                    />
                                                </div>
                                                <p className='pGrey'>
                                                    {bankNum}
                                                </p>
                                            </div>
                                            : <Skeleton variant="rectangular" width={100} height={24}
                                                        style={{borderRadius: 4}}/>
                                    }

                                </div>
                        </div>
                    </div>

                    <div
                        className='card'
                        style={{
                            backgroundColor: '#305474',
                            width: 134,
                            height: 145,
                        }}

                    >

                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%',
                                justifyContent: 'space-between',
                                margin: 16,
                            }}
                        >
                            <div>
                                <Image
                                    src="/images/main/mir.png"
                                    width={29}
                                    height={29}
                                    alt=''
                                    style={{
                                        marginLeft: 3
                                    }}
                                />
                                <p className='pGrey' style={{marginLeft: 2, marginTop: 4}}>{cardNum}</p>
                            </div>

                            <div>
                                {
                                    isPageLoaded ?
                                        <p
                                            style={{
                                                fontSize: 18,
                                                textWrap: 'nowrap',
                                            }}
                                        >
                                            {balance} ₽
                                        </p> : <Skeleton variant="rectangular" width={80} height={24}
                                                         style={{borderRadius: 4, marginBottom: 4}}/>
                                }
                                {
                                    isPageLoaded ?
                                        <div
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'row',
                                            }}
                                        >
                                            <p className='pGrey'>
                                                Счёт
                                            </p>
                                            <div
                                                style={{
                                                    display: 'flex',
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    margin: '0 4px'
                                                }}
                                            >
                                                <Image
                                                    src="/images/lil-dot.svg"
                                                    width={4}
                                                    height={4}
                                                    alt=''

                                                />
                                                <Image
                                                    src="/images/lil-dot.svg"
                                                    width={4}
                                                    height={4}
                                                    alt=''
                                                />
                                            </div>
                                            <p className='pGrey'>
                                                {bankNum}
                                            </p>
                                        </div>
                                        : <Skeleton variant="rectangular" width={100} height={24}
                                                    style={{borderRadius: 4}}/>
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
