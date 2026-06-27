"use client";
import DashboardSidebar from "../component/dashboard/DashboardSidebar"
import DashboardPage from "../component/dashboard/pages/DashboardPage"
import DashboardLogout from "../component/dashboard/pages/DashboardLogout";

import { useState } from "react"

export default function Home() {

    const [page, setPage] = useState("dashboard");

    return (
        <div className="flex w-screen">
            <DashboardSidebar setPage={setPage} page={page}/>
            {page == "dashboard" ? <div className="flex-1"><DashboardPage /></div> 
            : page === "logout" ? <DashboardLogout/> : <></>}
        </div>
    )    
}