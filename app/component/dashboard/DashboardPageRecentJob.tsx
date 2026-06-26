import { FC } from "react";
import { MdWork } from "react-icons/md";

interface RecentJob {
    title: string;
    description: string;
}

const DashboardPageRecentJob: FC<RecentJob> = (props) => {

    const { title, description } = props; 

    return (
        <div className="flex">
            <MdWork />
            <div>
                <p>{title}</p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default DashboardPageRecentJob;