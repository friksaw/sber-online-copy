'use client'

import * as React from "react";
import HistoryHeader from "@/app/ui/HistoryHeader";
import HistoryFilters from "@/app/ui/HistoryFilters";
import PaymentsHistory from "@/app/ui/PaymentsHistory";

export default function History() {
    return (
        <div>
            <HistoryHeader />
            <HistoryFilters />
            <PaymentsHistory />
        </div>
    );
}