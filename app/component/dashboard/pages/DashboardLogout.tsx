import { useEffect } from "react";
import { useRouter } from "next/navigation";

const DashboardLogout = () => {

    const router = useRouter();

    useEffect(() => {
        router.push('/');
    }, []);

    return <div></div>
}

export default DashboardLogout;