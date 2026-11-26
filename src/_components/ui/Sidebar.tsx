
"use client";

import Image from "next/image";
import logo from "@/assets/images/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
    MdDashboard,
    MdInventory,
    MdNotifications,
    MdOutlineAutoGraph,
    MdOutlineSettings
} from "react-icons/md";

import { HiOutlineDocumentSearch } from "react-icons/hi";
import { FaRegBell, FaTools } from "react-icons/fa";

// --- Navigation Configuration ---

const navigationItems = [
    {
        name: "Dashboard",
        href: "/dashboard",
        icon: MdDashboard,
        mobileIcon: MdDashboard,
        mobile: true
    },
    {
        name: "Tools",
        href: "/dashboard/tools",
        icon: FaTools,
        mobileIcon: MdInventory,
        mobile: true
    },
    {
        name: "Analytics",
        href: "/dashboard/analytics",
        icon: MdOutlineAutoGraph,
        mobileIcon: MdOutlineAutoGraph,
        mobile: true
    },
    {
        name: "Notifications",
        href: "/dashboard/notifications",
        icon: MdNotifications,
        mobileIcon: MdNotifications,
        mobile: false
    },
    {
        name: "Audit",
        href: "/dashboard/audit",
        icon: HiOutlineDocumentSearch,
        mobileIcon: HiOutlineDocumentSearch,
        mobile: true
    },
    {
        name: "Settings",
        href: "/dashboard/settings",
        icon: MdOutlineSettings,
        mobileIcon: MdOutlineSettings,
        mobile: true
    }
];

const Sidebar = () => {

    const pathname = usePathname();

    const notificationCount = 2;

    // Determine active navigation item

    const isActive = (href: string) => {
        if (href === "/dashboard") {
            return pathname === href;
        }

        return (
            pathname === href ||
            pathname.startsWith(`${href}/`)
        );
    };

    return (
        <>

            {/* ================================= */}
            {/* DESKTOP SIDEBAR */}
            {/* ================================= */}

            <aside className="bg-white h-screen w-50 shadow-sm hidden sm:flex flex-col items-center pr-2 gap-y-6 fixed top-0 left-0 font-sans z-30">

                {/* COMPANY LOGO */}

                <Link href="/dashboard">

                    <Image
                        src={logo}
                        alt="Toola Tracker Logo"
                        className="h-12 w-auto mt-5 mb-2"
                    />

                </Link>

                {/* DESKTOP NAVIGATION */}

                <nav
                    aria-label="Desktop navigation"
                    className="flex flex-col gap-y-2 w-full"
                >

                    {navigationItems.map((item) => {

                        const Icon = item.icon;

                        const active = isActive(item.href);

                        return (

                            <Link
                                key={item.href}
                                href={item.href}
                                aria-current={
                                    active ? "page" : undefined
                                }
                                className={`flex gap-x-1 items-center text-13 2xl:text-sm font-semibold px-3 py-2 rounded-sm hover:text-green-600 cursor-pointer transition ${
                                    active
                                        ? "bg-green-700/10 text-green-700 border-l-4 border-green-700"
                                        : "text-gray-600"
                                }`}
                            >

                                <Icon className="shrink-0" />

                                {item.name}

                                {/* NOTIFICATION COUNTER */}

                                {item.name === "Notifications" &&
                                    notificationCount > 0 && (

                                        <span
                                            className={`text-10 px-1 rounded-full border ${
                                                active
                                                    ? "border-green-700"
                                                    : "border-gray-200"
                                            }`}
                                        >
                                            {notificationCount}
                                        </span>

                                    )}

                            </Link>

                        );
                    })}

                </nav>

                {/* DESKTOP ADMIN PROFILE */}

                <div className="border-t border-gray-200 w-full absolute bottom-0 left-0 px-5 py-3 bg-white">

                    <div className="flex gap-x-2 items-center">

                        <div className="bg-green-700/20 w-10 h-10 shrink-0 flex items-center justify-center text-green-600 rounded-full font-semibold">

                            AA

                        </div>

                        <div className="min-w-0">

                            <h3 className="text-13 2xl:text-sm font-semibold">
                                Abraham Amadi
                            </h3>

                            <p className="text-11 2xl:text-xs text-gray-600">
                                Administrator
                            </p>

                        </div>

                    </div>

                </div>

            </aside>

            {/* ================================= */}
            {/* MOBILE TOP HEADER */}
            {/* ================================= */}

            <header className="bg-white fixed top-0 left-0 right-0 z-40 gap-x-2 px-4 py-3 flex justify-between items-center w-full sm:hidden shadow-sm font-montserrat">

                {/* MOBILE LOGO */}

                <Link
                    href="/dashboard"
                    aria-label="Go to dashboard"
                    className="shrink-0"
                >

                    <Image
                        src={logo}
                        alt="Toola Tracker Logo"
                        className="h-8 w-auto"
                    />

                </Link>

                <div className="flex gap-x-2 items-center">

                    {/* FUNCTIONAL NOTIFICATION BELL */}

                    <Link
                        href="/dashboard/notifications"
                        aria-label={`View notifications, ${notificationCount} notifications`}
                        aria-current={
                            isActive("/dashboard/notifications")
                                ? "page"
                                : undefined
                        }
                        className={`relative flex items-center justify-center w-10 h-10 shrink-0 rounded-full transition ${
                            isActive("/dashboard/notifications")
                                ? "bg-green-50 text-green-700"
                                : "text-gray-700 hover:bg-gray-100"
                        }`}
                    >

                        <FaRegBell className="text-lg" />

                        {notificationCount > 0 && (

                            <span className="absolute top-0 right-0 min-w-4 h-4 px-1 bg-red-500 text-white text-[9px] font-semibold rounded-full flex items-center justify-center">

                                {notificationCount}

                            </span>

                        )}

                    </Link>

                    {/* MOBILE ADMIN PROFILE */}

                    <div className="bg-green-700/20 w-8 h-8 shrink-0 flex items-center justify-center text-green-600 rounded-full font-semibold text-sm">

                        AA

                    </div>

                    <div className="min-w-0">

                        <h3 className="text-[11px] font-semibold text-gray-900">

                            Abraham Amadi

                        </h3>

                        <p className="text-[9px] text-gray-600">

                            Administrator

                        </p>

                    </div>

                </div>

            </header>

            {/* ================================= */}
            {/* MOBILE BOTTOM NAVIGATION */}
            {/* ================================= */}

            <nav
                aria-label="Mobile navigation"
                className="bg-white fixed bottom-0 left-0 right-0 z-40 px-2 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] grid grid-cols-5 items-center w-full sm:hidden border-t border-gray-100 shadow-lg font-montserrat"
            >

                {navigationItems
                    .filter((item) => item.mobile)
                    .map((item) => {

                        const Icon = item.mobileIcon;

                        const active = isActive(item.href);

                        return (

                            <Link
                                key={item.href}
                                href={item.href}
                                aria-current={
                                    active ? "page" : undefined
                                }
                                className={`flex flex-col items-center justify-center gap-1 min-w-0 min-h-11 rounded-md py-1 font-semibold transition ${
                                    active
                                        ? "text-green-700"
                                        : "text-gray-600 hover:text-green-600"
                                }`}
                            >

                                <Icon className="text-lg" />

                                <span className="text-[9px] whitespace-nowrap">

                                    {item.name}

                                </span>

                            </Link>

                        );
                    })}

            </nav>

        </>
    );
};

export default Sidebar;
