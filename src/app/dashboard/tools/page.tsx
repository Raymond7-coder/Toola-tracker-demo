
import Link from "next/link";
import { FaPlus, FaTools, FaArrowRight } from "react-icons/fa";

const departments = [
    {
        id: 1,
        name: "Fishing",
        total: 4300,
        damaged: 345,
        missing: 342,
        maintenance: 100,
        href: "/dashboard/tools/fishing"
    },
    {
        id: 2,
        name: "Wireline",
        total: 4300,
        damaged: 345,
        missing: 342,
        maintenance: 100,
        href: "/dashboard/tools/fishing"
    },
    {
        id: 3,
        name: "Gyro",
        total: 4300,
        damaged: 345,
        missing: 342,
        maintenance: 100,
        href: "/dashboard/tools/fishing"
    },
    {
        id: 4,
        name: "JAR",
        total: 4300,
        damaged: 345,
        missing: 342,
        maintenance: 100,
        href: "/dashboard/tools/fishing"
    },
    {
        id: 5,
        name: "CTR",
        total: 4300,
        damaged: 345,
        missing: 342,
        maintenance: 100,
        href: "/dashboard/tools/fishing"
    }
];

const ToolsPage = () => {
    return (
        <div className="flex flex-col gap-y-5 sm:gap-y-6 min-w-0 pb-24 sm:pb-6">

            {/* PAGE HEADER */}

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">

                <div>
                    <h1 className="text-lg 2xl:text-2xl font-semibold text-gray-900">
                        Departments
                    </h1>

                    <p className="text-xs sm:text-13 text-gray-600 mt-1">
                        Organize your tools by separating them into departments.
                    </p>
                </div>

                <button
                    type="button"
                    className="self-start sm:self-auto bg-green-600 hover:bg-green-700 text-white text-xs 2xl:text-13 font-medium px-4 py-2.5 rounded-md flex gap-2 items-center transition cursor-pointer whitespace-nowrap"
                >
                    <FaPlus />
                    Add Department
                </button>

            </div>

            {/* RESPONSIVE DEPARTMENT GRID */}

            <div className="grid grid-cols-1 min-[340px]:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">

                {departments.map((department) => (

                    <div
                        key={department.id}
                        className="bg-white border border-gray-100 hover:border-green-500 transition shadow-sm rounded-lg p-3 sm:p-4 min-w-0 flex flex-col gap-3"
                    >

                        {/* DEPARTMENT ICON */}

                        <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-md bg-green-100 text-green-600 flex items-center justify-center">

                            <FaTools className="text-lg sm:text-xl" />

                        </div>

                        {/* DEPARTMENT NAME AND COUNT */}

                        <div className="min-w-0">

                            <p className="text-xs sm:text-13 2xl:text-sm font-semibold text-gray-600">
                                Total {department.name} Tools
                            </p>

                            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mt-1">
                                {department.total.toLocaleString("en-US")}
                            </h2>

                        </div>

                        {/* TOOL STATUS STATISTICS */}

                        <div className="border-t border-gray-100 pt-3 flex flex-col gap-2">

                            <div className="flex items-center justify-between gap-1">

                                <div className="flex items-center gap-1.5 min-w-0">

                                    <span className="w-1.5 h-1.5 shrink-0 rounded-full bg-red-500" />

                                    <span className="text-[10px] sm:text-xs text-gray-600">
                                        Damaged
                                    </span>

                                </div>

                                <span className="text-xs sm:text-sm font-semibold text-red-600">
                                    {department.damaged}
                                </span>

                            </div>

                            <div className="flex items-center justify-between gap-1">

                                <div className="flex items-center gap-1.5 min-w-0">

                                    <span className="w-1.5 h-1.5 shrink-0 rounded-full bg-amber-500" />

                                    <span className="text-[10px] sm:text-xs text-gray-600">
                                        Missing
                                    </span>

                                </div>

                                <span className="text-xs sm:text-sm font-semibold text-amber-600">
                                    {department.missing}
                                </span>

                            </div>

                            <div className="flex items-center justify-between gap-1">

                                <div className="flex items-center gap-1.5 min-w-0">

                                    <span className="w-1.5 h-1.5 shrink-0 rounded-full bg-blue-500" />

                                    <span className="text-[10px] sm:text-xs text-gray-600">
                                        Maintenance
                                    </span>

                                </div>

                                <span className="text-xs sm:text-sm font-semibold text-blue-600">
                                    {department.maintenance}
                                </span>

                            </div>

                        </div>

                        {/* VIEW TOOLS BUTTON */}

                        <Link
                            href={department.href}
                            aria-label={`View ${department.name} tools`}
                            className="mt-auto flex items-center justify-center gap-2 w-full py-2.5 px-2 bg-green-50 hover:bg-green-100 text-green-700 rounded-md text-xs sm:text-13 font-semibold transition"
                        >
                            View Tools

                            <FaArrowRight className="text-[10px]" />

                        </Link>

                    </div>

                ))}

            </div>

        </div>
    );
};

export default ToolsPage;
