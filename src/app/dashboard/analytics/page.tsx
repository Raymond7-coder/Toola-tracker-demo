import DepartmentPerformaceChart from "@/_components/ui/DepartmentPerformanceChat";
import MaintenanceChart from "@/_components/ui/MaintenanceChart";
import ProductLineSummary from "@/_components/ui/ProductLineSummary";
import SubUnit from "@/_components/ui/SubUnit";
import UtilizationChart from "@/_components/ui/UtilizationChart";
import { FaCircle, FaSearch } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";

const AnalyticsPage = () => {
    return ( 
        <div className="flex flex-col gap-y-3 max-sm:my-12">
            <div className="flex items-center justify-between flex-wrap gap-y-1">
                <h1 className="text-base xsm:text-lg md:text-xl 2xl:text-2xl font-bold">Analytics</h1>
                <form action="" className="text-xs 2xl:text-13 font-medium px-2 py-1.5 2xl:py-2 border border-gray-200 rounded-sm bg-white w-80 2xl:w-100 flex gap-x-2 items-center">
                    <FaSearch className="text-gray-600"/> 
                    <input type="search" name="" id="" placeholder="Search Here..." className="outline-none border-0 w-full"/>
                </form>
            </div>
            <ProductLineSummary/>
            
            <div className="bg-white shadow-sm rounded-sm px-3 pb-3">
                <SubUnit/>
            </div>

            <h1 className="text-lg 2xl:text-xl font-semibold flex gap-x-1 items-center mt-5"><FaArrowTrendUp/>Trend and Analytics Chart</h1>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-3">
                <div className="bg-white shadow-sm rounded-sm p-1 flex flex-col gap-y-2">
                    <div className="p-2">
                        <h1 className="text-sm xsm:text-base 2xl:text-xl font-semibold">Monthly Tool Utilization Trend</h1>
                        <p className="text-11 2xl:text-13 text-gray-600 2xl:text-12">Chart showind tool utilization per month this year</p>
                    </div>
                    <UtilizationChart/>
                    <div className="px-3 -mt-4 flex flex-col gap-y-2 mb-2">
                        <p className="flex gap-x-1 items-center text-xs 2xl:text-13 font-medium">
                            <FaCircle className="text-green-800"/>
                            Available
                        </p>
                        <p className="flex gap-x-1 items-center text-xs 2xl:text-13 font-medium">
                            <FaCircle className="text-red-400"/>
                            In Use
                        </p>
                    </div>
                </div>
                <div className="bg-white shadow-sm rounded-sm p-1 flex flex-col gap-y-2">
                    <div className="p-2">
                        <h1 className="text-sm xsm:text-base 2xl:text-xl font-semibold">Maintenance Incidents</h1>
                        <p className="text-11 2xl:text-13 text-gray-600 2xl:text-12">A chart showing the number of maintenance incidents had per month</p>
                    </div>
                    <MaintenanceChart/>
                    <div className="px-3 -mt-4 flex flex-col gap-y-2 mb-2">
                        <p className="flex gap-x-1 items-center text-xs 2xl:text-13 font-medium">
                            <FaCircle className="text-green-800"/>
                            Maintenance
                        </p>
                        <p className="flex gap-x-1 items-center text-xs 2xl:text-13 font-medium">
                            <FaCircle className="text-red-400"/>
                            Damaged
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-white shadow-sm rounded-sm p-1 flex flex-col gap-y-2">
                    <div className="p-3">
                    <h1 className="text-sm xsm:text-base 2xl:text-xl font-semibold">Department Performance Comparison</h1>
                    <p className="text-11 2xl:text-13 text-gray-600 2xl:text-12">Thic chart compares departments, and identifies ow each department handles their tools</p>
                </div>
                <DepartmentPerformaceChart/>
                <div className="px-3 -mt-4 flex flex-wrap gap-x-10 gap-y-2 mb-2">
                    <p className="flex gap-x-1 items-center text-xs 2xl:text-13 font-medium">
                        <FaCircle className="text-green-800"/>
                        Available
                    </p>
                    <p className="flex gap-x-1 items-center text-xs 2xl:text-13 font-medium">
                        <FaCircle className="text-cyan-600"/>
                        In Use
                    </p>
                    <p className="flex gap-x-1 items-center text-xs 2xl:text-13 font-medium">
                        <FaCircle className="text-red-400"/>
                        Damaged
                    </p>
                    <p className="flex gap-x-1 items-center text-xs 2xl:text-13 font-medium">
                        <FaCircle className="text-amber-400"/>
                        Under Maintenance
                    </p>
                    <p className="flex gap-x-1 items-center text-xs 2xl:text-13 font-medium">
                        <FaCircle className="text-orange-400"/>
                        Missing
                    </p>
                </div>
            </div>
            
        </div>
     );
}
 
export default AnalyticsPage;