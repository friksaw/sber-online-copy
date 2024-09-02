import React, { useState } from 'react';
import {Button, Fade, keyframes, makeStyles, Modal, Slide, styled, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import PayProcessBox from "@/app/components/PaySuccessBox";
import Image from "next/image";

const growDownAnimation = {
    '0%': { transform: 'scaleY(0)' },
    '100%': { transform: 'scaleY(1)' },
};

const StyledSvg = styled('svg')({
    animation: `$growDownAnimation 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`,
    width: '103px',
    height: '73px',
});

const SvgComponent: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div>
            <button onClick={toggleVisibility}>Toggle SVG</button>
            {isVisible && (
                <StyledSvg
                    viewBox="0 0 103 73"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M33.0385 68.9393C37.1391 73.0398 43.7873 73.0398 47.8878 68.9393C51.9884 64.8388 51.9883 58.1906 47.8878 54.0901L18.8964 25.0988C14.7958 20.9983 8.14759 20.9983 4.04707 25.0988C-0.0534503 29.1993 -0.0534495 35.8475 4.04707 39.948L33.0385 68.9393Z"
                        fill="url(#paint0_linear_51_10702)"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear_51_10702"
                            x1="17.9304"
                            y1="34.8969"
                            x2="93.9779"
                            y2="34.8969"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#9DBB01" />
                            <stop offset="0.479" stopColor="#1CA327" />
                            <stop offset="1" stopColor="#199EA4" />
                        </linearGradient>
                    </defs>
                </StyledSvg>
            )}
        </div>
    );
};

const PayProcessModal = ({
                             isOpen,
                             handleModal,
                             paySum,
                             changePaySum,
                             changePayName,
                             payName,
                             doPay,
                             pageWidth
                         }: any) => {
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
                                justifyContent: 'space-between',
                                padding: 14,
                                alignContent: 'center',
                                textAlign: 'center',
                                height: 371,
                                width: 306,
                                backgroundColor: '#0E0E0E',
                                borderRadius: 16,
                            }}

                        >
                            <SvgComponent />
                            <div>
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

                        </div>
                    </Box>
                </Slide>
            </Modal>
        </div>
    );
};


export default PayProcessModal;
