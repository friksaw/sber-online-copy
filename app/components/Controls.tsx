'use client'

import * as React from "react";
import Image from "next/image";
import {Button, Card, FormControl, InputLabel, MenuItem, Select, Slider, TextField} from "@mui/material";


export default function Controls({ isOpen, balance, changeBalance, expenses, changeExpenses, month, changeMonth, sumYesterday, changeSumYesterday, shuffleYesterdayMessages }: any) {
    return (
        <Card
            sx={{
                width: 300,
                position: 'absolute',
                right: 20,
                top: 20,
                display: isOpen ? '' : 'none',
                padding: '12px 20px',
                zIndex: 10000000000
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    margin: '20px 0'
                }}
            >
                <TextField
                    id="outlined-basic"
                    label="Расходы в..."
                    variant="outlined"
                    value={month}
                    onChange={(event): any => changeMonth(event?.target.value)}
                />
                <TextField
                    id="outlined-basic"
                    label="Баланс"
                    variant="outlined"
                    value={balance}
                    onChange={(event): any => changeBalance(event?.target.value)}
                />
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}
            >
                <TextField
                    id="outlined-basic"
                    label="Расходы"
                    variant="outlined"
                    value={expenses}
                    onChange={(event): any => changeExpenses(event?.target.value)}
                />
                <TextField
                    id="outlined-basic"
                    label="Расходы вчера"
                    variant="outlined"
                    value={sumYesterday}
                    onChange={(event): any => changeSumYesterday(event?.target.value)}
                />
            </div>

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}
            >
                <Slider
                    defaultValue={30}
                    aria-label="Disabled slider"
                    sx={{}}
                />
            </div>



            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                }}
            >
                <Button>
                    добавить зачисление
                </Button>
                <Button onClick={shuffleYesterdayMessages}>
                    рандом вчера
                </Button>
            </div>
        </Card>
    );
}