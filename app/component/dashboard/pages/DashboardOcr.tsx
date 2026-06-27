import OCRSchema from "@/app/models/Schema";
import { FC } from "react";

interface OCR {
    schemas: OCRSchema[]
}

const DashboardOcr: FC<OCR> = (props) => {
    
    const { schemas } = props;
   
    if (schemas.length <= 0) {
        return (
            <div className="grid justify-center ml-auto mr-auto w-[500px] h-[50px] mt-[50px] shadow-lg">
                <p className="bg-red-400 p-[10px] rounded-lg">In order to upload document to OCR. You need to have at least 1 schme created.</p>
            </div>
        )
    } else {
        
    }
}

export default DashboardOcr;