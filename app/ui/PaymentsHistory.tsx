'use client'

import * as React from "react";
import {Avatar, List, ListItemAvatar, ListItemButton, ListItemText} from "@mui/material";
import Image from "next/image";

export default function PaymentsHistory({ paymentsYesterday, sumYesterday, paymentsToday, sumToday }: any) {
    return (
        <div>
            {
                paymentsToday &&
                <div
                    style={{
                        marginBottom: 12
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            padding: '0 18px 4px 18px',
                        }}
                    >
                        <h3>Сегодня</h3>
                        <p
                            className='pGrey'
                            style={{
                                fontSize: 18,
                            }}
                        >
                            {sumToday} ₽
                        </p>
                    </div>
                    <List>{paymentsToday.slice().reverse().map(({ name, desc, sum, person }: any, index: any) => (
                        <ListItemButton
                            key={index + person}
                            sx={{
                                height: 64,
                            }}
                        >
                            <ListItemAvatar sx={{ alignSelf: 'start' }}>
                                <Avatar alt="Profile Picture" src={person} />
                            </ListItemAvatar>
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    width: '100%',
                                    paddingBottom: 4,
                                    height: 64,
                                    borderBottom: '1px solid #323232',
                                }}
                            >
                                <div>
                                    <p style={{ textWrap: 'nowrap' }}>{name}</p>
                                    <p className="pGrey" style={{ marginTop: 4 }}>
                                        {desc}
                                    </p>
                                </div>
                                <div
                                    style={{
                                        marginLeft: 12,
                                        width: 64,
                                        textWrap: 'nowrap',
                                        textAlign: 'right',
                                        display: 'flex',
                                        flexDirection: 'column',
                                    }}
                                >
                                    <p style={{ textWrap: 'nowrap' }}>
                                        {sum} ₽
                                    </p>
                                    {!sum.startsWith('+') && (
                                        <Image
                                            src="/images/history/repeat.svg"
                                            width={32}
                                            height={32}
                                            style={{
                                                marginTop: 4,
                                                alignSelf: 'end',
                                            }}
                                            alt=""
                                        />
                                    )}
                                </div>
                            </div>
                        </ListItemButton>
                    ))}
                    </List>
                </div>
            }
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: '0 18px 4px 18px',
                }}
            >
                <h3>Вчера</h3>
                <p
                    className='pGrey'
                    style={{
                        fontSize: 18,
                    }}
                >
                    {sumYesterday} ₽
                </p>
            </div>
            <List>
                {paymentsYesterday.map(({name, desc, sum, person}: any, index: any) => (
                    <ListItemButton
                        key={index + person}
                        sx={{
                            height: 64,
                        }}
                    >
                        <ListItemAvatar sx={{alignSelf: 'start'}}>
                            <Avatar alt="Profile Picture" src={person}/>
                        </ListItemAvatar>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                width: '100%',
                                paddingBottom: 4,
                                height: 64,

                                borderBottom: '1px solid #323232',
                            }}
                        >
                            <div>
                                <p style={{textWrap: 'nowrap'}}>{name}</p>
                                <p className='pGrey' style={{marginTop: 4}}>{desc}</p>
                            </div>
                            <div
                                style={{
                                    marginLeft: 12,
                                    width: 56,
                                    textWrap: 'nowrap',
                                    textAlign: 'right',
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}
                            >
                                <p style={{textWrap: 'nowrap'}}>{sum} ₽</p>
                                <Image
                                    src="/images/history/repeat.svg"
                                    width={32}
                                    height={32}
                                    style={{
                                        marginTop: 4,
                                        alignSelf: 'end',
                                    }}
                                    alt=''
                                />
                            </div>
                        </div>
                    </ListItemButton>
                ))}
            </List>
        </div>
    );
}
