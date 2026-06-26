import { FC } from "react";
import DashboardPageRecentJob from "./DashboardPageRecentJob";
import { MdWork } from "react-icons/md";

interface RecentJobs {

}

const DashboardPageRecentJobs: FC<RecentJobs>= (props) => {
    return(
        <div className="grid justify-center mr-[80px] mt-[50px]">
            <div className="flex space-x-[10px]">
                <MdWork size={24} className="mt-[6px]"/>
                <p className="text-[25px] font-bold">Recent Jobs</p>
            </div>
            <div className="mt-[10px]">
                <DashboardPageRecentJob title="Invoice OCR" description="OCR job was to extract all information found on the invoice and extract as JSON"/>
                <DashboardPageRecentJob title="Invoice OCR" description="OCR job was to extract all information found on the invoice and extract as JSON"/>
                <DashboardPageRecentJob title="Invoice OCR" description="OCR job was to extract all information found on the invoice and extract as JSON"/>
                <DashboardPageRecentJob title="Invoice OCR" description="OCR job was to extract all information found on the invoice and extract as JSON"/>
                <DashboardPageRecentJob title="Invoice OCR" description="OCR job was to extract all information found on the invoice and extract as JSON"/>
            </div>
        </div>
    )
}

export default DashboardPageRecentJobs;