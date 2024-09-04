import React, { useState } from 'react';
import {
    Button,
    CircularProgress,
    Fade,
    keyframes,
    makeStyles,
    Menu,
    MenuItem,
    Modal,
    Slide,
    TextField
} from "@mui/material";
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

                             changePayMethod,
                             payMethod,

                             changePaySenderBankName,
                             paySenderBankName,

                             changePayCommission,
                             payCommission,

                             changePaySuip,
                             paySuip,

                             isCheckModalOpen,
                             handleCheckPayModal,

                             pageHeight,
                            scale,
                         }: any) => {
    const [isSuccessPayModalOpen, setIsSuccessPayModalOpen]: any = useState(false);
    const [expanded1, setExpanded1]: any = useState(false);
    const [expanded2, setExpanded2]: any = useState(false);
    const [isCheckLangOpen, setIsCheckLangOpen]: any = useState(null);

    const toggleExpand = () => {
        setExpanded1(!expanded1);
        setTimeout(() => setExpanded2(!expanded2), 200);

    };

    const gradientStyle1 = {
        background: 'linear-gradient(45deg, #9DBB01 25%, #1CA327, #199EA4)',
        height: expanded1 ? '50px' : '23px',
        width: '23px',
        transform: 'rotate(-45deg)',
        transition: 'height 0.5s ease',
        borderRadius: 36,
        marginTop: 64,
        marginLeft: -42,
    };
    const gradientStyle2 = {
        background: 'linear-gradient(45deg, #199EA4 5%, #1CA327, #9DBB01)',
        height: expanded2 ? '80px' : 0,
        opacity: expanded2 ? 1 : 0,
        transformOrigin: 'top',
        width: '23px',
        transform: 'rotate(45deg) scaleY(-1)',
        translate: 50,
        transition: 'height 0.5s ease, opacity 0.2s ease',
        borderRadius: 36,
        marginTop: 108,
        marginLeft: -68
    };

    const handleSuccessPayModal = () => {
        setIsSuccessPayModalOpen((isSuccessPayModalOpen: any) => !isSuccessPayModalOpen);
        doPay()
    };
    const handleCheckModal = () => {
        toggleExpand()

        handleCheckPayModal()
    };
    const handleOpenCheckLang = () => {
        setIsCheckLangOpen((isLangOpen: any) => !isLangOpen);

    };
    const closeSuccessPayModal = () => {
        setIsSuccessPayModalOpen((isSuccessPayModalOpen: any) => !isSuccessPayModalOpen);
    };
    const goToHistory = () => {
        if (isSuccessPayModalOpen) {
            setIsSuccessPayModalOpen((isSuccessPayModalOpen: any) => !isSuccessPayModalOpen);
        }
        if (isOpen) {
            handleModal()
        }
        if (isCheckModalOpen) {
            handleCheckPayModal()
        }
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
                    paddingTop: '28px',
                    justifyContent: 'center',
                    '.css-i9fmh8-MuiBackdrop-root-MuiModal-backdrop': {
                        backgroundColor: 'rgba(0, 0, 0, 0)',
                    },
                }}
            >
                <Slide direction="left" in={isOpen} mountOnEnter unmountOnExit>
                    <Box
                        sx={{
                            width: (pageWidth === 363) ? `calc(${pageWidth}px + 62px)` : pageWidth,
                            height: (pageWidth === 363) ? '100%' : pageHeight,
                            transform: `scale(${scale})`,
                            margin: '0 auto',
                            alignSelf: 'center',

                            bgcolor: 'background.paper',
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
                                marginBottom: 12,
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
                                marginBottom: 12,
                            }}
                            onChange={(event): any => changePayName(event?.target.value)}
                        />
                        <TextField
                            id="outlined-basic"
                            label="Перевод клиенту Сбербанка = 0 | другой 1"
                            variant="outlined"
                            value={payMethod}
                            style={{
                                width: '100%',
                                marginBottom: 12,
                            }}
                            onChange={(event): any => changePayMethod(event?.target.value)}
                        />
                        <TextField
                            id="outlined-basic"
                            label="Имя другого банка"
                            variant="outlined"
                            value={paySenderBankName}
                            style={{
                                width: '100%',
                                marginBottom: 12,
                            }}
                            onChange={(event): any => changePaySenderBankName(event?.target.value)}
                        />
                        <TextField
                            id="outlined-basic"
                            label="Комиссия"
                            variant="outlined"
                            value={payCommission}
                            style={{
                                width: '100%',
                                marginBottom: 12,
                            }}
                            onChange={(event): any => changePayCommission(event?.target.value)}
                        />
                        <TextField
                            id="outlined-basic"
                            label="Номер получателя"
                            variant="outlined"
                            value={payPhone}
                            style={{
                                width: '100%',
                                marginBottom: 12,
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
                                marginBottom: 12,
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
                                marginBottom: 12,
                            }}
                            onChange={(event): any => changePaySenderName(event?.target.value)}
                        />
                        <TextField
                            id="outlined-basic"
                            label="Суип"
                            variant="outlined"
                            value={paySuip}
                            style={{
                                width: '100%',
                                marginBottom: 12,
                            }}
                            onChange={(event): any => changePaySuip(event?.target.value)}
                        />
                        <TextField
                            id="outlined-basic"
                            label="4 цифры получателя"
                            variant="outlined"
                            value={payResBankNum}
                            style={{
                                width: '100%',
                                marginBottom: 12,
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
                    paddingTop: '28px',

                    '.css-i9fmh8-MuiBackdrop-root-MuiModal-backdrop': {
                        backgroundColor: 'rgba(0, 0, 0, 0)',
                    },
                }}
            >
                <Slide direction="left" in={isSuccessPayModalOpen} mountOnEnter unmountOnExit>

                    <Box
                        sx={{
                            display: 'flex',
                            backgroundImage: 'url("/images/bgs/pay-success-bg.svg")',
                            backgroundSize: 'cover',
                            bgcolor: 'background.paper',
                            p: 8,

                            width: (pageWidth === 363) ? `calc(${pageWidth}px + 62px)` : pageWidth,
                            height: (pageWidth === 363) ? '100%' : pageHeight,
                            transform: `scale(${scale})`,
                            margin: '0 auto',
                            alignSelf: 'center',

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
                                position: 'relative',
                            }}

                        >
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'center',

                                }}
                            >
                                <div style={gradientStyle1}></div>
                                <div style={gradientStyle2}></div>
                            </div>
                            <div
                                style={{
                                    marginTop: -40,
                                    position: 'absolute',
                                    bottom: 12,
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
                                    Комиссия {payCommission} ₽
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
                                            width: 130,
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
                                            width: 130,
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
                open={isCheckModalOpen}
                onClose={handleCheckModal}
                closeAfterTransition
                slotProps={{
                    backdrop: {
                        timeout: 50,
                    },
                }}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    paddingTop: '28px',
                    '.css-i9fmh8-MuiBackdrop-root-MuiModal-backdrop': {
                        backgroundColor: 'rgba(0, 0, 0, 0)',
                    },
                }}
            >
                <Slide direction="left" in={isCheckModalOpen} mountOnEnter unmountOnExit>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignContent: 'center',

                            backgroundColor: '#1E1E1E',
                            bgcolor: '#0E0E0E',

                            width: (pageWidth === 363) ? `calc(${pageWidth}px + 62px)` : pageWidth,
                            height: (pageWidth === 363) ? '100%' : pageHeight,
                            transform: `scale(${scale})`,
                            margin: '0 auto',
                            alignSelf: 'center',

                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                height: 56,
                                width: (pageWidth === 363) ? `calc(${pageWidth}px + 62px)` : pageWidth,
                                paddingTop: 12,
                            }}
                        >
                            <a
                                onClick={goToHistory}
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
                                Перевод выполнен
                            </p>
                        </div>
                        <div
                            style={{
                                alignSelf: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                textAlign: 'center',
                                height: '100%',
                                borderRadius: 16,
                                marginTop: 120,


                            }}

                        >
                            <Image
                                src="/images/bgs/transcircle.svg"
                                width={140}
                                height={140}
                                alt=''
                                style={{
                                    marginBottom: 20,
                                    alignSelf: 'center',
                                }}
                            />
                            <h3
                                style={{
                                    fontSize: 28,
                                    marginBottom: 100,
                                }}
                            >
                                {paySum} ₽
                            </h3>
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    width: '100%',
                                    marginBottom: -12,
                                }}
                            >
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        width: 172,
                                        height: '81%',
                                        marginLeft: 32,
                                        marginBottom: 18,

                                        backgroundColor: '#1E1E1E',
                                        borderRadius: 12,
                                        padding: 12,
                                        boxShadow: '-4px 4px 8px rgba(0, 0, 0, 0.2)',
                                    }}
                                >
                                    <Image
                                        src="/images/history/repeat.svg"
                                        width={46}
                                        height={30}
                                        alt=''
                                        style={{
                                            height: '100%',
                                        }}
                                    />
                                    <p
                                        style={{
                                            fontSize: 16,
                                            textAlign: 'left',
                                            marginLeft: 4,
                                        }}
                                    >
                                        Повторить перевод
                                    </p>
                                </div>
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        width: 172,
                                        marginRight: 32,
                                        marginLeft: 18,
                                        marginBottom: 18,
                                        height: '81%',
                                        backgroundColor: '#1E1E1E',
                                        borderRadius: 12,
                                        padding: 12,
                                        boxShadow: '-4px 4px 8px rgba(0, 0, 0, 0.2)',

                                    }}
                                >
                                    <Image
                                        src="/images/payment/pCheck.svg"
                                        width={32}
                                        height={27}
                                        alt=''
                                        style={{
                                            height: '100%',
                                        }}
                                    />
                                    <a
                                        style={{
                                            cursor: 'pointer'
                                        }}
                                        onClick={handleOpenCheckLang}
                                    >
                                        <p
                                            style={{fontSize: 16, textAlign: 'left', marginLeft: 16}}
                                        >
                                            Сохранить чек
                                        </p>
                                    </a>
                                </div>
                                <Menu
                                    open={isCheckLangOpen}
                                    onClose={handleOpenCheckLang}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'center',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'center',
                                    }}
                                    sx={{
                                        width: (pageWidth === 363) ? `calc(${pageWidth}px + 62px)` : pageWidth,
                                    }}
                                    PaperProps={{ sx: {
                                            boxShadow: 12,
                                            borderTopLeftRadius: 20,
                                            borderTopRightRadius: 20,
                                            backgroundColor: '#1E1E1E',
                                            color: 'white',
                                            marginBottom: -20,
                                            width: (pageWidth === 363) ? `calc(${pageWidth}px + 62px)` : pageWidth,

                                        } }}
                                >
                                    <div
                                        style={{
                                            height: 4,
                                            width: 32,
                                            borderRadius: 4,
                                            backgroundColor: 'rgb(30, 30, 30)',
                                            alignSelf: 'center',
                                            margin: '0 auto',
                                        }} />
                                    <h3
                                        style={{
                                            margin: 16
                                        }}
                                    >Сохранить чек</h3>
                                    <MenuItem
                                        sx={{
                                            width: (pageWidth === 363) ? pageWidth : pageWidth,
                                            borderBottom: '1px solid rgb(30, 30, 30)',
                                            height: 48, // Высота кнопки
                                        }}
                                        onClick={handleOpenCheck}
                                    >
                                        Русский
                                    </MenuItem>
                                    <MenuItem
                                        sx={{
                                            width: (pageWidth === 363) ? pageWidth : pageWidth,
                                            height: 48, // Высота кнопки
                                        }}
                                        onClick={handleOpenCheck}

                                    >
                                        Английский
                                    </MenuItem>
                                </Menu>
                            </div>
                        </div>
                        <div
                            style={{
                                height: 460,
                                backgroundColor: '#121212',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                            }}
                        >
                            <div
                                style={{
                                    backgroundColor: '#121212',
                                    padding: '8px 28px',
                                }}
                            >
                                <div
                                    style={{
                                        height: 4,
                                        width: 32,
                                        borderRadius: 4,
                                        backgroundColor: 'rgb(30, 30, 30)',
                                        alignSelf: 'center',
                                        margin: '0 auto',
                                }}
                                />
                                <p style={{fontWeight: 400, fontSize: 16, marginBottom: 8, paddingTop: 36}}>
                                    Перевод зачислится в течение нескольких минут
                                </p>
                                <p style={{fontWeight: 300, fontSize: 14, paddingBottom: 12}} className='pGrey'>
                                    В редких случаях срок зачисления увеличивается до нескольких дней
                                </p>
                            </div>
                            <div
                                style={{
                                    borderTop: '8px solid #0E0E0E',
                                    padding: '24px 28px',
                                }}
                            >
                                <h3>
                                    Подробности
                                </h3>
                                <p
                                    className='pGrey'
                                    style={{
                                        marginTop: 20,
                                        marginBottom: 8,
                                        fontSize: 14,
                                    }}
                                >
                                    Куда
                                </p>
                                <div style={{display: 'flex', flexDirection: 'row'}}>
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            margin: '0 4px'
                                        }}
                                    >
                                        <Image
                                            src="/images/lil-dot.svg"
                                            width={4}
                                            height={4}
                                            alt=''

                                        />
                                        <Image
                                            src="/images/lil-dot.svg"
                                            width={4}
                                            height={4}
                                            alt=''
                                        />
                                    </div>
                                    <p style={{ marginLeft: 4 }}>
                                        {payResBankNum}

                                    </p>
                                </div>
                                <p
                                    className='pGrey'
                                    style={{
                                        fontSize: 14,
                                        marginTop: 8,
                                    }}
                                >
                                    {paySenderBankName}
                                </p>
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
                    paddingTop: '28px',
                    '.css-i9fmh8-MuiBackdrop-root-MuiModal-backdrop': {
                        backgroundColor: 'rgba(0, 0, 0, 0)',
                    },
                }}
            >
                <Slide direction="left" in={isCheckOpen} mountOnEnter unmountOnExit>
                    <Box
                        sx={{
                            width: (pageWidth === 363) ? `calc(${pageWidth}px + 62px)` : pageWidth,

                            height: (pageWidth === 363) ? '100%' : pageHeight,
                            transform: `scale(${scale})`,
                            margin: '0 auto',
                            alignSelf: 'center',

                        }}
                    >

                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                height: 56,
                                backgroundColor: '#1E1E1E',
                                width: (pageWidth === 363) ? `calc(${pageWidth}px + 62px)` : pageWidth,
                                paddingTop:8,
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
                            {
                                isCheckLoaded ?
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        padding: '24px 20px',
                                        width: '100%',
                                        backgroundColor: '#ffffff',
                                        borderRadius: 5,
                                        color: '#000000',
                                        paddingBottom: 0,
                                    }}
                                >
                                    <div
                                        style={{
                                            borderBottom: '1px dashed #707070',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            paddingBottom: 8,
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
                                        {
                                            payMethod ?
                                                <p
                                                    className='pGrey'
                                                    style={{
                                                        fontSize: 14,
                                                    }}
                                                >
                                                    Перевод по номеру карты в другой банк
                                                </p> :
                                                <p
                                                    className='pGrey'
                                                    style={{
                                                        fontSize: 14,
                                                    }}
                                                >
                                                    Чек по операции
                                                </p>
                                        }
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
                                        {
                                            payMethod ?
                                                <div>
                                                    <p
                                                        className='pGrey'
                                                        style={{
                                                            marginTop: 20,
                                                            fontSize: 14,
                                                        }}
                                                    >
                                                        КУДА
                                                    </p>
                                                    <p>
                                                        **** {payResBankNum}
                                                    </p>
                                                    <p
                                                        className='pGrey'
                                                        style={{
                                                            fontSize: 14,
                                                            marginTop: 12,
                                                        }}
                                                    >
                                                        В БАНК
                                                    </p>
                                                    <p>
                                                        {paySenderBankName}
                                                    </p>
                                                    <p
                                                        className='pGrey'
                                                        style={{
                                                            fontSize: 14,
                                                            marginTop: 12,
                                                        }}
                                                    >
                                                        СТРАНА
                                                    </p>
                                                    <p>
                                                        РОССИЯ
                                                    </p>
                                                    <p
                                                        className='pGrey'
                                                        style={{
                                                            fontSize: 14,
                                                            marginTop: 12,
                                                        }}
                                                    >
                                                        СКОЛЬКО
                                                    </p>
                                                    <p>
                                                        {paySum} ₽
                                                    </p>
                                                    <p
                                                        className='pGrey'
                                                        style={{
                                                            fontSize: 14,
                                                            marginTop: 12,
                                                        }}
                                                    >
                                                        Комиссия
                                                    </p>
                                                    <p>
                                                        {payCommission},00 ₽
                                                    </p>
                                                    <p
                                                        className='pGrey'
                                                        style={{
                                                            fontSize: 14,
                                                            marginTop: 12,
                                                        }}
                                                    >
                                                        СПИСАНО
                                                    </p>
                                                    <p>
                                                        {paySum} ₽
                                                    </p>
                                                    <p
                                                        className='pGrey'
                                                        style={{
                                                            marginTop: 12,
                                                            fontSize: 14,
                                                        }}
                                                    >
                                                        ОТ КОГО
                                                    </p>
                                                    <p>
                                                        {paySenderName}
                                                    </p>
                                                    <p
                                                        className='pGrey'
                                                        style={{
                                                            fontSize: 14,
                                                            marginTop: 12,
                                                        }}
                                                    >
                                                        ОТКУДА
                                                    </p>
                                                    <p>
                                                        **** {paySenderBankNum}
                                                    </p>

                                                    <p
                                                        className='pGrey'
                                                        style={{
                                                            marginTop: 12,
                                                            fontSize: 14,
                                                        }}
                                                    >
                                                        СУИП
                                                    </p>
                                                    <p>
                                                        {paySuip}
                                                    </p>
                                                </div> :
                                                <div>
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
                                                        **** {payResBankNum}
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
                                                        **** {paySenderBankNum}
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
                                                        {payCommission},00 ₽
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
                                        }
                                    </div>
                                </div> :
                                    <div>
                                        <CircularProgress
                                            color="success"
                                            sx={{
                                                position: 'absolute',
                                                top: '45%',
                                                left: '50%',
                                            }}
                                        />
                                    </div>
                            }

                            <a
                                style={{
                                    backgroundColor: !isCheckLoaded ? '#1E1E1E' : '#148F2A',
                                    marginBottom: 56,
                                    marginTop: !isCheckLoaded ? '652px' : 8,
                                    borderRadius: 12,
                                    height: 48,
                                    width: '100%',
                                    textAlign: 'center',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    color: !isCheckLoaded ? '#5F5F5F' : '#ffffff',
                                }}
                                onClick={handleOpenCheck}
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
