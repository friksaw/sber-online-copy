'use client'

import * as React from "react";
import Image from "next/image";

export default function HistoryFilters() {
    return (
        <div
            style={{
                padding: '40px 18px 4px 18px',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginBottom: 18
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignContent: 'center',
                        alignItems: 'center',

                        backgroundColor: '#2F2F2F',
                        borderRadius: 12,
                        height: 32,
                        textWrap: 'nowrap',
                        padding: '8px 16px',
                    }}
                >
                    <p style={{ fontSize: 12 }}>
                        Тип операции
                    </p>
                    <Image
                        src="/images/history/filtersArrow.svg"
                        width={7}
                        height={4}
                        style={{
                            marginLeft: 16
                        }}
                    />
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignContent: 'center',
                        alignItems: 'center',

                        backgroundColor: '#2F2F2F',
                        borderRadius: 12,
                        height: 32,
                        textWrap: 'nowrap',
                        padding: '8px 16px',
                        margin: '0 12px'
                    }}
                >
                    <p style={{fontSize: 12}}>
                        Период
                    </p>
                    <Image
                        src="/images/history/filtersArrow.svg"
                        width={7}
                        height={4}
                        style={{
                            marginLeft: 16
                        }}
                    />
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignContent: 'center',
                        alignItems: 'center',

                        backgroundColor: '#2F2F2F',
                        borderRadius: 12,
                        height: 32,
                        textWrap: 'nowrap',
                        padding: '8px 16px',
                    }}
                >
                    <p style={{fontSize: 12}}>
                        Карта или чета
                    </p>
                    <Image
                        src="/images/history/filtersArrow.svg"
                        width={7}
                        height={4}
                        style={{
                            marginLeft: 16
                        }}
                    />
                </div>
            </div>
            <h3>Вчера</h3>
        </div>
    );
}
