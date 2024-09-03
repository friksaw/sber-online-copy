'use client'

import * as React from "react";
import HistoryHeader from "@/app/ui/HistoryHeader";
import HistoryFilters from "@/app/ui/HistoryFilters";
import PaymentsHistory from "@/app/ui/PaymentsHistory";

export default function History({ handleControl, paymentsYesterday, sumYesterday, paymentsToday, sumToday, depositsToday, handleOpenCheck, isPageLoaded }: any) {
    return (
        <div>
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
        </div>
    );
}