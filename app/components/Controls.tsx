'use client'

import * as React from "react";
import Image from "next/image";
import {Card, FormControl, InputLabel, MenuItem, Select, Slider, TextField} from "@mui/material";


export default function Controls({ isOpen, balance, changeBalance, expenses, changeExpenses }: any) {
    return (
        <Card
            sx={{
                width: 300,
                position: 'absolute',
                right: 20,
                top: 20,
                display: isOpen ? '' : 'none',
                padding: '12px 20px'
            }}
        >
            <div
                style={{
                    margin: '20px 0'
                }}
            >
                <FormControl
                    fullWidth>
                    <InputLabel
                        id="demo-simple-select-label"
                        sx={{
                            backgroundColor: 'white',
                            borderRadius: 4,

                        }}
                    >
                        Текущий месяц
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={2}
                        label="Age"
                    >
                        <MenuItem value={0}>Январь</MenuItem>
                        <MenuItem value={1}>Февраль</MenuItem>
                        <MenuItem value={2}>Март</MenuItem>
                    </Select>
                </FormControl>
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
                    label="Баланс"
                    variant="outlined"
                    value={balance}
                    onChange={(): any => changeBalance(event.target.value)}
                />
                <TextField
                    id="outlined-basic"
                    label="Расходы"
                    variant="outlined"
                    value={expenses}
                    onChange={(): any => changeExpenses(event.target.value)}
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
                    sx={{

                    }}
                />
            </div>
        </Card>
    );
}