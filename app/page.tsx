'use client'

import Image from "next/image";
import BottomNav from "@/app/ui/BottomNav";
import * as React from "react";
import Box from "@mui/material/Box";
import Main from "@/app/components/Main";
import Capital from "@/app/components/Capital";
import Payments from "@/app/components/Payments";
import History from "@/app/components/History";
import {useEffect, useState} from "react";
import Controls from "@/app/components/Controls";

export default function Home() {
    const [currentPage, setCurrentPage]: any = useState(0);
    const [isControlsOpen, setIsControlsOpen]: any = useState(1);

    const [balance, setBalance]: any = useState('4 062,00');
    const [expenses, setExpenses]: any = useState('72 048');

    const [scale, setScale]: any = useState(1);
    const pageWidth = 363
    const pageHeight = 807

    const onChangePage: any = (newPage: any) => {
        setCurrentPage(newPage)
    }

    const changeBalance: any = (newBalance: any) => {
        setBalance(newBalance);
    };
    const changeExpenses: any = (newExpenses: any) => {
        setExpenses(newExpenses);
    };

    useEffect(() => {
        const updateScale = () => {
            const screenWidth = window.innerWidth;
            const screenHeight = window.innerHeight;
            const scaleX = screenWidth / pageWidth;
            const scaleY = screenHeight / pageHeight;

            // Выбираем наименьший коэффициент масштабирования, чтобы компонент поместился на экране
            const newScale = Math.min(scaleX, scaleY);
            setScale(newScale);
        };

        updateScale(); // Вызываем функцию при монтировании компонента

        window.addEventListener('resize', updateScale); // Обновляем масштаб при изменении размера окна

        return () => window.removeEventListener('resize', updateScale); // Очищаем обработчик
    }, []);

    const renderPage: any = () => {
        switch (currentPage) {
            case 0:
                return <Main balance={balance} expenses={expenses} />; // Возвращаем компонент
            case 1:
                return <Capital />;
            case 2:
                return <div>Assistant</div>;
            case 3:
                return <Payments />;
            case 4:
                return <History />;
            default:
                return <Main />;
        }
    };

    return (
        <Box
            sx={{
                margin: '0 auto',
                alignSelf: 'center',
            }}
        >
            <Controls
                isOpen={isControlsOpen}
                balance={balance}
                changeBalance={changeBalance}
                expenses={expenses}
                changeExpenses={changeExpenses}
            />

            <div
                style={{
                    backgroundImage: 'url("/images/bgs/bg1.svg")',
                    backgroundSize: 'cover',
                    width: pageWidth,
                    height: pageHeight,
                    overflow: 'hidden',
                    transform: `scale(${scale})`,
                }}
            >

                <BottomNav
                    currentPage={currentPage}
                    onChangePage={onChangePage}
                    pageWidth={pageWidth}
                >
                    <div>{renderPage()}</div>
                </BottomNav>
            </div>
        </Box>

    );
}
