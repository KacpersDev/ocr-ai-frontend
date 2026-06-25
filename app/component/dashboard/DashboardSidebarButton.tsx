import { FC } from "react";
import { IconType } from "react-icons"

interface SidebarButton {
    name: string;
    className: string;
    icon: IconType;
}

const DashboardSidebarButton: FC<SidebarButton> = (props) => {

    const {name, className, icon: Icon} = props;

    return (
        <div className="flex text-[14px] h-[35px] p-[7px] space-x-[15px] hover:cursor-pointer hover:bg-dashboard_sidebar_hover">
            <Icon size={18} className="mt-[1px]"/>
            <button className={"hover:cursor-pointer" + className}>{name}</button>
        </div>
    )
}

export default DashboardSidebarButton;