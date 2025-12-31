import DepartmentToolsProgressBar from "@/_components/ui/DepartmentToolsProgressBar";
import Pagination from "@/_components/ui/Pagination";
import ToolsTable from "@/_components/ui/ToolsTable";
import Link from "next/link";
import { FaFileExport, FaFileImport, FaPlus, FaSearch } from "react-icons/fa";

const DepartmentToolsPage = () => {
    return ( 
        <div className="flex flex-col gap-y-5 max-sm:mt-12">
            <div className="flex justify-between items-center flex-wrap gap-y-1">
                <h1 className="text-base sm:text-lg md:text-xl 2xl:text-2xl font-bold">Fishing Department</h1>

                <div className="flex gap-x-2">
                    <Link
                        href={`fishing/add`} 
                        className="bg-green-700 px-3 py-1 2xl:px-4 2xl:py-2 flex gap-x-1 items-center text-xs 2xl:text-13 text-white rounded-sm cursor-pointer hover:bg-green-500 transition"
                    ><FaPlus/> Add Tool</Link>
                    <button className="bg-green-700 px-3 py-1 2xl:px-4 2xl:py-2 flex gap-x-1 items-center text-xs 2xl:text-13 text-white rounded-sm cursor-pointer hover:bg-green-500 transition"><FaFileImport/> Import as CSV</button>
                    <button className="bg-green-700 px-3 py-1 2xl:px-4 2xl:py-2 flex gap-x-1 items-center text-xs 2xl:text-13 text-white rounded-sm cursor-pointer hover:bg-green-500 transition"><FaFileExport/> Export as CSV</button>
                </div>
            </div>


            <DepartmentToolsProgressBar/>

            <div className="shadow-sm p-3 flex flex-col gap-y-6 gap-x-2 bg-white">
                <form action="" className="flex gap-x-2 flex-wrap">
                    <div className=" w-full xsm:w-80 2xl:w-100 ">
                        <label htmlFor="" className="text-xs 2xl:text-13 text-gray-600 font-semibold">Search Tools</label>
                        <div className=" border border-gray-200 px-3 py-1 flex gap-x-2 items-center bg-gray-100 rounded-sm text-gray-600 text-13 2xl:text-sm">
                            <FaSearch/>
                            <input type="search" name="" id="" placeholder="Search by name, serial number, or asset number" className="w-full outline-none"/>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="" className="text-xs 2xl:text-13 text-gray-600 font-semibold">Status</label>
                        <select 
                            name="" 
                            id=""
                            className="border border-gray-200 px-2 py-1 2xl:py-1.5w flex gap-x-2 items-center bg-gray-100 rounded-sm text-gray-600 text-13 2xl:text-sm outline-none focus:border-green-600"
                        >
                            <option value="all">All</option>
                            <option value="available">Available</option>
                            <option value="in field">In Field</option>
                            <option value="pending">Pending</option>
                            <option value="under maintenance">Under Maintenance</option>
                            <option value="damaged">Damaged</option>
                            <option value="missing">missing</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="" className="text-xs 2xl:text-13 text-gray-600 font-semibold">Condition</label>
                        <select 
                            name="" 
                            id=""
                            className="border border-gray-200 px-2 py-1 2xl:py-1.5 flex gap-x-2 items-center bg-gray-100 rounded-sm text-gray-600 text-13 2xl:text-sm outline-none focus:border-green-600"
                        >
                            <option value="all">All</option>
                            <option value="good">Good</option>
                            <option value="fair">Fair</option>
                            <option value="poor">Bad</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="" className="text-xs 2xl:text-13 text-gray-600 font-semibold">Type</label>
                        <select 
                            name="" 
                            id=""
                            className="border border-gray-200 px-2 py-1 2xl:py-1.5 flex gap-x-2 items-center bg-gray-100 rounded-sm text-gray-600 text-13 2xl:text-sm outline-none focus:border-green-600"
                        >
                            <option value="all">All</option>
                        </select>
                    </div>
                </form>

                <ToolsTable/>
                
                <Pagination from={1} to={10} total={30}/>
            </div>
        </div>
    );
}

export default DepartmentToolsPage;