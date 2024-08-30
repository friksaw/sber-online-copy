'use client'

import * as React from "react";
import Image from "next/image";

export default function MainHeader() {
    return (
        <div
            style={{
                backgroundImage: 'url("/images/main/mainHeaderBg.svg")',
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
                    padding: '48px 18px 36px 18px',
                }}
            >
                <Image
                    src="/images/main/myAvatar.svg"
                    width={37}
                    height={37}
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
                <Image
                    src="/images/main/cart.svg"
                    width={84}
                    height={38}
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
                    <h2>
                        Кошелёк
                    </h2>
                    <Image
                        src="/images/main/arrowRight.svg"
                        width={9}
                        height={14}
                        style={{
                            marginLeft: 16
                        }}
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
                    />
                    <Image
                        src="/images/main/3dots.svg"
                        width={16}
                        height={4}
                        style={{
                            marginLeft: 16
                        }}
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
                            justifyContent: 'space-between',
                            backgroundColor: '#305474',
                            padding: '18px 12px',
                            margin: '0 8px',
                            width: 141,
                            height: 145,
                        }}
                    >
                        <Image
                            src="/images/main/card.svg"
                            width={32}
                            height={32}
                        />
                        <div>
                            <p>
                                462,40 ₽
                            </p>
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                }}
                            >
                                <p className='pGrey'>
                                    MasterC...
                                </p>
                                <p className='pGrey'>
                                    0467
                                </p>
                            </div>
                        </div>
                    </div>

                    <div
                        className='card'
                        style={{
                            justifyContent: 'space-between',
                            backgroundColor: '#305474',
                            padding: '18px 12px',
                            width: 134,
                            height: 145,
                        }}
                    >
                        <div>
                            <p className='pGrey'>
                                Кредитная СберКарта
                            </p>
                        </div>
                        <div>
                            <p style={{ opacity: 0.5 }}>
                                50 000 ₽
                            </p>
                            <p style={{ color: '#5FCD76', textWrap: 'nowrap', fontSize: 12 }}>
                                Узнать условия
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
