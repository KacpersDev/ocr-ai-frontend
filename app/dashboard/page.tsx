"use client";
import DashboardSidebar from "../component/dashboard/DashboardSidebar"
import DashboardPage from "../component/dashboard/pages/DashboardPage"

import { useState } from "react"

export default function Home() {

    const [page, setPage] = useState("dashboard");

    return (
        <div className="flex">
            <DashboardSidebar setPage={setPage} page={page}/>
            {page == "dashboard" ? <DashboardPage /> : <></>}
        </div>
    )    
}