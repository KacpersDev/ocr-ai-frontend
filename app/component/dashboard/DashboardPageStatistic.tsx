import { FC } from "react";
import { IconType } from "react-icons";

interface Statistic {
    name: string    
    count: number;
    icon: IconType;
}

const DashboardPageStatistic: FC<Statistic> = (props) => {

    const { name, count, icon: Icon } = props;

    return (
        <div className="grid w-[300px] h-[150px] shadow-xl">
            <Icon size={32} className="ml-auto mr-auto mt-[40px]"/>
            <p className="text-center font-bold text-[16px] mb-[-20px]">{count}</p>
            <p className="text-center text-[14px]">{name}</p>
        </div>
    )
}

export default DashboardPageStatistic;