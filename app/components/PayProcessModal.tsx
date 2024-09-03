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

                             payPhone,
                             payResBankNum,
                             paySenderName,
                             paySenderBankNum,

                             changePayPhone,
                             changePaySenderBankNum,
                             changePaySenderName,
                             changePayResBankNum,
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
                            style={{
                                width: '100%',
                                marginBottom: 20,
                            }}
                            onChange={(event): any => changePaySum(event?.target.value)}
                        />
                        <TextField
                            id="outlined-basic"
                            label="Кому перевести"
                            variant="outlined"
                            value={payName}
                            style={{
                                width: '100%',
                                marginBottom: 20,
                            }}
                            onChange={(event): any => changePayName(event?.target.value)}
                        />
                        <TextField
                            id="outlined-basic"
                            label="Номер получателя"
                            variant="outlined"
                            value={payPhone}
                            style={{
                                width: '100%',
                                marginBottom: 20,
                            }}
                            onChange={(event): any => changePayPhone(event?.target.value)}
                        />
                        <TextField
                            id="outlined-basic"
                            label="4 цифры отправителя"
                            variant="outlined"
                            value={paySenderBankNum}
                            style={{
                                width: '100%',
                                marginBottom: 20,
                            }}
                            onChange={(event): any => changePaySenderBankNum(event?.target.value)}
                        />
                        <TextField
                            id="outlined-basic"
                            label="Кто переводит"
                            variant="outlined"
                            value={paySenderName}
                            style={{
                                width: '100%',
                                marginBottom: 20,
                            }}
                            onChange={(event): any => changePaySenderName(event?.target.value)}
                        />
                        <TextField
                            id="outlined-basic"
                            label="4 цифры получателя"
                            variant="outlined"
                            value={payResBankNum}
                            style={{
                                width: '100%',
                                marginBottom: 20,
                            }}
                            onChange={(event): any => changePayResBankNum(event?.target.value)}
                        />
                        <Button onClick={handleSuccessPayModal}>
                            Перевести
                        </Button>
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

                            width: `calc(${pageWidth}px + 60px)`,
                            height: '100%',
                            bgcolor: 'background.paper',
                            boxShadow: 24,
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                height: 56,
                                backgroundColor: '#1E1E1E',
                                paddingTop: 12,
                            }}
                        >
                            <a
                                onClick={handleOpenCheck}
                                style={{
                                    cursor: 'pointer'
                                }}
                            >
                                <Image
                                    src="/images/payment/check-arrow.svg"
                                    width={15}
                                    height={21}
                                    alt=''
                                    style={{
                                        marginLeft: 12,
                                    }}
                                />
                            </a>
                            <p
                                style={{
                                    fontSize: 18,
                                    fontWeight: 500,
                                    marginLeft: 28
                                }}
                            >
                                Сохранить чек
                            </p>
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                width: '100%',
                                height: '100%',
                                padding: '12px',
                                backgroundColor: '#000000',
                                paddingTop: 30,
                            }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    padding: '24px 20px',
                                    width: '100%',
                                    backgroundColor: '#ffffff',
                                    borderRadius: 5,
                                    color: '#000000',
                                    paddingBottom: 0
                                }}
                            >
                                <div
                                    style={{
                                        borderBottom: '1px dashed #707070',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        paddingBottom: 8
                                    }}
                                >

                                    <Image
                                        src="/images/payment/full-sber.svg"
                                        width={146}
                                        height={31}
                                        alt=''
                                        style={{
                                            marginBottom: 10
                                        }}
                                    />

                                    <p
                                        className='pGrey'
                                        style={{
                                            fontSize: 14,
                                        }}
                                    >
                                        Чек по операции
                                    </p>
                                    <p
                                        className='pGrey'
                                        style={{
                                            fontSize: 14,
                                        }}
                                    >
                                        26 августа 2024 15:55:14 (МСК)
                                    </p>
                                </div>
                                <div
                                    style={{
                                        borderBottom: '1px dashed #707070',
                                        paddingBottom: 30,
                                        marginBottom: 18,
                                    }}
                                >
                                    <p
                                        className='pGrey'
                                        style={{
                                            marginTop: 20,
                                            fontSize: 14,
                                        }}
                                    >
                                        Операция
                                    </p>
                                    <p>
                                        Перевод клиенту Сбербанка
                                    </p>
                                    <p
                                        className='pGrey'
                                        style={{
                                            fontSize: 14,
                                        }}
                                    >
                                        ФИО Получателя
                                    </p>
                                    <p>
                                        {payName}
                                    </p>
                                    <p
                                        className='pGrey'
                                        style={{
                                            fontSize: 14,
                                        }}
                                    >
                                        Телефон получателя
                                    </p>
                                    <p>
                                        {payPhone}
                                    </p>
                                    <p
                                        className='pGrey'
                                        style={{
                                            fontSize: 14,
                                        }}
                                    >
                                        Номер счёта получателя
                                    </p>
                                    <p>
                                        {payResBankNum}
                                    </p>
                                    <p
                                        className='pGrey'
                                        style={{
                                            marginTop: 20,
                                            fontSize: 14,
                                        }}
                                    >
                                        ФИО отправителя
                                    </p>
                                    <p>
                                        {paySenderName}
                                    </p>
                                    <p
                                        className='pGrey'
                                        style={{
                                            fontSize: 14,
                                        }}
                                    >
                                        Счёт отправителя
                                    </p>
                                    <p>
                                        {paySenderBankNum}
                                    </p>
                                    <p
                                        className='pGrey'
                                        style={{
                                            fontSize: 14,
                                        }}
                                    >
                                        Сумма перевода
                                    </p>
                                    <p>
                                        {paySum} ₽
                                    </p>
                                    <p
                                        className='pGrey'
                                        style={{
                                            fontSize: 14,
                                        }}
                                    >
                                        Комиссия
                                    </p>
                                    <p>
                                    0,00 ₽
                                    </p>
                                    <p
                                        className='pGrey'
                                        style={{
                                            marginTop: 20,
                                            fontSize: 14,
                                        }}
                                    >
                                        Номер документа
                                    </p>
                                    <p>
                                        8792950631
                                    </p>
                                    <p
                                        className='pGrey'
                                        style={{
                                            fontSize: 14,
                                        }}
                                    >
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
