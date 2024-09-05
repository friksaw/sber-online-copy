'use client'

import * as React from "react";
import {Avatar, CircularProgress, List, ListItemAvatar, ListItemButton, ListItemText, Skeleton} from "@mui/material";
import Image from "next/image";
import {fontWeight} from "@mui/system";
import Paper from "@mui/material/Paper";

export default function PaymentsHistory({ deleteItem, handleCheckPayModal, isPageLoaded, paymentsYesterday, sumYesterday, paymentsToday, sumToday, depositsToday, handleOpenCheck }: any) {
    return (
        <div>
            {
                isPageLoaded ?
                    <div>
            {
                (parseInt(sumToday) || (parseInt(depositsToday))) ?
                <div
                    style={{
                        marginBottom: 12,
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
                        <h3 style={{ fontSize: 18}}>Сегодня</h3>
                        {
                            isPageLoaded ?
                            <p
                                className='pGrey'
                                style={{
                                    fontSize: 18,
                                    color: '#5F5F5F',
                                }}
                            >
                                {sumToday} ₽
                            </p>   : <Skeleton variant="rectangular" width={100} height={24}
                                               style={{borderRadius: 4}}/>
                        }
                    </div>
                    <List>{paymentsToday.slice().reverse().map(({ name, desc, sum, bankName }: any, index: any) => (
                        <ListItemButton
                            key={index}
                            onClick={deleteItem}
                            sx={{
                                height: 64,
                            }}
                        >
                            <ListItemAvatar sx={{alignSelf: 'start'}}>
                                {
                                    isPageLoaded ?
                                        <Avatar                             onClick={handleCheckPayModal}
                                                                            alt="Profile Picture" src={(desc === 'Альфа-Банк') ? '/images/banks/alfa.png' : (desc === 'Т-Банк') ? '/images/banks/t.png' : (desc === 'ВТБ') ? '/images/banks/vtb.png' : '/images/history/sber.svg'  }/> : <Skeleton variant="circular" width={40} height={40} /> }
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
                                    {
                                        isPageLoaded ?
                                        <p style={{ textWrap: 'nowrap' }}>{name}</p>   : <Skeleton variant="rectangular" width={120} height={24}
                                                                                               style={{borderRadius: 4, marginBottom: 4}}/>}
                                        {
                                            isPageLoaded ?
                                                <p className="pGrey" style={{ marginTop: 4 }}>
                                                    {desc}
                                                </p>   : <Skeleton variant="rectangular" width={100} height={20}
                                                                   style={{borderRadius: 4}}/>
                                        }
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
                                    {
                                        isPageLoaded ?
                                    <p
                                        style={{
                                            textWrap: 'nowrap',
                                            marginTop: sum.startsWith('+') ? -22 : '',
                                            color: sum.startsWith('+') ? '#198C2F' : ''
                                    }}
                                    >
                                        {sum} ₽
                                    </p>   : <Skeleton variant="rectangular" width={60} height={24}
                                                       style={{borderRadius: 4}}/>
                                    }
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
                </div> : ''
            }
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: '0 18px 4px 18px',
                }}
            >
                <h3 style={{ fontSize: 18}}>Вчера</h3>
                {
                    isPageLoaded ?
                <p
                    className='pGrey'
                    style={{
                        fontSize: 18,
                        color: '#5F5F5F',
                    }}
                >
                    {sumYesterday} ₽
                </p>   : <Skeleton variant="rectangular" width={100} height={24}
                                   style={{borderRadius: 4}}/>}
            </div>
            <List>
                {paymentsYesterday.map(({name, desc, sum}: any, index: any) => (
                    <ListItemButton
                        key={index}
                        sx={{
                            height: 64,
                        }}
                    >
                        <ListItemAvatar
                            onClick={handleCheckPayModal}
                            sx={{alignSelf: 'start'}}
                        >
                            {
                                isPageLoaded ?
                                    <Avatar alt="Profile Picture" src={(desc === 'Альфа-Банк') ? '/images/banks/alfa.png' : (desc === 'Т-Банк') ? '/images/banks/t.png' : (desc === 'ВТБ') ? '/images/banks/vtb.png' : '/images/history/sber.svg'  }/> : <Skeleton variant="circular" width={40} height={40} /> }
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
                                {
                                    isPageLoaded ?
                                <p style={{textWrap: 'nowrap'}}>{name}</p>  : <Skeleton variant="rectangular" width={120} height={24}
                                                                                        style={{borderRadius: 4, marginBottom: 4}}/>
                                }
                                {
                                    isPageLoaded ? <p className='pGrey' style={{marginTop: 4}}>{desc}</p>  : <Skeleton variant="rectangular" width={100} height={20}
                                                                                                                      style={{borderRadius: 4}}/>
                                }
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
                                {
                                    isPageLoaded ?
                                <p style={{textWrap: 'nowrap'}}>{sum} ₽</p>  : <Skeleton variant="rectangular" width={60} height={24}
                                                                                         style={{borderRadius: 4}}/>
                                }
                                {
                                    isPageLoaded ?
                                <Image
                                    src="/images/history/repeat.svg"
                                    width={32}
                                    height={32}
                                    style={{
                                        marginTop: 4,
                                        alignSelf: 'end',
                                    }}
                                    alt=''
                                />  : ''
                                }
                            </div>
                        </div>
                    </ListItemButton>
                ))}
            </List>
                    </div>:    <CircularProgress
                        color="success"
                        sx={{
                            position: 'absolute',
                            top: '65%',
                            left: '45%',
                        }}
                    />}
        </div>
    );
}
