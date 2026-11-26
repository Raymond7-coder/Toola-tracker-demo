
"use client";

import { useState } from "react";
import {
    FiSearch,
    FiDownload,
    FiFilter,
    FiUser,
    FiActivity,
    FiTrash2,
    FiPlusCircle,
    FiMove,
    FiClock,
    FiMonitor,
    FiChevronDown
} from "react-icons/fi";

// --- Types ---

type ActionType =
    | "LOGIN"
    | "LOGOUT"
    | "CREATE_TOOL"
    | "DELETE_TOOL"
    | "UPDATE_STATUS"
    | "LOG_MOVEMENT";

interface AuditLog {
    id: string;
    user: string;
    role: string;
    action: ActionType;
    entity: string;
    details: string;
    timestamp: string;
    ipAddress: string;
}

// --- Mock Data ---

const mockLogs: AuditLog[] = [
    {
        id: "LOG-1005",
        user: "Admin (Sarah)",
        role: "Admin",
        action: "DELETE_TOOL",
        entity: "Broken Grinder (AOS-9912)",
        details: "Permanently removed tool from inventory.",
        timestamp: "2023-10-26 14:30:05",
        ipAddress: "192.168.1.5"
    },
    {
        id: "LOG-1004",
        user: "John Smith",
        role: "Supervisor",
        action: "LOG_MOVEMENT",
        entity: "Hydraulic Jack",
        details: "Moved from Warehouse A to Site B",
        timestamp: "2023-10-26 13:15:00",
        ipAddress: "10.0.0.45"
    },
    {
        id: "LOG-1003",
        user: "Mike Ross",
        role: "Tech",
        action: "UPDATE_STATUS",
        entity: "Multimeter Fluke",
        details: "Status changed: In Use -> Under Maintenance",
        timestamp: "2023-10-26 11:00:22",
        ipAddress: "10.0.0.12"
    },
    {
        id: "LOG-1002",
        user: "Admin (Sarah)",
        role: "Admin",
        action: "CREATE_TOOL",
        entity: "New Generator Honda",
        details: "Added new asset AOS-1007 to system.",
        timestamp: "2023-10-26 09:45:00",
        ipAddress: "192.168.1.5"
    },
    {
        id: "LOG-1001",
        user: "John Smith",
        role: "Supervisor",
        action: "LOGIN",
        entity: "System",
        details: "Successful login session started.",
        timestamp: "2023-10-26 08:00:00",
        ipAddress: "10.0.0.45"
    }
];

// --- Action Labels ---

const actionLabels: Record<ActionType, string> = {
    LOGIN: "User Login",
    LOGOUT: "User Logout",
    CREATE_TOOL: "Tool Created",
    DELETE_TOOL: "Tool Deleted",
    UPDATE_STATUS: "Status Changed",
    LOG_MOVEMENT: "Tool Movement"
};

// --- Action Styles ---

const getActionStyle = (action: ActionType) => {
    switch (action) {
        case "DELETE_TOOL":
            return {
                bg: "bg-red-100",
                text: "text-red-700",
                icon: <FiTrash2 />
            };

        case "CREATE_TOOL":
            return {
                bg: "bg-green-100",
                text: "text-green-700",
                icon: <FiPlusCircle />
            };

        case "LOGIN":
            return {
                bg: "bg-blue-50",
                text: "text-blue-600",
                icon: <FiUser />
            };

        case "LOGOUT":
            return {
                bg: "bg-gray-100",
                text: "text-gray-600",
                icon: <FiUser />
            };

        case "LOG_MOVEMENT":
            return {
                bg: "bg-indigo-100",
                text: "text-indigo-700",
                icon: <FiMove />
            };

        default:
            return {
                bg: "bg-orange-50",
                text: "text-orange-600",
                icon: <FiActivity />
            };
    }
};

// --- Reusable Action Badge ---

