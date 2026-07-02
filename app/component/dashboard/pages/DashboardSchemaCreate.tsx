import { Dispatch, FC, SubmitEvent } from "react";

interface SchemaCreate {
    setPage: Dispatch<string>
}

const DashboardSchemaCreate: FC<SchemaCreate> = (props) => {

    const { setPage } = props;

    const handleSchemaCreation = (e: SubmitEvent) => {
        e.preventDefault();
        setPage("schemas");
    } 

    return (
        <div className="grid justify-center mt-[50px]">
            <form className="grid space-y-[15px]" onSubmit={handleSchemaCreation}>
                <input className="p-[10px] rounded-lg shadow-xl w-[300px] h-[40px] text-[15px]" type="text" placeholder="Schema name"/>
                <input className="p-[10px] rounded-lg shadow-xl w-[300px] h-[40px] text-[15px]" type="text" placeholder="Schema description"/>
                <input className="shadow-xl font-bold text-[14px] w-[300px] h-[40px] hover:cursor-pointer hover:opacity-75" type="submit" value={"Create schema"}/>
            </form>
        </div>
    )
} 

export default DashboardSchemaCreate;