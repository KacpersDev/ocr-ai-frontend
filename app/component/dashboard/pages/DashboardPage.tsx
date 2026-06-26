import DashboardPageStatistic from "../DashboardPageStatistic";
import DashboardPageRecentJobs from "../DashboardPageRecentJobs";

import { MdDocumentScanner, MdSchema, MdWork } from "react-icons/md";

const DashboardPage = () => {
    return (
        <div>
            <div className="flex justify-center ml-[-90px] space-x-[80px] mt-[60px]">
                <DashboardPageStatistic name="Documents" icon={MdDocumentScanner} count={100}/>
                <DashboardPageStatistic name="Schemas" icon={MdSchema} count={100}/>
                <DashboardPageStatistic name="Jobs" icon={MdWork} count={100}/>
            </div>
            <div>
                <DashboardPageRecentJobs/>
            </div>
        </div>
    )
}

export default DashboardPage;