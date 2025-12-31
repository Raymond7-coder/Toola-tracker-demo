import inventory from "@/assets/images/inventory.png"
import inStock from "@/assets/images/in-stock.png"
import issue from "@/assets/images/issue.png"
import mechanic from "@/assets/images/mechanic.png"
import inUse from "@/assets/images/tools.png"
import Image from "next/image"
import { MdInventory } from "react-icons/md"
import { FaRegClock, FaTools } from "react-icons/fa"
import { IoMdCheckmarkCircleOutline } from "react-icons/io"
import { IoSettingsOutline, IoWarningOutline } from "react-icons/io5"


const OverviewStatGrid = () => {
    return ( 
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2">
                <div className="bg-white shadow-sm border-gray-200 p-3 rounded-sm flex items-center gap-x-4">
                    <div className="p-1.5 sm:p-2 rounded-sm text-lg sm:text-xl 2xl:text-2xl text-green-600 bg-green-100">
                        <MdInventory />
                    </div>
                    <div className="flex flex-col ">
                        <small className="text-11 sm:text-xs 2xl:text-13 font-medium text-gray-600">Total Tools</small>
                        <h1 className="text-lg sm:text-xl 2xl:text-2xl font-semibold max-2xl:-mt-0.5">3000</h1>
                    </div>
                </div>
                <div className="bg-white shadow-sm border-gray-200 p-3 rounded-sm flex items-center gap-x-4">
                    <div className="p-1.5 sm:p-2 rounded-sm text-lg sm:text-xl 2xl:text-2xl text-cyan-600 bg-blue-50">
                        <FaTools />
                    </div>
                    <div className="flex flex-col ">
                        <small className="text-11 sm:text-xs 2xl:text-13 font-medium text-gray-600">Tools In Field</small>
                        <h1 className=" text-lg sm:text-xl 2xl:text-2xl font-semibold max-2xl:-mt-0.5">1200</h1>
                    </div>
                </div>
                <div className="bg-white shadow-sm border-gray-200 p-3 rounded-sm flex items-center gap-x-4">
                    <div className="p-1.5 sm:p-2 rounded-sm text-lg sm:text-xl 2xl:text-2xl text-green-500 bg-green-100">
                        <IoMdCheckmarkCircleOutline />
                    </div>
                    <div className="flex flex-col ">
                        <small className="text-11 sm:text-xs 2xl:text-13 font-medium text-gray-600">Available</small>
                        <h1 className=" text-lg sm:text-xl 2xl:text-2xl font-semibold max-2xl:-mt-0.5">1345</h1>
                    </div>
                </div>
                <div className="bg-white shadow-sm border-gray-200 p-3 rounded-sm flex items-center gap-x-4">
                    <div className="p-1.5 sm:p-2 rounded-sm text-lg sm:text-xl 2xl:text-2xl text-purple-500 bg-purple-100">
                        <IoSettingsOutline />
                    </div>
                    <div className="flex flex-col ">
                        <small className="text-11 sm:text-xs 2xl:text-13 font-medium text-gray-600">Under Maintenance</small>
                        <h1 className=" text-lg sm:text-xl 2xl:text-2xl font-semibold max-2xl:-mt-0.5">1345</h1>
                    </div>
                </div>
                <div className="bg-white shadow-sm border-gray-200 p-3 rounded-sm flex items-center gap-x-4">
                    <div className="p-1.5 sm:p-2 rounded-sm text-lg sm:text-xl 2xl:text-2xl text-orange-500 bg-orange-100">
                        <IoWarningOutline />
                    </div>
                    <div className="flex flex-col ">
                        <small className="text-11 sm:text-xs 2xl:text-13 font-medium text-gray-600">Damaged Tools</small>
                        <h1 className=" text-lg sm:text-xl 2xl:text-2xl font-semibold max-2xl:-mt-0.5">1345</h1>
                    </div>
                </div>
                <div className="bg-white shadow-sm border-gray-200 p-3 rounded-sm flex items-center gap-x-4">
                    <div className="p-1.5 sm:p-2 rounded-sm text-lg sm:text-xl 2xl:text-2xl text-amber-500 bg-amber-100">
                        <FaRegClock />
                    </div>
                    <div className="flex flex-col ">
                        <small className="text-11 sm:text-xs 2xl:text-13 font-medium text-gray-600">Pending Return</small>
                        <h1 className=" text-lg sm:text-xl 2xl:text-2xl font-semibold max-2xl:-mt-0.5">1345</h1>
                    </div>
                </div>
                <div className="bg-white shadow-sm border-gray-200 p-3 rounded-sm flex items-center gap-x-4">
                    <div className="p-1.5 sm:p-2 rounded-sm text-lg sm:text-xl 2xl:text-2xl text-red-500 bg-red-100">
                        <FaRegClock />
                    </div>
                    <div className="flex flex-col ">
                        <small className="text-11 sm:text-xs 2xl:text-13 font-medium text-gray-600">Not Accounted For</small>
                        <h1 className=" text-lg sm:text-xl 2xl:text-2xl font-semibold max-2xl:-mt-0.5">1345</h1>
                    </div>
                </div>
            </div>
     );
}
 
export default OverviewStatGrid;