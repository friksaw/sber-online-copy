'use client'

import * as React from "react";
import HistoryHeader from "@/app/ui/HistoryHeader";
import HistoryFilters from "@/app/ui/HistoryFilters";
import PaymentsHistory from "@/app/ui/PaymentsHistory";
import Paper from "@mui/material/Paper";

export default function History({ pageHeight, handleControl, paymentsYesterday, sumYesterday, paymentsToday, sumToday, depositsToday, handleOpenCheck, isPageLoaded }: any) {
    return (
        <Paper className='scrollHistory' style={{maxHeight: pageHeight, overflow: 'auto', overflowX: 'hidden', backgroundColor: 'transparent', color: 'white'}}>
            <HistoryHeader handleControl={handleControl} sumToday={sumToday} depositsToday={depositsToday} isPageLoaded={isPageLoaded}/>
            <HistoryFilters />
            <PaymentsHistory
                isPageLoaded={isPageLoaded}
                paymentsYesterday={paymentsYesterday}
                sumYesterday={sumYesterday}
                paymentsToday={paymentsToday}
                sumToday={sumToday}
                depositsToday={depositsToday}
                handleOpenCheck={handleOpenCheck}
            />
        </Paper>
    );
}