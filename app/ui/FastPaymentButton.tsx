'use client'

import * as React from "react";
import {Avatar, Badge} from "@mui/material";
import Image from "next/image";

export default function FastPaymentButton({ text, picture, handlePayProcessModal }: any) {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                margin: '0 14px',
                width: 72,
                maxHeight: 115,
            }}
        >
            {
                (picture === 'new') ?
                    <a
                        onClick={handlePayProcessModal}
                        style={{
                            width: 56,
                            height: '100%',
                        }}

                    >
                        <Image
                            src='/images/main/newTransaction.svg'
                            width={80}
                            height={80}
                            alt=''
                            style={{
                                width: '100%',
                            }}
                        />
                    </a>

                     :
                    (!picture) ?
                        <div
                            style={{
                                position: 'relative',
                            }}
                        >
                            <Image
                                src="/images/cross.svg"
                                width={19}
                                height={19}
                                alt=''
                                style={{
                                    position: 'absolute',
                                    top: -8,
                                    right: -16,
                                }}
                            />
                            <Avatar
                                sx={{
                                    width: 56,
                                    height: 56,
                                    backgroundColor: '#383838'
                                }}
                            >
                                <p
                                    style={{
                                        opacity: 0.4
                                    }}
                                >
                                    ПП
                                </p>
                            </Avatar>
                        </div>
                        :
                        <Badge
                            color="secondary"
                            overlap="circular"
                            badgeContent="3"
                            sx={{
                                '& .MuiBadge-badge': {
                                    border: '2px solid #181414',
                                    marginTop: 4,
                                    height: 20,
                                    width: 8,
                                    backgroundColor: '#d45c24',
                                    fontSize: 12,
                                },

                            }}
                        >
                            <Avatar
                                sx={{
                                    width: 56,
                                    height: 56
                                }}
                            >
                                <Image
                                    src={picture}
                                    width={80}
                                    height={80}
                                    alt=''
                                />
                            </Avatar>
                        </Badge>
            }
            <div
                className='pGrey'
                style={{
                    marginTop: 8,
                    fontSize: 12,
                    width: 52,
                    textWrap: 'nowrap',
                    marginLeft: -8,
                    opacity: (picture === 'new') ? 0.4 : 1,
                    color: '#ffffff'
                }}
            >
                { text }
            </div>

        </div>
    );
}