import React, { useState } from 'react';
import {Button, Fade, keyframes, makeStyles, Modal, Slide, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import PayProcessBox from "@/app/components/PaySuccessBox";
import Image from "next/image";



const PayProcessModal = ({
                             isOpen,
                             handleModal,
                             paySum,
                             changePaySum,
                             changePayName,
                             payName,
                             doPay,
                             pageWidth,
                             renderPage,
                             onChangePage,

                             isCheckLoaded,
                             isCheckOpen,
                             handleOpenCheck,
                             checkData,
                         }: any) => {
    const [isSuccessPayModalOpen, setIsSuccessPayModalOpen]: any = useState(false);
    const [expanded1, setExpanded1] = useState(false);
    const [expanded2, setExpanded2] = useState(false);

    const toggleExpand = () => {
        setExpanded1(!expanded1);
        setExpanded2(!expanded2);
    };

    const gradientStyle1 = {
        background: 'linear-gradient(45deg, #9DBB01, #1CA327, #199EA4)',
        height: expanded1 ? '50px' : '23px',
        width: '23px',
        transform: 'rotate(-45deg)',
        transition: 'height 0.5s ease',
        borderRadius: 36,
        marginTop: 24,
        marginRight: -42,
    };
    const gradientStyle2 = {
        background: 'linear-gradient(45deg, #9DBB01, #1CA327, #199EA4 75%)',
        height: expanded2 ? '80px' : 0,
        width: '23px',
        transform: 'rotate(45deg)',
        translate: 50,
        transition: 'height 0.5s ease',
        borderRadius: 36,

    };

    const handleSuccessPayModal = () => {
        setIsSuccessPayModalOpen((isSuccessPayModalOpen: any) => !isSuccessPayModalOpen);
        doPay()
    };
    const closeSuccessPayModal = () => {
        setIsSuccessPayModalOpen((isSuccessPayModalOpen: any) => !isSuccessPayModalOpen);
    };
    const goToHistory = () => {
        setIsSuccessPayModalOpen((isSuccessPayModalOpen: any) => !isSuccessPayModalOpen);
        handleModal()
        renderPage()
        onChangePage(4)
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
                onClose={closeSuccessPayModal}
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
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                }}
                            >

                                <button onClick={toggleExpand}>анимация тест</button>
                                <div style={gradientStyle1}></div>
                                <div style={gradientStyle2}></div>
                            </div>
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
                                            cursor: 'pointer',
                                        }}
                                        onClick={handleOpenCheck}
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
                                            marginLeft: 8,
                                            cursor: 'pointer',
                                        }}
                                        onClick={goToHistory}
                                    >
                                        В историю
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Box>
                </Slide>
            </Modal>



            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={isCheckOpen}
                onClose={handleOpenCheck}
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
                <Slide direction="left" in={isCheckOpen} mountOnEnter unmountOnExit>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            transform: 'translate(-20%, -50%)',
                            backgroundImage: 'url("/images/bgs/pay-success-bg.svg")',
                            backgroundSize: 'cover',

                            width: `calc(${pageWidth}px + 60px)`,
                            height: '100%',
                            bgcolor: 'background.paper',
                            boxShadow: 24,
                        }}
                    >
                        <div
                            style={{
                                height: 52,
                                backgroundColor: '#1E1E1E',
                            }}
                        >
                            <p>
                                Сохранить чек
                            </p>
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                width: '100%',
                                padding: '12px',
                            }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    padding: '24px 20px',
                                    height: 614,
                                    width: '100%',
                                    backgroundColor: '#ffffff',
                                    borderRadius: 5,
                                    color: '#000000',
                                }}
                            >
                                <div>
                                    <p className='pGrey'>
                                        Операция
                                    </p>
                                    <p>
                                        Перевод клиенту Сбербанка
                                    </p>
                                    <p className='pGrey'>
                                        ФИО Получателя
                                    </p>
                                    <p>
                                    Александр Владимирович Х.
                                    </p>
                                    <p>
                                        Телефон получателя
                                    </p>
                                    <p>
                                        +7(905) 034-24-85
                                    </p>
                                    <p>
                                        Номер счёта получателя
                                    </p>
                                    <p>
                                        8465
                                    </p>
                                    <p>
                                        ФИО отправителя
                                    </p>
                                    <p>
                                        Людмила Олеговна Д.
                                    </p>
                                    <p>
                                        Счёт отправителя
                                    </p>
                                    <p>
                                        2820
                                    </p>
                                    <p>
                                        Сумма перевода
                                    </p>
                                    <p>
                                        {paySum}
                                    </p>
                                    <p>
                                        Комиссия
                                    </p>
                                    <p>
                                        0,00 ₽
                                    </p>
                                    <p>
                                        Номер документа
                                    </p>
                                    <p>
                                        8792950631
                                    </p>
                                    <p>
                                        Код авторизации
                                    </p>
                                    <p>
                                        111083
                                    </p>
                                </div>
                            </div>

                                <a
                                    style={{

                                        backgroundColor: isCheckLoaded ? '#1E1E1E' : '#148F2A',

                                        borderRadius: 12,
                                        height: 48,
                                        margin: '8px 0 56px 0',
                                        width: '100%',
                                        textAlign: 'center',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        cursor: 'pointer',
                                    }}
                                >
                                    Сохранить или отправить
                                </a>
                        </div>
                    </Box>
                </Slide>
            </Modal>
        </div>
    );
};


export default PayProcessModal;
