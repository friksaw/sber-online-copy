import React, { useState } from 'react';
import {Button, Fade, makeStyles, Modal, Slide, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import PayProcessBox from "@/app/components/PaySuccessBox";
import Image from "next/image";



const PayProcessModal = ({ isOpen, handleModal, paySum, changePaySum, changePayName, payName, doPay, pageWidth }: any) => {
    const [isSuccessPayModalOpen, setIsSuccessPayModalOpen]: any = useState(false);


    const handleSuccessPayModal = () => {
        setIsSuccessPayModalOpen((isSuccessPayModalOpen: any) => !isSuccessPayModalOpen);
        doPay()
    };

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={isOpen}
                onClose={handleModal}
                closeAfterTransition
                slotProps={{
                    backdrop: {
                        timeout: 50,
                    },
                }}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Slide direction="left" in={isOpen} mountOnEnter unmountOnExit>
                    <Box
                        sx={{
                            width: `calc(${pageWidth}px + 60px)`,
                            height: '100%',
                            bgcolor: 'background.paper',
                            boxShadow: 24,
                            p: 4,
                        }}
                    >

                        <TextField
                            id="outlined-basic"
                            label="Сколько перевести"
                            variant="outlined"
                            value={paySum}
                            onChange={(event): any => changePaySum(event?.target.value)}
                        />
                        <TextField
                            id="outlined-basic"
                            label="Кому перевести"
                            variant="outlined"
                            value={payName}
                            onChange={(event): any => changePayName(event?.target.value)}
                        />
                        <a onClick={handleSuccessPayModal} style={{color: 'black'}}>
                            перевести
                        </a>
                    </Box>
                </Slide>
            </Modal>


            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={isSuccessPayModalOpen}
                onClose={handleSuccessPayModal}
                closeAfterTransition
                slotProps={{
                    backdrop: {
                        timeout: 50,
                    },
                }}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Slide direction="left" in={isSuccessPayModalOpen} mountOnEnter unmountOnExit>
                    <Box
                        sx={{
                            display: 'flex',
                            transform: 'translate(-20%, -50%)',
                            backgroundImage: 'url("/images/bgs/pay-success-bg.svg")',
                            backgroundSize: 'cover',

                            width: `calc(${pageWidth}px + 60px)`,
                            height: '100%',
                            bgcolor: 'background.paper',
                            boxShadow: 24,
                            p: 8,
                        }}
                    >
                        <div
                            style={{
                                alignSelf: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignContent: 'center',
                                textAlign: 'center',
                                height: 371,
                                width: 306,
                                backgroundColor: '#0E0E0E',
                                borderRadius: 16,
                            }}

                        >
                            <h3>
                                Перевод доставлен
                            </h3>
                            <h3
                                style={{
                                    fontSize: 28,
                                    marginTop: 4,
                                }}
                            >
                                {paySum} ₽
                            </h3>
                            <p
                                style={{
                                    fontSize: 16,
                                    opacity: 0.4,
                                    marginTop: 10,
                                }}
                            >
                                Комиссия 0 ₽
                            </p>
                            <p
                                style={{
                                    fontSize: 16,
                                    opacity: 0.4,
                                }}
                            >
                                {payName}
                            </p>
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    marginTop: 40,
                                    fontSize: 16,

                                }}
                            >
                                <a
                                    style={{

                                        backgroundColor: '#1C1C1C',

                                        borderRadius: 12,
                                        height: 45,
                                        width: 135,
                                        textAlign: 'center',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginLeft: 8
                                    }}
                                >


                                    Чек
                                </a>
                                <a
                                    style={{
                                        borderRadius: 12,
                                        backgroundColor: '#C4C4C4',
                                        height: 45,
                                        width: 135,
                                        textAlign: 'center',
                                        color: '#0E0E0E',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginLeft: 8
                                    }}
                                >
                                    В историю
                                </a>
                            </div>
                        </div>
                    </Box>
                </Slide>
            </Modal>
        </div>
    );
};


export default PayProcessModal;
