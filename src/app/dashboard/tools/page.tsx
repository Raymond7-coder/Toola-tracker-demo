import Link from "next/link";
import { FaCircle, FaPlus, FaTools } from "react-icons/fa";

const ToolsPage = () => {
    return ( 
        <div className="flex flex-col gap-y-6">
            <div className="flex justify-between items-center flex-wrap gap-x-3 gap-y-1">
                <div className="">
                    <h1 className="text-lg 2xl:text-2xl font-semibold">Departments</h1>
                    <p className="text-11 text-gray-600 2xl:text-13">Organize your tools by seperating them into departments</p>
                </div>
                <button className="bg-green-600 text-white text-xs 2xl:text-13 font-medium px-3 py-1.5 rounded-sm flex gap-x-1 items-center">
                    <FaPlus/> Add Deprtment
                </button>
            </div>

            <div className="grid grid-cols-3 gap-3">
                <div className="bg-white border border-white hover:border-green-600 cursor-pointer transition shadow-sm rounded-sm p-3 flex flex-col gap-y-6 hover:scale-103">
                    <FaTools className="p-1 text-3xl 2xl:text-4xl bg-green-100 text-green-600"/>
                    
                    <div className="flex gap-y-2">
                        <div className="w-full">
                            <p className="text-11 font-bold text-gray-600 sm:text-13 2xl:text-sm">Total Fishing Tools</p>
                            <div className="flex justify-between items-end w-full">
                                <h1 className="text-xl 2xl:text-3xl font-semibold">4300</h1>
                                <Link href={"/dashboard/tools/fishing"} className="text-11 2xl:text-xs underline font-semibold text-green-600 -mt-1">View Tools</Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center flex-wrap -mt-1">
                        <p className="text-11 text-gray-600 2xl:text-13 flex gap-x-1" >
                            <span className="font-semibold text-black">345</span>
                            damaged
                        </p>
                        <FaCircle className="text-gray-600 h-1"/>
                        <p className="text-11 text-gray-600 2xl:text-13 flex gap-x-1" >
                            <span className="font-semibold text-black">342</span>
                            missing
                        </p>
                        <FaCircle className="text-gray-600 h-1"/>
                        <p className="text-11 text-gray-600 2xl:text-13 flex gap-x-1" >
                            <span className="font-semibold text-black">100</span>
                            In Maintenance
                        </p>
                    </div>
                </div>
                <div className="bg-white border border-white hover:border-green-600 cursor-pointer transition shadow-sm rounded-sm p-3 flex flex-col gap-y-6 hover:scale-103">
                    <FaTools className="p-1 text-3xl 2xl:text-4xl bg-green-100 text-green-600"/>
                    
                    <div className="flex gap-y-2">
                        <div className="w-full">
                            <p className="text-11 font-bold text-gray-600 sm:text-13 2xl:text-sm">Total Wireline Tools</p>
                            <div className="flex justify-between items-end w-full">
                                <h1 className="text-xl 2xl:text-3xl font-semibold">4300</h1>
                                <Link href={"/dashboard/tools/fishing"} className="text-11 2xl:text-xs underline font-semibold text-green-600 -mt-1">View Tools</Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center flex-wrap -mt-1">
                        <p className="text-11 text-gray-600 2xl:text-13 flex gap-x-1" >
                            <span className="font-semibold text-black">345</span>
                            damaged
                        </p>
                        <FaCircle className="text-gray-600 h-1"/>
                        <p className="text-11 text-gray-600 2xl:text-13 flex gap-x-1" >
                            <span className="font-semibold text-black">342</span>
                            missing
                        </p>
                        <FaCircle className="text-gray-600 h-1"/>
                        <p className="text-11 text-gray-600 2xl:text-13 flex gap-x-1" >
                            <span className="font-semibold text-black">100</span>
                            In Maintenance
                        </p>
                    </div>
                </div>
                <div className="bg-white border border-white hover:border-green-600 cursor-pointer transition shadow-sm rounded-sm p-3 flex flex-col gap-y-6 hover:scale-103">
                    <FaTools className="p-1 text-3xl 2xl:text-4xl bg-green-100 text-green-600"/>
                    
                    <div className="flex gap-y-2">
                        <div className="w-full">
                            <p className="text-11 font-bold text-gray-600 sm:text-13 2xl:text-sm ">Total Gyro Tools</p>
                            <div className="flex justify-between items-end w-full">
                                <h1 className="text-xl 2xl:text-3xl font-semibold">4300</h1>
                                <Link href={"/dashboard/tools/fishing"} className="text-11 2xl:text-xs underline font-semibold text-green-600 -mt-1">View Tools</Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center flex-wrap -mt-1">
                        <p className="text-11 text-gray-600 2xl:text-13 flex gap-x-1" >
                            <span className="font-semibold text-black">345</span>
                            damaged
                        </p>
                        <FaCircle className="text-gray-600 h-1"/>
                        <p className="text-11 text-gray-600 2xl:text-13 flex gap-x-1" >
                            <span className="font-semibold text-black">342</span>
                            missing
                        </p>
                        <FaCircle className="text-gray-600 h-1"/>
                        <p className="text-11 text-gray-600 2xl:text-13 flex gap-x-1" >
                            <span className="font-semibold text-black">100</span>
                            In Maintenance
                        </p>
                    </div>
                </div>
                <div className="bg-white border border-white hover:border-green-600 cursor-pointer transition shadow-sm rounded-sm p-3 flex flex-col gap-y-6 hover:scale-103">
                    <FaTools className="p-1 text-3xl 2xl:text-4xl bg-green-100 text-green-600"/>
                    
                    <div className="flex gap-y-2">
                        <div className="w-full">
                            <p className="text-11 font-bold text-gray-600 sm:text-13 2xl:text-sm">Total JAR Tools</p>
                            <div className="flex justify-between items-end w-full">
                                <h1 className="text-xl 2xl:text-3xl font-semibold">4300</h1>
                                <Link href={"/dashboard/tools/fishing"} className="text-11 2xl:text-xs underline font-semibold text-green-600 -mt-1">View Tools</Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center flex-wrap -mt-1">
                        <p className="text-11 text-gray-600 2xl:text-13 flex gap-x-1" >
                            <span className="font-semibold text-black">345</span>
                            damaged
                        </p>
                        <FaCircle className="text-gray-600 h-1"/>
                        <p className="text-11 text-gray-600 2xl:text-13 flex gap-x-1" >
                            <span className="font-semibold text-black">342</span>
                            missing
                        </p>
                        <FaCircle className="text-gray-600 h-1"/>
                        <p className="text-11 text-gray-600 2xl:text-13 flex gap-x-1" >
                            <span className="font-semibold text-black">100</span>
                            In Maintenance
                        </p>
                    </div>
                </div>
                <div className="bg-white border border-white hover:border-green-600 cursor-pointer transition shadow-sm rounded-sm p-3 flex flex-col gap-y-6 hover:scale-103">
                    <FaTools className="p-1 text-3xl 2xl:text-4xl bg-green-100 text-green-600"/>
                    
                    <div className="flex gap-y-2">
                        <div className="w-full">
                            <p className="text-11 font-bold text-gray-600 sm:text-13 2xl:text-sm">Total CTR Tools</p>
                            <div className="flex justify-between items-end w-full">
                                <h1 className="text-xl 2xl:text-3xl font-semibold">4300</h1>
                                <Link href={"/dashboard/tools/fishing"} className="text-11 2xl:text-xs underline font-semibold text-green-600 -mt-1">View Tools</Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center flex-wrap -mt-1">
                        <p className="text-11 text-gray-600 2xl:text-13 flex gap-x-1" >
                            <span className="font-semibold text-black">345</span>
                            damaged
                        </p>
                        <FaCircle className="text-gray-600 h-1"/>
                        <p className="text-11 text-gray-600 2xl:text-13 flex gap-x-1" >
                            <span className="font-semibold text-black">342</span>
                            missing
                        </p>
                        <FaCircle className="text-gray-600 h-1"/>
                        <p className="text-11 text-gray-600 2xl:text-13 flex gap-x-1" >
                            <span className="font-semibold text-black">100</span>
                            In Maintenance
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ToolsPage;