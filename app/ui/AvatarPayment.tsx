'use client'

import * as React from "react";
import {Avatar} from "@mui/material";
import Image from "next/image";

export default function AvatarPayment({ text, picture }) {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                margin: '0 16px',
                width: 67
            }}
        >
            {
                (picture === 'new') ?
                    <Avatar>
                        <Image
                            src='/images/main/newTransaction.svg'
                            width={67}
                            height={67}
                        />
                    </Avatar> :
                    (!picture) ? '' :
                        <Avatar>
                            <Image
                                src='/images/main/newTransaction.svg'
                                width={67}
                                height={67}
                            />
                            <p>FG</p>
                        </Avatar>
            }
            <Avatar>
                <Image
                    src={
                        (picture === 'new') ? '/images/main/newTransaction.svg' :
                            picture ? '' : ''
                    }
                    width={67}
                    height={67}
                />
                <p>sefef</p>
            </Avatar>
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