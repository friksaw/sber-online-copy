'use client'

import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import Image from 'next/image'



export default function BottomNav({ children, currentPage, onChangePage, pageWidth }: any) {

    return (
        <Box
            sx={{
                pb: 1,
            }}
        >
            {children}
            <Paper
                sx={{
                    position: 'fixed',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    maxWidth: pageWidth,
                    width: '100%',
                    margin: '0 auto',
                }}
                elevation={3}
            >
                <BottomNavigation
                    showLabels
                    value={currentPage}
                    onChange={(event, newPage) => {
                        onChangePage(newPage);
                    }}
                    sx={{
                        backgroundColor: '#1E1E1E',
                        maxWidth: pageWidth,
                    }}
                >
                    <BottomNavigationAction
                        label="Главный"
                        icon={
                            <Image
                                src="/images/bottomNav/home.svg"
                                width={27}
                                height={22}
                                alt=''
                            />
                        }
                        sx={{
                            color: 'white',
                            opacity: 0.4,
                            fontSize: 10,
                            width: 20,
                            '& .MuiSlider-thumb': {
                                borderRadius: '5px',
                            },
                        }}
                    />
                    <BottomNavigationAction
                        label="Накопления"
                        icon={
                            <Image
                                src="/images/bottomNav/capital.svg"
                                width={27}
                                height={22}
                                alt=''
                            />
                        }
                        sx={{
                            color: 'white',
                            opacity: 0.4,
                            fontSize: 10,
                        }}
                    />
                    <BottomNavigationAction
                        label="Ассистент"
                        icon={
                            <Image
                                src="/images/bottomNav/assistant.svg"
                                width={27}
                                height={22}
                                alt=''

                            />
                        }
                        sx={{
                            color: 'white',
                            opacity: 0.4,
                            fontSize: 10,
                        }}
                    />
                    <BottomNavigationAction
                        label="Платежи"
                        icon={
                            <Image
                                src="/images/bottomNav/payments.svg"
                                width={24}
                                height={16}
                                alt=''
                            />
                        }
                        sx={{
                            color: 'white',
                            opacity: 0.4,
                            fontSize: 10,
                        }}
                    />
                    <BottomNavigationAction
                        label="История"
                        icon={
                            <Image
                                src="/images/bottomNav/history.svg"
                                width={25}
                                height={20}
                                alt=''
                            />
                        }
                        sx={{
                            color: 'white',
                            opacity: 0.4,
                            fontSize: 10,
                        }}
                    />
                </BottomNavigation>
            </Paper>
        </Box>
    );
}



const messageExamples: any = [
    '1',
    '2',
    '3',
    '4',
    '5',
];