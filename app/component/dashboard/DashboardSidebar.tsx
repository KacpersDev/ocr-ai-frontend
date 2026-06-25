import DashboardSidebarButton from "./DashboardSidebarButton";

import { MdDashboard } from "react-icons/md";

const DashboardSidebar = () => {
    return (
        <div className="w-[250px] h-screen"> 
            <p>Hey, Kacper</p>
            <div className="mt-[20px]">
                <DashboardSidebarButton icon={MdDashboard} name="Dashboard" className=""/>
                <DashboardSidebarButton icon={MdDashboard} name="Dashboard" className=""/>
                <DashboardSidebarButton icon={MdDashboard} name="Dashboard" className=""/>
                <DashboardSidebarButton icon={MdDashboard} name="Dashboard" className=""/>
            </div>
        </div>
    )
}

export default DashboardSidebar;