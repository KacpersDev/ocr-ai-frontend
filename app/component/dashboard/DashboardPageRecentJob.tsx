import { FC } from "react";
import { MdWork } from "react-icons/md";

interface RecentJob {
    title: string;
    description: string;
}

const DashboardPageRecentJob: FC<RecentJob> = (props) => {

    const { title, description } = props; 

    return (
        <div className="flex space-x-[10px] shadow-lg w-[1060px] h-[100px] rounded-xl hover:cursor-pointer hover:opacity-75">
            <div className="p-[15px]">
                <p className="text-[20px] font-bold">{title}</p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default DashboardPageRecentJob;