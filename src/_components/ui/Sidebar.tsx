"use client"

import Image from "next/image";
import logo from "@/assets/images/logo.png"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdDashboard, MdInventory, MdNotifications, MdOutlineAutoGraph, MdOutlineSettings } from "react-icons/md";
import { HiOutlineDocumentSearch } from "react-icons/hi";
import { FaRegBell, FaTools } from "react-icons/fa";

const Sidebar : React.FC = () => {
    const pathname = usePathname();
    return ( 
        <>
            <div className="bg-white h-screen w-50 shadow-sm hidden sm:flex flex-col items-center pr-2 gap-y-6 fixed top-0 font-sans">
                <Image
                    src={logo}
                    alt="Logo"
                    className="h-12 w-auto mt-5 mb-2"
                />

                <div className="flex flex-col gap-y-2 w-full">
                    <Link 
                        href={"/dashboard"}
                        className={`flex gap-x-1 items-center text-13 2xl:text-sm font-semibold ${
                            pathname === "/dashboard" ?
                            "bg-green-700/10 text-green-700  border-l-4 border-green-700" :
                            "text-gray-600"
                        } px-3 py-2 rounded-sm`}
                    >
                        <MdDashboard/> Dashboard
                    </Link>
                    <Link 
                        href={"/dashboard/tools"}
                        className={`flex gap-x-1 items-center text-13 2xl:text-sm font-semibold ${
                            pathname.startsWith("/dashboard/tools") ?
                            "bg-green-700/10 text-green-700  border-l-4 border-green-700" :
                            "text-gray-600"
                        } px-3 py-2 rounded-sm hover:text-green-600 cursor-pointer transition`}
                    >
                        <FaTools/> Tools
                    </Link>
                    <Link 
                        href={"/dashboard/analytics"}
                        className={`flex gap-x-1 items-center text-13 2xl:text-sm font-semibold ${
                            pathname.startsWith("/dashboard/analytics") ?
                            "bg-green-700/10 text-green-700  border-l-4 border-green-700" :
                            "text-gray-600"
                        } px-3 py-2 rounded-sm hover:text-green-600 cursor-pointer transition`}
                    >
                        <MdOutlineAutoGraph/> Analytics
                    </Link>
                    <Link 
                        href={"/dashboard/notifications"}
                        className={`flex gap-x-1 items-center text-13 2xl:text-sm font-semibold ${
                            pathname === "/dashboard/notifications" ?
                            "bg-green-700/10 text-green-700  border-l-4 border-green-700" :
                            "text-gray-600"
                        } px-3 py-2 rounded-sm hover:text-green-600 cursor-pointer transition`}
                    >
                        <MdNotifications/> Notifications <span className={`text-10 px-1 rounded-full border border-gray-200 ${
                            pathname === "/dashboard/notifications" ?
                            " border-green-700" :
                            "border-gray-200"
                        }`}>2</span>
                    </Link>
                    <Link 
                        href={"/dashboard/audit"}
                        className={`flex gap-x-1 items-center text-13 2xl:text-sm font-semibold ${
                            pathname === "/dashboard/audit" ?
                            "bg-green-700/10 text-green-700  border-l-4 border-green-700" :
                            "text-gray-600"
                        } px-3 py-2 rounded-sm hover:text-green-600 cursor-pointer transition`}
                    >
                        <HiOutlineDocumentSearch/> Audit
                    </Link>
                    <Link 
                        href={"/dashboard/settings"}
                        className={`flex gap-x-1 items-center text-13 2xl:text-sm font-semibold ${
                            pathname === "/dashboard/settings" ?
                            "bg-green-700/10 text-green-700  border-l-4 border-green-700" :
                            "text-gray-600"
                        } px-3 py-2 rounded-sm hover:text-green-600 cursor-pointer transition`}
                    >
                        <MdOutlineSettings/> Settings
                    </Link>
                </div>

                <div className="border-t border-gray-200 w-full absolute bottom-0 px-5 py-3">
                    <div className="flex gap-x-2 items-center">
                        <div className="bg-green-700/20 w-10 h-10 flex items-center justify-center text-green-600 rounded-full font-semibold">AA</div>
                        <div>
                            <h3 className="text-13 2xl:text-sm font-semibold">Abraham Amadi</h3>
                            <p className="text-11 2xl:text-xs text-gray-600">Administrator</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* MOBILE NAV TOP NAV */}
            <div  className="bg-white absolute top-0 gap-x-1 px-3 py-2 flex justify-between items-center w-full sm:hidden drop-shadow-sm font-montserrat">
                <Image
                    src={logo}
                    alt="Logo"
                    className="h-7 w-auto"
                />
                <div className="flex gap-x-2 items-center">
                    <FaRegBell className="text-sm"/>
                    <div className="bg-green-700/20 w-7 h-7 flex items-center justify-center text-green-600 rounded-full font-semibold text-sm">AA</div>
                    <div>
                        <h3 className="text-10 sm:text-13 2xl:text-sm font-semibold">Abraham Amadi</h3>
                        <p className="text-[9px] sm:text-11 2xl:text-xs text-gray-600">Administrator</p>
                    </div>
                </div>
            </div>

            {/* MOBILE NAV */}
            <div className="bg-white fixed bottom-0 gap-x-1 px-3 py-1.5 flex justify-between items-center w-full sm:hidden drop-shadow-2xl font-montserrat z-40">
                <Link 
                    href={"/dashboard"}
                    className={`flex flex-col gap-x-1 items-center text-13 2xl:text-sm font-semibold ${
                        pathname === "/dashboard" ?
                        " text-green-700  " :
                        "text-gray-600"
                    } `}
                >
                    <MdDashboard className="text-base"/> <span className="text-[9px]">Dashboard</span>
                </Link>
                <Link 
                    href={"/dashboard/inventory"}
                    className={`flex flex-col gap-x-1 items-center text-13 2xl:text-sm font-semibold ${
                        pathname === "/inventory" ?
                        " text-green-700  " :
                        "text-gray-600"
                    } `}
                >
                    <MdInventory className="text-base"/> <span className="text-[9px]">Tools</span>
                </Link>
                <Link 
                    href={"/dashboard/notifications"}
                    className={`flex flex-col gap-x-1 items-center text-13 2xl:text-sm font-semibold ${
                        pathname === "/dashboard/notifications" ?
                        " text-green-700  " :
                        "text-gray-600"
                    } `}
                >
                    <MdOutlineAutoGraph className="text-base"/> <span className="text-[9px]">Analytics</span>
                </Link>
                <Link 
                    href={"/dasboard/audit"}
                    className={`flex flex-col gap-x-1 items-center text-13 2xl:text-sm font-semibold ${
                        pathname === "/audit" ?
                        " text-green-700  " :
                        "text-gray-600"
                    } `}
                >
                    <HiOutlineDocumentSearch className="text-base"/> <span className="text-[9px]">Audit</span>
                </Link>
                <Link 
                    href={"/dashboard/settings"}
                    className={`flex flex-col gap-x-1 items-center text-13 2xl:text-sm font-semibold ${
                        pathname === "/settings" ?
                        " text-green-700  " :
                        "text-gray-600"
                    } `}
                >
                    <MdOutlineSettings className="text-base"/> <span className="text-[9px]">Settings</span>
                </Link>

            </div>
        </>
    );
}

export default Sidebar;