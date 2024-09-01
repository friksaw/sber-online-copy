import React, { useState } from 'react';
import {Button, Fade, makeStyles, Modal, Slide, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import PayProcessBox from "@/app/components/PaySuccessBox";



const PayProcessModal = ({ isOpen, handleModal, paySum, changePaySum, changePayName, payName, doPay }: any) => {
    const [isSuccessPayModalOpen, setIsSuccessPayModalOpen]: any = useState(false);


    const handleSuccessPayModal = () => {
        setIsSuccessPayModalOpen(isSuccessPayModalOpen => !isSuccessPayModalOpen);
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
                        timeout: 100,
                    },
                }}
            >
                <Slide direction="left" in={isOpen} mountOnEnter unmountOnExit>
                    <Box sx={{
                        width: '400px',
                        height: 'calc(100% - 57px)',
                        position: 'absolute',
                        top: 0,
                        left: '50%',
                        transform: 'translate(-20%, -50%)',  // Выравнивание по центру
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                    }}>

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
                        timeout: 100,
                    },
                }}
            >
                <Slide direction="left" in={isSuccessPayModalOpen} mountOnEnter unmountOnExit>
                    <Box sx={{
                        width: '400px',
                        height: 'calc(100% - 57px)',
                        position: 'absolute',
                        top: 0,
                        left: '50%',
                        transform: 'translate(-20%, -50%)',
                        backgroundImage: 'url("/images/bgs/pay-success-bg.png")',
                        backgroundSize: 'cover',
                        boxShadow: 24,
                        p: 4,
                    }}>
                        <div

                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignContent: 'center',
                                textAlign: 'center',
                                height: '100%',
                            }}

                        >
                            <h3>
                                Перевод доставлен
                            </h3>
                            <h3
                                style={{
                                    fontSize: 28
                                }}
                            >
                                {paySum} ₽
                            </h3>
                            <p>
                                Александр Владимирович Х.
                            </p>
                        </div>
                    </Box>
                </Slide>
            </Modal>
        </div>
    );
};


export default PayProcessModal;
