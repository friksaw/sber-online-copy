'use client'

import * as React from "react";
import {Avatar} from "@mui/material";
import Image from "next/image";

export default function FastPaymentButton({ text, picture }: any) {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                margin: '0 16px',
                maxWidth: 68,
                maxHeight: 115,
            }}
        >
            {
                (picture === 'new') ?
                        <Image
                            src='/images/main/newTransaction.svg'
                            width={80}
                            height={80}
                            alt=''
                        />
                     :
                    (!picture) ?
                        <Avatar
                            sx={{
                                width: 48,
                                height: 48
                            }}
                        >
                            РФ
                        </Avatar>:
                        <Avatar
                            sx={{
                                width: 48,
                                height: 48
                            }}
                        >
                            <Image
                                src={picture}
                                width={80}
                                height={80}
                                alt=''
                            />
                        </Avatar>
            }
            <p
                className='pGrey'
                style={{
                    display: '-webkit-box',
                    WebkitLineClamp: '2',
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',

                    marginTop: 8,
                    fontSize: 12,
                    width: 52,
                }}
            >
                { text }
            </p>

        </div>
    );
}