import { MdOutlineAutoGraph } from "react-icons/md";
import SubUnitCard from "./SubUnitCard";

const SubUnit = () => {
    return ( 
        <div className="flex flex-col gap-y-3 mt-4">
            <h1 className="text-base font-semibold flex gap-x-1 items-center"><MdOutlineAutoGraph/>Sub-Unit Operational Dashboard</h1>
            <div className="grid grid-cols-1 min-[400px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                <SubUnitCard name="Wireline"/>
                <SubUnitCard name="Fishing"/>
                <SubUnitCard name="JAR"/>
                <SubUnitCard name="CTR"/>
                <SubUnitCard name="Sickline"/>
                <SubUnitCard name="DD/LWD"/>
                <SubUnitCard name="Gyro"/>
            </div>
        </div>
    );
}

export default SubUnit;