'use client'

import * as React from "react";
import HistoryHeader from "@/app/ui/HistoryHeader";
import HistoryFilters from "@/app/ui/HistoryFilters";
import PaymentsHistory from "@/app/ui/PaymentsHistory";

export default function History({ paymentsYesterday, sumYesterday, paymentsToday, sumToday, depositsToday, handleOpenCheck }: any) {
    return (
        <div>
            <HistoryHeader sumToday={sumToday} depositsToday={depositsToday}/>
            <HistoryFilters />
            <PaymentsHistory
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