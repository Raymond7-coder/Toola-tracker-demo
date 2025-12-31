
import OverviewDonutChart from "@/_components/ui/OverviewDonutCharts";
import OverviewStatGrid from "@/_components/ui/OverviewStatGrid"
import ProductLineSummary from "@/_components/ui/ProductLineSummary";
import SubUnit from "@/_components/ui/SubUnit";
import ToolStatusChart from "@/_components/ui/ToolStatusChart";
import Link from "next/link";
import { FaArrowRight, FaCircle, FaTools } from "react-icons/fa";
import { MdOutlineWarningAmber } from "react-icons/md";

const DashboardPage = () => {
    return ( 
        <div className="flex flex-col gap-y-4 max-sm:my-12">
            <div className="flex justify-between items-center flex-wrap gap-x-3 gap-y-2">
                <h1 className="font-semibold text-base md:text-xl 2xl:text-2xl">Good Morning, Admin</h1>
                <Link
                    href={"dashboard/analytics"}
                    className="bg-green-600 text-11 sm:text-xs text-white px-3 py-1 rounded-sm font-medium hover:bg-green-700 cursor-pointer transition"
                >View Analytics</Link>
            </div>
            <OverviewStatGrid/>
            <div className="flex flex-col lg:flex-row gap-3">
                <div className="w-full lg:w-2/3 bg-white shadow-sm rounded-sm ">
                    <div className="p-3">
                        <h1 className="text-sm xsm:text-base 2xl:text-xl font-semibold">Tools Error</h1>
                        <p className="text-11 2xl:text-13 text-gray-600 2xl:text-12">Statistics of the Missing and Damaged tools over the year</p>
                    </div>
                    <ToolStatusChart/>
                    <div className="px-3 -mt-4 flex flex-col gap-y-2 mb-2">
                        <p className="flex gap-x-1 items-center text-xs 2xl:text-13 font-medium">
                            <FaCircle className="text-green-800"/>
                            Missing
                        </p>
                        <p className="flex gap-x-1 items-center text-xs 2xl:text-13 font-medium">
                            <FaCircle className="text-red-400"/>
                            Damaged
                        </p>
                    </div>
                </div>
                <div className="w-full lg:w-1/3 bg-white shadow-sm rounded-sm pb-4 lg:pb-0">
                    <div className="p-3">
                        <h1 className="text-sm xsm:text-base 2xl:text-xl font-semibold">Tools Utilization</h1>
                        <p className="text-11 text-gray-600 2xl:text-13">Overall tools utilization in the company</p>
                    </div>
                    <OverviewDonutChart/>
                </div>
            </div>
            
            <div className="bg-white shadow-sm px-3 py-2 rounded-sm flex flex-wrap flex-col gap-y-2">
                <div className="flex justify-between items-center flex-wrap max-sm:py-2 2xl:py-2">
                    <h2 className="font-semibold text-sm xsm:text-base 2xl:text-xl">Recent Activity & Notifications</h2>
                    <Link href={"/dashboard/notifications"} className="font-medium text-11 xsm:text-xs 2xl:text-13 underline flex gap-x-1 items-center cursor-pointer hover:text-green-600 transition">View All <FaArrowRight/></Link>
                </div>
                
                <div className="bg-gray-100 p-2 flex flex-col gap-y-3 rounded-sm">
                    
                    <Link href={`/dashboard/tools/fishing/view/31323`} className="bg-white p-2 border border-gray-200 rounded-sm hover:border-green-600 cursor-pointer transition">
                        <div className="flex flex-col gap-y-3">
                            <p className="bg-green-100 rounded-full px-2 py-0.5 text-10 xsm:text-11 font-medium w-fit text-green-700">Notification</p>
                            <div className="flex justify-between gap-y-3 gap-x-5 lg:gap-x-3 flex-wrap lg:flex-nowrap">
                                <div className="flex gap-x-2 items-center">
                                    <div className="p-1.5 sm:p-2 rounded-sm text-lg sm:text-xl text-green-600 bg-green-50">
                                        <FaTools />
                                    </div>
                                    <div className="flex flex-col">
                                        <h3 className="text-xs sm:text-13 2xl:text-sm font-semibold">CUT998333 - Cold Cutting Saw</h3>
                                        <p className="text-11 sm:text-xs 2xl:text-13 text-gray-600"> Wireline - D&E01</p>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-10 xsm:text-11 2xl:text-13 text-gray-600">Comment</p>
                                    <h3 className="text-11 xsm:text-xs 2xl:text-sm font-semibold">Mobilized to Shell Nigeria</h3>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-10 xsm:text-11 2xl:text-13 text-gray-600">Date</p>
                                    <h3 className="text-11 xsm:text-xs 2xl:text-sm font-semibold">{new Date().toDateString()}</h3>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-10 xsm:text-11 2xl:text-13 text-gray-600">Updated By</p>
                                    <h3 className="text-11 xsm:text-xs 2xl:text-sm font-semibold">Samuel Didigu</h3>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-10 xsm:text-11 2xl:text-13 text-gray-600">Status:</p>
                                    <h3 className="text-11 xsm:text-xs 2xl:text-sm font-semibold">In Transit</h3>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <div className="bg-white p-2 border border-gray-200 rounded-sm hover:border-red-600 cursor-pointer">
                        <div className="flex flex-col gap-y-3">
                            <p className="bg-red-100 rounded-full px-2 py-0.5 text-11 font-medium w-fit text-red-700">Overdue Alert</p>
                            <div className="flex justify-between gap-y-3 gap-x-5 lg:gap-x-3 flex-wrap lg:flex-nowrap">
                                <div className="flex gap-x-2 items-center">
                                    <div className="p-1.5 sm:p-2 rounded-sm text-lg sm:text-xl text-red-600 bg-red-50">
                                        <MdOutlineWarningAmber />
                                    </div>
                                    <div className="flex flex-col">
                                        <h3 className="text-xs sm:text-13 2xl:text-sm font-semibold">JAR88234 - Hydraulic Jar</h3>
                                        <p className="text-11 sm:text-xs 2xl:text-13 text-gray-600"> Wireline - D&E01</p>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-10 xsm:text-11 2xl:text-13 text-gray-600">Type</p>
                                    <h3 className="text-11 xsm:text-xs 2xl:text-sm font-semibold">Overdue Return</h3>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-10 xsm:text-11 2xl:text-13 text-gray-600">Duration</p>
                                    <h3 className="text-11 xsm:text-xs 2xl:text-sm font-semibold">3 Days</h3>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-10 xsm:text-11 2xl:text-13 text-gray-600">Expected Return Date</p>
                                    <h3 className="text-11 xsm:text-xs 2xl:text-sm font-semibold">{new Date().toDateString()}</h3>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-10 xsm:text-11 2xl:text-13 text-gray-600">Status:</p>
                                    <h3 className="text-11 xsm:text-xs 2xl:text-sm font-semibold">In Field</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-2 border border-gray-200 rounded-sm hover:border-yellow-600 cursor-pointer">
                        <div className="flex flex-col gap-y-3">
                            <p className="bg-yellow-100 rounded-full px-2 py-0.5 text-11 font-medium w-fit text-yellow-700">Maintenance Alert</p>
                            <div className="flex justify-between gap-y-3 gap-x-5 lg:gap-x-3 flex-wrap lg:flex-nowrap">
                                <div className="flex gap-x-2 items-center">
                                    <div className="p-1.5 sm:p-2 rounded-sm text-lg sm:text-xl text-yellow-600 bg-yellow-50">
                                        <MdOutlineWarningAmber />
                                    </div>
                                    <div className="flex flex-col">
                                        <h3 className="text-xs sm:text-13 2xl:text-sm font-semibold">GYR4412 - Gyro Module</h3>
                                        <p className="text-11 sm:text-xs 2xl:text-13 text-gray-600">Wireline - D&E01</p>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-10 xsm:text-11 2xl:text-13 text-gray-600">Type</p>
                                    <h3 className="text-11 xsm:text-xs 2xl:text-sm font-semibold">Maintenance Due</h3>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-10 xsm:text-11 2xl:text-13 text-gray-600">Due In</p>
                                    <h3 className="text-11 xsm:text-xs 2xl:text-sm font-semibold">3 Days</h3>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-10 xsm:text-11 2xl:text-13 text-gray-600">Updated By:</p>
                                    <h3 className="text-11 xsm:text-xs 2xl:text-sm font-semibold">Samuel Didigu</h3>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-10 xsm:text-11 2xl:text-13 text-gray-600">Updated On:</p>
                                    <h3 className="text-11 xsm:text-xs 2xl:text-sm font-semibold">{new Date().toDateString()}</h3>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-10 xsm:text-11 2xl:text-13 text-gray-600">Status:</p>
                                    <h3 className="text-11 xsm:text-xs 2xl:text-sm font-semibold">Pending</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    <div className="bg-white p-2 border border-gray-200 rounded-sm hover:border-red-600 cursor-pointer">
                        <div className="flex flex-col gap-y-3">
                            <p className="bg-red-100 rounded-full px-2 py-0.5 text-11 font-medium w-fit text-red-700">Damage Alert</p>
                            <div className="flex justify-between gap-y-3 gap-x-5 lg:gap-x-3 flex-wrap lg:flex-nowrap">
                                <div className="flex gap-x-2 items-center">
                                    <div className="p-1.5 sm:p-2 rounded-sm text-lg sm:text-xl text-red-600 bg-red-50">
                                        <MdOutlineWarningAmber />
                                    </div>
                                    <div className="flex flex-col">
                                        <h3 className="text-xs sm:text-13 2xl:text-sm font-semibold">JAR88234 - Hydraulic Jar</h3>
                                        <p className="text-11 sm:text-xs 2xl:text-13 text-gray-600">Wireline - D&E01</p>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-10 xsm:text-11 2xl:text-13 text-gray-600">Severity</p>
                                    <h3 className="text-11 xsm:text-xs 2xl:text-sm font-semibold">High</h3>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-10 xsm:text-11 2xl:text-13 text-gray-600">Comment</p>
                                    <h3 className="text-11 xsm:text-xs 2xl:text-sm font-semibold">Tool Failed during downhole run</h3>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-10 xsm:text-11 2xl:text-13 text-gray-600">Updated By</p>
                                    <h3 className="text-11 xsm:text-xs 2xl:text-sm font-semibold">Samuel Didigu</h3>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-10 xsm:text-11 2xl:text-13 text-gray-600">Updated On</p>
                                    <h3 className="text-11 xsm:text-xs 2xl:text-sm font-semibold">{new Date().toDateString()}</h3>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-10 xsm:text-11 2xl:text-13 text-gray-600">Status:</p>
                                    <h3 className="text-11 xsm:text-xs 2xl:text-sm font-semibold">Out of Service</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
     );
}
 
export default DashboardPage;