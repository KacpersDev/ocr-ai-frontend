import { Dispatch, FC } from "react";
import DashboardSchema from "../DashboardSchema";

interface DashboardSchema {
    setPage: Dispatch<string>;
}

const DashboardSchemas: FC<DashboardSchema> = (props) => {

    const { setPage } = props;

    return (
        <div className="grid justify-center mt-[50px]">
            <div className="flex justify-center space-x-[225px]">
                <p className="text-center font-bold text-[25px] mb">Your schemas</p>
                <button className="text-[14px] hover:cursor-pointer" onClick={() => setPage("schema_create")}>Create schema</button>
            </div>
            <div className="mt-[20px]">
                <DashboardSchema title="Invoice Schema" description="Schema is created to read invoice data from invoices."/>
            </div>
        </div>
    )
}

export default DashboardSchemas;