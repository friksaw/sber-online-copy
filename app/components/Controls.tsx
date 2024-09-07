'use client'

import * as React from "react";
import {Button, Card, TextField} from "@mui/material";


export default function Controls({
                                     selectedItemIndex,
                                     deleteItem,
                                     editModalOpen,
                                     changeCardNum,
                                     changeBankNum,
                                     cardNum,
                                     bankNum,
                                     peopleSum,
                                     changePeopleSum,
                                     isOpen,
                                     balance,
                                     changeBalance,
                                     expenses,
                                     changeExpenses,
                                     month,
                                     changeMonth,
                                     sumYesterday,
                                     changeSumYesterday,
                                     shuffleYesterdayMessages,
                                     addDeposit
                                 }: any) {
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
                    marginTop: 20
                }}
            >
                <TextField
                    id="outlined-basic"
                    label="Переводы людям"
                    variant="outlined"
                    value={peopleSum}
                    onChange={(event): any => changePeopleSum(event?.target.value)}
                    sx={{
                        width: '100%'
                    }}
                />
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 20
                }}
            >
                <TextField
                    id="outlined-basic"
                    label="Номер карты"
                    variant="outlined"
                    value={cardNum}
                    onChange={(event): any => changeCardNum(event?.target.value)}
                />
                <TextField
                    id="outlined-basic"
                    label="Номер счета"
                    variant="outlined"
                    value={bankNum}
                    onChange={(event): any => changeBankNum(event?.target.value)}
                />
            </div>


            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    marginTop: 20
                }}
            >
                <Button onClick={addDeposit}>
                    добавить зачисление
                </Button>
                <Button onClick={shuffleYesterdayMessages}>
                    рандом вчера
                </Button>
                {
                    editModalOpen &&
                    <Button onClick={() => deleteItem(selectedItemIndex)}>
                        удалить
                    </Button>
                }
            </div>

        </Card>
    );
}