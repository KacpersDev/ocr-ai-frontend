import { FC } from "react";

interface Schema {
    title: string;
    description: string;
}

const DashboardSchema: FC<Schema> = (props) => {

    const { title, description } = props;

    return (
        <div className="w-[500px] h-[75px] rounded-lg shadow-lg rounded p-[15px] hover:cursor-pointer hover:opacity-75">
            <p className="text-[17px] font-bold">{title}</p>
            <p className="text-[15px]">{description}</p>
        </div> 
    )
}

export default DashboardSchema;