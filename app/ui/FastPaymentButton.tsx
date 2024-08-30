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
                width: 68
            }}
        >
            {
                (picture === 'new') ?
                    <Avatar>
                        <Image
                            src='/images/main/newTransaction.svg'
                            width={80}
                            height={80}                                alt=''

                        />
                    </Avatar> :
                    (!picture) ?
                        <Avatar>РФ</Avatar>:
                        <Avatar>
                            <Image
                                src={picture}
                                width={80}
                                height={80}                                alt=''

                            />
                        </Avatar>
            }
            <p
                className='pGrey'
                style={{
                    marginTop: 8,
                }}
            >
                { text }
            </p>

        </div>
    );
}