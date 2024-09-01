'use client'

import * as React from "react";
import {Avatar, List, ListItemAvatar, ListItemButton, ListItemText} from "@mui/material";
import Image from "next/image";

export default function PaymentsHistory() {
    return (
        <div

        >
            <List>
                {history.map(({ name, desc, sum, person }: any, index: any) => (
                    <ListItemButton
                        key={index + person}
                        sx={{

                            height: 64,
                        }}
                    >
                        <ListItemAvatar sx={{alignSelf: 'start'}}>
                            <Avatar alt="Profile Picture" src={person} />
                        </ListItemAvatar>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                width: '100%',
                                paddingBottom: 12,

                                borderBottom: '1px solid #323232',

                            }}
                        >
                            <div>
                                <p>{ name }</p>
                                <p className='pGrey' style={{ marginTop: 4 }}>{ desc }</p>
                            </div>
                            <div
                                style={{
                                    marginLeft: 12,
                                }}
                            >
                                <p>{ sum } ₽</p>
                                <Image
                                    src="/images/history/repeat.svg"
                                    width={32}
                                    height={32}
                                    style={{
                                        marginTop: 4,
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

const history: any = [
    {
        name: 'Александр Александрович Ж.',
        desc: 'Клиенту Сбера',
        sum: '889',
        person: '/images/history/sber.svg',
    },
    {
        name: 'Марина Сергеевна И.',
        desc: 'В другой банк',
        sum: '600',
        person: '/public/images/history/sber.svg',
    },
    {
        name: 'Георгий Янович П.',
        desc: 'Клиенту Сбера',
        sum: '889',
        person: '/images/history/sber.svg',
    },
    {
        name: 'Афанасий Александрович Ж.',
        desc: 'Клиенту Сбера',
        sum: '889',
        person: '/images/history/sber.svg',
    },
    {
        name: 'Владимир Дмитриевич Д.',
        desc: 'Клиенту Сбера',
        sum: '889',
        person: '/images/history/sber.svg',
    },
    {
        name: 'Александр Александрович Ж.',
        desc: 'Клиенту Сбера',
        sum: '889',
        person: '/images/history/sber.svg',
    },
];