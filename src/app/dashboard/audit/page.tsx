"use client";

import { useState } from "react";
import { 
    FiSearch, FiDownload, FiFilter, FiUser, 
    FiActivity, FiMonitor, FiTrash2, FiPlusCircle, FiMove 
} from "react-icons/fi";

// --- Types ---
type ActionType = 'LOGIN' | 'LOGOUT' | 'CREATE_TOOL' | 'DELETE_TOOL' | 'UPDATE_STATUS' | 'LOG_MOVEMENT';

interface AuditLog {
    id: string;
    user: string;
    role: string;
    action: ActionType;
    entity: string; // The thing changed (e.g., "Hammer Drill")
    details: string; // "Changed status from Available to In Field"
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
    },
];

export default function SystemAuditPage() {
    const [logs] = useState<AuditLog[]>(mockLogs);
    const [search, setSearch] = useState("");
    const [filterType, setFilterType] = useState<string>("ALL");

  // --- Filtering Logic ---
    const filteredLogs = logs.filter(log => {
        const matchesSearch = 
        log.user.toLowerCase().includes(search.toLowerCase()) || 
        log.entity.toLowerCase().includes(search.toLowerCase()) ||
        log.details.toLowerCase().includes(search.toLowerCase());
        
        const matchesType = filterType === "ALL" || log.action === filterType;

        return matchesSearch && matchesType;
    });

  // --- CSV Export Logic ---
    const exportToCSV = () => {
        // 1. Define Headers
        const headers = ["Timestamp", "User", "Role", "Action", "Entity", "Details", "IP Address"];
        
        // 2. Map Data to CSV format
        const csvContent = [
        headers.join(","), // Header Row
        ...filteredLogs.map(log => [
            `"${log.timestamp}"`,
            `"${log.user}"`,
            `"${log.role}"`,
            `"${log.action}"`,
            `"${log.entity}"`,
            `"${log.details}"`,
            `"${log.ipAddress}"`
        ].join(","))
        ].join("\n");

        // 3. Create Blob and Download
        const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
        const link = document.createElement("a");
        const url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", `audit_logs_${new Date().toISOString().split('T')[0]}.csv`);
        link.style.visibility = "hidden";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

  // --- Helper: Action Badge Styles ---
    const getActionStyle = (action: ActionType) => {
        switch (action) {
            case 'DELETE_TOOL': return { bg: 'bg-red-100', text: 'text-red-700', icon: <FiTrash2 /> };
            case 'CREATE_TOOL': return { bg: 'bg-green-100', text: 'text-green-700', icon: <FiPlusCircle /> };
            case 'LOGIN': return { bg: 'bg-blue-50', text: 'text-blue-600', icon: <FiUser /> };
            case 'LOGOUT': return { bg: 'bg-gray-100', text: 'text-gray-600', icon: <FiUser /> };
            case 'LOG_MOVEMENT': return { bg: 'bg-indigo-100', text: 'text-indigo-700', icon: <FiMove /> };
            default: return { bg: 'bg-orange-50', text: 'text-orange-600', icon: <FiActivity /> };
        }
    };

    return (
        <>
            <style>{`
            .custom-scrollbar::-webkit-scrollbar {
                height: 8px; /* Height for horizontal scrollbar */
                width: 8px;  /* Width for vertical scrollbar */
            }
            .custom-scrollbar::-webkit-scrollbar-track {
                background: #f1f1f1;
                border-radius: 4px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb {
                background: #d1d5db; /* Gray-300 */
                border-radius: 4px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                background: #9ca3af; /* Gray-400 */
            }
        `}</style>
        <div className="min-h-screen bg-gray-50/50 max-sm:my-12">
        
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                    <h1 className="text-base sm:text-xl 2xl:text-2xl font-bold text-gray-900 flex items-center gap-2">
                        System Audit Logs
                    </h1>
                    <p className="text-13 2xl:text-sm text-gray-500 mt-1">
                        Track all system activity, security events, and data changes.
                    </p>
                </div>
                
                <button 
                    onClick={exportToCSV}
                    className="flex items-center text-11 sm:text-xs 2xl:text-13 gap-2 px-3 py-1.5 2xl:px-4 2xl:py-2 bg-white border border-gray-300 text-gray-700 font-medium rounded-md cursor-pointer hover:bg-green-600 hover:border-green-600 hover:text-white  transition"
                >
                    <FiDownload /> Export CSV
                </button>
            </div>

            {/* Controls Bar */}
            <div className="bg-white p-2 xsm:p-4 rounded-lg shadow-sm mb-6 flex flex-col md:flex-row gap-4">
                
                {/* Search */}
                <div className="relative flex-1">
                    <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input 
                        type="text" 
                        placeholder="Search by User, Tool, or Action details..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs sm:text-13 2xl:text-sm"
                    />
                </div>

                {/* Filter Dropdown */}
                <div className="relative min-w-[200px]">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-13">
                        <FiFilter />
                    </div>
                    <select 
                        value={filterType}
                        onChange={(e) => setFilterType(e.target.value)}
                        className="w-full pl-8 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs sm:text-13 2xl:text-sm appearance-none bg-white cursor-pointer"
                    >
                        <option value="ALL">All Events</option>
                        <option value="LOGIN">User Login</option>
                        <option value="LOGOUT">User Logout</option>
                        <option value="CREATE_TOOL">Tool Created</option>
                        <option value="DELETE_TOOL">Tool Deleted</option>
                        <option value="UPDATE_STATUS">Status Changes</option>
                        <option value="LOG_MOVEMENT">Movement Logs</option>
                    </select>
                </div>

            </div>

            {/* Audit Table */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm font-sans">
                <div className="overflow-x-auto custom-scrollbar">
                <table className="w-full text-left border-collapse whitespace-nowrap">
                    <thead>
                    <tr className="bg-gray-50 text-11 2xl:text-xs text-gray-500 border-b border-gray-200">
                        <th className="px-6 py-3 font-medium uppercase">Timestamp</th>
                        <th className="px-6 py-3 font-medium uppercase">Actor</th>
                        <th className="px-6 py-3 font-medium uppercase">Action</th>
                        <th className="px-6 py-3 font-medium uppercase">Entity / Resource</th>
                        <th className="px-6 py-3 font-medium uppercase">Details</th>
                        <th className="px-6 py-3 font-medium uppercase text-right">IP Address</th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                    {filteredLogs.length > 0 ? (
                        filteredLogs.map((log) => {
                        const style = getActionStyle(log.action);
                        return (
                            <tr key={log.id} className="hover:bg-gray-50/50 transition">
                                <td className="px-6 py-4 text-xs text-gray-500 font-mono">
                                    {log.timestamp}
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex flex-col">
                                        <span className="text-xs sm:text-13 2xl:text-sm font-semibold text-gray-900">{log.user}</span>
                                        <span className="text-11 2xl:text-xs text-gray-500">{log.role}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[9px] sm:text-10 2xl:text-xs font-medium border border-transparent ${style.bg} ${style.text}`}>
                                        {style.icon}
                                        {log.action.replace('_', ' ')}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-xs sm:text-13 2xl:text-sm text-gray-700 font-medium">
                                    {log.entity}
                                </td>
                                <td className="px-6 py-4 text-xs sm:text-13 2xl:text-sm text-gray-600 max-w-xs truncate" title={log.details}>
                                    {log.details}
                                </td>
                                <td className="px-6 py-4 text-11 sm:text-xs text-gray-400 font-mono text-right">
                                    {log.ipAddress}
                                </td>
                            </tr>
                        );
                        })
                    ) : (
                        <tr>
                        <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                            No logs found matching your filters.
                        </td>
                        </tr>
                    )}
                    </tbody>
                </table>
                </div>
            </div>

        </div>
        </>
    );
}