"use client";
import DashboardSidebar from "../component/dashboard/DashboardSidebar"
import DashboardPage from "../component/dashboard/pages/DashboardPage"
import DashboardLogout from "../component/dashboard/pages/DashboardLogout";
import DashboardOcr from "../component/dashboard/pages/DashboardOcr";
import DashboardSchemaCreate from "../component/dashboard/pages/DashboardSchemaCreate";

import { useState } from "react"
import DashboardSchemas from "../component/dashboard/pages/DashboardSchemas";

export default function Home() {

    const [page, setPage] = useState("dashboard");
    const [schemas, setSchemas] = useState([]);

    return (
        <div className="flex w-screen">
            <DashboardSidebar setPage={setPage} page={page}/>
            <div className="flex-1">
                {page == "dashboard" ? <div className="ml-[-90px]"><DashboardPage /></div> 
                : page === "logout" ? <DashboardLogout/> 
                : page === 'ocr' ? <div className="ml-[-90px]"><DashboardOcr schemas={schemas}/></div> 
                : page === 'schemas' ? <div className="ml-[-90px]"><DashboardSchemas setPage={setPage}/></div>
                : page === 'schema_create' ? <div className=""><DashboardSchemaCreate setPage={setPage}/></div> : <></>}
            </div>
        </div>
    )    
}