const ActionBadge = ({ action }: { action: ActionType }) => {
    const style = getActionStyle(action);

    return (
        <span
            className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[10px] sm:text-xs font-medium whitespace-nowrap ${style.bg} ${style.text}`}
        >
            {style.icon}
            {actionLabels[action]}
        </span>
    );
};

export default function SystemAuditPage() {

    const [logs] = useState<AuditLog[]>(mockLogs);

    const [search, setSearch] = useState("");

    const [filterType, setFilterType] =
        useState<string>("ALL");

    // --- Filtering Logic ---

    const filteredLogs = logs.filter((log) => {

        const searchTerm = search.trim().toLowerCase();

        const matchesSearch = `
            ${log.user}
            ${log.role}
            ${log.entity}
            ${log.details}
            ${log.action}
            ${actionLabels[log.action]}
            ${log.ipAddress}
            ${log.timestamp}
        `
            .toLowerCase()
            .includes(searchTerm);

        const matchesType =
            filterType === "ALL" ||
            log.action === filterType;

        return matchesSearch && matchesType;
    });

    // --- CSV Export ---

    const exportToCSV = () => {

        const headers = [
            "Timestamp",
            "User",
            "Role",
            "Action",
            "Entity",
            "Details",
            "IP Address"
        ];

        const escapeCSV = (value: string) =>
            `"${value.replace(/"/g, '""')}"`;

        const csvContent = [
            headers.join(","),

            ...filteredLogs.map((log) =>
                [
                    log.timestamp,
                    log.user,
                    log.role,
                    log.action,
                    log.entity,
                    log.details,
                    log.ipAddress
                ]
                    .map(escapeCSV)
                    .join(",")
            )
        ].join("\n");

        const blob = new Blob(
            ["\uFEFF", csvContent],
            {
                type: "text/csv;charset=utf-8;"
            }
        );

        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");

        link.href = url;

        link.download = `audit_logs_${
            new Date().toISOString().split("T")[0]
        }.csv`;

        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);

        setTimeout(() => URL.revokeObjectURL(url), 1000);
    };

    return (
        <div className="min-w-0 bg-gray-50/50 font-sans">

            {/* PAGE HEADER */}

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">

                <div>

                    <h1 className="text-lg sm:text-xl 2xl:text-2xl font-bold text-gray-900">
                        System Audit Logs
                    </h1>

                    <p className="text-xs sm:text-13 2xl:text-sm text-gray-500 mt-1 leading-relaxed">
                        Track all system activity, security events,
                        and data changes.
                    </p>

                </div>

                <button
                    type="button"
                    onClick={exportToCSV}
                    className="self-start sm:self-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-gray-300 text-gray-700 text-xs sm:text-13 font-medium rounded-md hover:bg-green-600 hover:border-green-600 hover:text-white transition cursor-pointer whitespace-nowrap"
                >
                    <FiDownload />

                    Export CSV
                </button>

            </div>

            {/* SEARCH AND FILTER CONTROLS */}

            <div className="bg-white p-3 sm:p-4 rounded-lg border border-gray-100 shadow-sm mb-4 flex flex-col sm:flex-row gap-3">

                {/* SEARCH */}

                <div className="relative flex-1 min-w-0">

                    <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />

                    <input
                        type="text"
                        aria-label="Search audit logs"
                        placeholder="Search audit logs..."
                        value={search}
                        onChange={(e) =>
                            setSearch(e.target.value)
                        }
                        className="w-full min-w-0 pl-9 pr-3 py-2.5 border border-gray-200 rounded-md text-xs sm:text-13 2xl:text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                    />

                </div>

                {/* EVENT FILTER */}

                <div className="relative w-full sm:w-48 shrink-0">

                    <FiFilter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />

                    <select
                        aria-label="Filter audit events"
                        value={filterType}
                        onChange={(e) =>
                            setFilterType(e.target.value)
                        }
                        className="w-full pl-9 pr-8 py-2.5 border border-gray-200 rounded-md text-xs sm:text-13 2xl:text-sm appearance-none bg-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                        <option value="ALL">
                            All Events
                        </option>

                        <option value="LOGIN">
                            User Login
                        </option>

                        <option value="LOGOUT">
                            User Logout
                        </option>

                        <option value="CREATE_TOOL">
                            Tool Created
                        </option>

                        <option value="DELETE_TOOL">
                            Tool Deleted
                        </option>

                        <option value="UPDATE_STATUS">
                            Status Changes
                        </option>

                        <option value="LOG_MOVEMENT">
                            Movement Logs
                        </option>

                    </select>

                    <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />

                </div>

            </div>

            {/* RECORD COUNT */}

            <div className="flex items-center justify-between mb-3">

                <p className="text-xs text-gray-500">

                    Showing{" "}

                    <span className="font-semibold text-gray-700">
                        {filteredLogs.length}
                    </span>

                    {" "}of {logs.length} events

                </p>

                {(search || filterType !== "ALL") && (

                    <button
                        type="button"
                        onClick={() => {
                            setSearch("");
                            setFilterType("ALL");
                        }}
                        className="text-xs font-medium text-green-700 hover:underline cursor-pointer"
                    >
                        Clear filters
                    </button>

                )}

            </div>

            {/* MOBILE AND TABLET AUDIT CARDS */}

            <div className="lg:hidden flex flex-col gap-3">

                {filteredLogs.map((log) => (

                    <article
                        key={log.id}
                        className="bg-white border border-gray-100 rounded-lg shadow-sm p-3 sm:p-4 min-w-0"
                    >

                        {/* ACTOR AND ACTION */}

                        <div className="flex items-start justify-between gap-2 flex-wrap">

                            <div className="flex items-center gap-2.5 min-w-0">

                                <div className="w-9 h-9 shrink-0 rounded-full bg-green-50 text-green-700 flex items-center justify-center">

                                    <FiUser className="text-base" />

                                </div>

                                <div className="min-w-0">

                                    <h3 className="text-sm font-semibold text-gray-900 break-words">
                                        {log.user}
                                    </h3>

                                    <p className="text-xs text-gray-500 mt-0.5">
                                        {log.role}
                                    </p>

                                </div>

                            </div>

                            <ActionBadge action={log.action} />

                        </div>

                        {/* AFFECTED ENTITY */}

                        <div className="mt-4">

                            <p className="text-[10px] uppercase tracking-wide font-medium text-gray-400 mb-1">
                                Entity / Resource
                            </p>

                            <h4 className="text-sm font-semibold text-gray-800 break-words">
                                {log.entity}
                            </h4>

                            <p className="text-xs text-gray-600 leading-relaxed mt-1.5 break-words">
                                {log.details}
                            </p>

                        </div>

                        {/* EVENT METADATA */}

                        <div className="border-t border-gray-100 mt-3 pt-3 flex flex-wrap items-center justify-between gap-2">

                            <div className="flex items-center gap-1.5 text-gray-500">

                                <FiClock className="text-xs shrink-0" />

                                <span className="text-[10px] sm:text-xs">
                                    {log.timestamp}
                                </span>

                            </div>

                            <div className="flex items-center gap-1.5 text-gray-400">

                                <FiMonitor className="text-xs shrink-0" />

                                <span className="text-[10px] sm:text-xs font-mono">
                                    {log.ipAddress}
                                </span>

                            </div>

                        </div>

                    </article>

                ))}

            </div>

            {/* DESKTOP AUDIT TABLE */}

            <div className="hidden lg:block bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden">

                <div className="w-full overflow-x-auto">

                    <table className="w-full text-left border-collapse whitespace-nowrap">

                        <thead>

                            <tr className="bg-gray-50 text-11 2xl:text-xs text-gray-500 border-b border-gray-200">

                                <th className="px-5 py-3 font-medium uppercase">
                                    Timestamp
                                </th>

                                <th className="px-5 py-3 font-medium uppercase">
                                    Actor
                                </th>

                                <th className="px-5 py-3 font-medium uppercase">
                                    Action
                                </th>

                                <th className="px-5 py-3 font-medium uppercase">
                                    Entity / Resource
                                </th>

                                <th className="px-5 py-3 font-medium uppercase">
                                    Details
                                </th>

                                <th className="px-5 py-3 font-medium uppercase text-right">
                                    IP Address
                                </th>

                            </tr>

                        </thead>

                        <tbody className="divide-y divide-gray-100">

                            {filteredLogs.map((log) => (

                                <tr
                                    key={log.id}
                                    className="hover:bg-gray-50/50 transition"
                                >

                                    <td className="px-5 py-4 text-xs text-gray-500 font-mono">
                                        {log.timestamp}
                                    </td>

                                    <td className="px-5 py-4">

                                        <div className="flex flex-col">

                                            <span className="text-xs sm:text-13 2xl:text-sm font-semibold text-gray-900">
                                                {log.user}
                                            </span>

                                            <span className="text-11 2xl:text-xs text-gray-500">
                                                {log.role}
                                            </span>

                                        </div>

                                    </td>

                                    <td className="px-5 py-4">

                                        <ActionBadge
                                            action={log.action}
                                        />

                                    </td>

                                    <td className="px-5 py-4 text-xs sm:text-13 2xl:text-sm text-gray-700 font-medium">
                                        {log.entity}
                                    </td>

                                    <td
                                        className="px-5 py-4 text-xs sm:text-13 2xl:text-sm text-gray-600 max-w-xs whitespace-normal break-words"
                                        title={log.details}
                                    >
                                        {log.details}
                                    </td>

                                    <td className="px-5 py-4 text-11 sm:text-xs text-gray-400 font-mono text-right">
                                        {log.ipAddress}
                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>

            </div>

            {/* EMPTY STATE */}

            {filteredLogs.length === 0 && (

                <div className="bg-white rounded-lg border border-gray-100 shadow-sm py-12 px-4 text-center">

                    <div className="w-12 h-12 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center mx-auto mb-3">

                        <FiActivity className="text-xl" />

                    </div>

                    <h3 className="text-sm font-semibold text-gray-700">
                        No audit logs found
                    </h3>

                    <p className="text-xs text-gray-500 mt-1">
                        No records match your current search or filters.
                    </p>

                    <button
                        type="button"
                        onClick={() => {
                            setSearch("");
                            setFilterType("ALL");
                        }}
                        className="mt-4 text-xs font-semibold text-green-700 hover:underline cursor-pointer"
                    >
                        Reset filters
                    </button>

                </div>

            )}

        </div>
    );
}
