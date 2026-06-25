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
        <div className="w-[300px] h-[300px] shadow-lg shadow-red">
            <Icon/>
            <p>{count}</p>
            <p>{name}</p>
        </div>
    )
}

export default DashboardPageStatistic;