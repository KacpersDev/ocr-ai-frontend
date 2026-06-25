import { Dispatch, FC, SetStateAction } from "react";
import DashboardSidebarButton from "./DashboardSidebarButton";

import { MdDashboard, MdImage, MdSchema, MdSettings, MdLogout } from "react-icons/md";

interface Sidebar {
    page: string;
    setPage: Dispatch<string>;
}

const DashboardSidebar: FC<Sidebar> = (props) => {

    const {page, setPage} = props;

    return (
        <div className="w-[250px] h-screen"> 
            <p className="p-[10px]">Hey, <span className="font-bold">Kacper</span></p>
            <div className="mt-[20px]">
                <DashboardSidebarButton icon={MdDashboard} name="Dashboard" className="" route="dashboard" setPage={setPage}/>
                <DashboardSidebarButton icon={MdImage} name="OCR" className="" route="ocr" setPage={setPage}/>
                <DashboardSidebarButton icon={MdSchema} name="Schemas" className="" route="schemas" setPage={setPage}/>
                <DashboardSidebarButton icon={MdSettings} name="Settings" className="" route="settings" setPage={setPage}/>
                <DashboardSidebarButton icon={MdLogout} name="Log out" className="" route="logout" setPage={setPage}/>
            </div>
        </div>
    )
}

export default DashboardSidebar;