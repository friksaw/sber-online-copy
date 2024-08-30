'use client'

import Image from "next/image";
import BottomNav from "@/app/ui/BottomNav";
import * as React from "react";
import Box from "@mui/material/Box";
import Main from "@/app/components/Main";
import Capital from "@/app/components/Capital";
import Payments from "@/app/components/Payments";
import History from "@/app/components/History";

export default function Home() {
    const [currentPage, setCurrentPage]: any = React.useState(0);
    const ref: any = React.useRef(null);
    const [messages, setMessages]: any = React.useState(0);
    const onChangePage = (newPage) => {
        setCurrentPage(newPage)
    }

    const renderPage: any = () => {
        switch (currentPage) {
            case 0:
                return <Main />; // Возвращаем компонент
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
            backgroundImage: 'url("/images/bg1.svg")',
            backgroundSize: 'cover',
            maxWidth: 420,
            width: '100%',
            height: 'calc(100vh - 55px)',
            overflow: 'hidden'
        }}
      >

          <BottomNav
              currentPage={currentPage}
              onChangePage={onChangePage}

          >
              <div>{renderPage()}</div>
          </BottomNav>
      </Box>
    );
}
