'use client'

import * as React from "react";
import {Avatar, CircularProgress, List, ListItemAvatar, ListItemButton, Skeleton} from "@mui/material";
import Image from "next/image";

export default function PaymentsHistory({
                                            isControlsOpen,
                                            deleteItem,
                                            editItem,
                                            handleCheckPayModal,
                                            isPageLoaded,
                                            paymentsYesterday,
                                            sumYesterday,
                                            paymentsToday,
                                            sumToday,
                                            depositsToday,
                                            handleOpenCheck
                                        }: any) {


    const onClickItem = (index: any) => {
        if (isControlsOpen) {
            editItem(index)
        } else {
            handleCheckPayModal(index)
        }
    }

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
                                        <h3 style={{fontSize: 18}}>Сегодня</h3>
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
                                                </p> : <Skeleton variant="rectangular" width={100} height={24}
                                                                 style={{borderRadius: 4}}/>
                                        }
                                    </div>
                                    <List>{paymentsToday.slice().reverse().map(({
                                                                                    name,
                                                                                    sbpBankName,
                                                                                    bankName,
                                                                                    sum,
                                                                                    commission,
                                                                                }: any, index: number) => (
                                        <ListItemButton
                                            key={index}
                                            onClick={() => onClickItem(index)}
                                            sx={{
                                                height: (commission.toString().trim().charAt(0) !== '0') ? 88 : 64,
                                            }}
                                        >
                                            <ListItemAvatar sx={{alignSelf: 'start'}}>
                                                {
                                                    isPageLoaded ?
                                                        <Avatar
                                                            style={{zIndex: 100}}
                                                            alt="Profile Picture"
                                                            src={
                                                                (bankName === 'Альфа-Банк') ? '/images/banks/alfa.png' : (bankName === 'Т-Банк') ? '/images/banks/t.png' : (bankName === 'ВТБ') ? '/images/banks/vtb.png' : ((bankName === 'Перевод на карту другого банка') || (bankName === 'РСХБ') || (bankName === 'Открытие')) ? '/images/banks/cards.svg' : '/images/history/sber.svg'
                                                            }
                                                        /> : <Skeleton variant="circular" width={40} height={40}/>
                                                }
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
                                                    <p style={{textWrap: 'nowrap'}}>
                                                        {(bankName === 'Перевод по СБП') ? sbpBankName : name}
                                                    </p>
                                                    <p className="pGrey" style={{marginTop: 4}}>
                                                        {bankName}
                                                    </p>
                                                    {
                                                        (commission.toString().trim().charAt(0) !== '0') ? (
                                                            <p className="pGrey"
                                                               style={{marginTop: 8, marginBottom: 8}}>
                                                                Комиссия: {commission} ₽
                                                            </p>
                                                        ) : null
                                                    }

                                                </div>
                                                <div
                                                    style={{
                                                        marginTop: (commission.toString().trim().charAt(0) !== '0') ? -28 : 0,
                                                        marginLeft: 12,
                                                        width: 64,
                                                        textWrap: 'nowrap',
                                                        textAlign: 'right',
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                    }}
                                                >
                                                    <p
                                                        style={{
                                                            textWrap: 'nowrap',
                                                            marginTop: sum.startsWith('+') ? -24 : '',
                                                            color: sum.startsWith('+') ? '#198C2F' : '',
                                                            fontSize: 14,
                                                        }}
                                                    >
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
                            <h3 style={{fontSize: 18}}>Вчера</h3>
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
                                    </p> : <Skeleton variant="rectangular" width={100} height={24}
                                                     style={{borderRadius: 4}}/>}
                        </div>
                        <List>
                            {paymentsYesterday.map(({name, bankName, sum}: any, index: any) => (
                                <ListItemButton
                                    key={index}
                                    sx={{
                                        height: 64,
                                    }}
                                    onClick={() => handleCheckPayModal(index)}

                                >
                                    <ListItemAvatar
                                        sx={{alignSelf: 'start'}}
                                    >
                                        {
                                            isPageLoaded ?
                                                <Avatar alt="Profile Picture"
                                                        src={(bankName === 'Альфа-Банк') ? '/images/banks/alfa.png' : (bankName === 'Т-Банк') ? '/images/banks/t.png' : (bankName === 'ВТБ') ? '/images/banks/vtb.png' : ((bankName === 'Перевод на карту другого банка') || (bankName === 'РСХБ') || (bankName === 'Открытие')) ? '/images/banks/cards.svg' : '/images/history/sber.svg'}/> :
                                                <Skeleton variant="circular" width={40} height={40}/>}
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
                                                    <p style={{textWrap: 'nowrap'}}>{name}</p> :
                                                    <Skeleton variant="rectangular" width={120} height={24}
                                                              style={{borderRadius: 4, marginBottom: 4}}/>
                                            }
                                            {
                                                isPageLoaded ?
                                                    <p className='pGrey' style={{marginTop: 4}}>{bankName}</p> :
                                                    <Skeleton variant="rectangular" width={100} height={20}
                                                              style={{borderRadius: 4}}/>
                                            }
                                        </div>
                                        <div
                                            style={{
                                                marginLeft: 16,
                                                width: 56,
                                                textWrap: 'nowrap',
                                                textAlign: 'right',
                                                display: 'flex',
                                                flexDirection: 'column',
                                            }}
                                        >
                                            {
                                                isPageLoaded ?
                                                    <p style={{textWrap: 'nowrap', fontSize: 14,}}>{sum} ₽</p> :
                                                    <Skeleton variant="rectangular" width={60} height={24}
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
                                                    /> : ''
                                            }
                                        </div>
                                    </div>
                                </ListItemButton>
                            ))}
                        </List>
                    </div> : <CircularProgress
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
