import { FC } from "react";
import DashboardPageRecentJob from "./DashboardPageRecentJob";

interface RecentJobs {

}

const DashboardPageRecentJobs: FC<RecentJobs>= (props) => {
    return(
        <div className="">
            <p>Recent Jobs</p>
            <DashboardPageRecentJob title="..." description="..."/>
        </div>
    )
}

export default DashboardPageRecentJobs;