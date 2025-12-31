"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// 1. Defined a new Interface for History Data
interface HistoryLog {
    id: string;
    movementType: string; // e.g., Check Out, Return, Maintenance
    performedBy: string;  // e.g., Admin, John Smith
    location: string;
    status: string;       // e.g., In Field, Available
    condition: string;    // e.g., Good, Fair, Damaged
    comments: string;
    date: string;
    time: string;
}

// 2. Created Mock Data for the History Table
const historyData: HistoryLog[] = [
    {
        id: "LOG-9001",
        movementType: "Check In / Return",
        performedBy: "John Smith",
        location: "Warehouse A - Shelf 4",
        status: "Available",
        condition: "Good",
        comments: "Job completed. Tool cleaned and returned.",
        date: "2023-10-12",
        time: "04:30 PM"
    },
    {
        id: "LOG-8992",
        movementType: "Maintenance Out",
        performedBy: "Admin (Sarah)",
        location: "Repair Shop",
        status: "Under Maintenance",
        condition: "Fair",
        comments: "Sent for routine calibration and brush replacement.",
        date: "2023-10-06",
        time: "09:15 AM"
    },
    {
        id: "LOG-8821",
        movementType: "Check Out / Issue",
        performedBy: "Site Supervisor",
        location: "Site B - Downtown",
        status: "In Field",
        condition: "Good",
        comments: "Issued for the SkyScraper project foundation phase.",
        date: "2023-09-20",
        time: "07:00 AM"
    },
    {
        id: "LOG-8100",
        movementType: "Transfer",
        performedBy: "Logistics Team",
        location: "Site A - Uptown",
        status: "In Field",
        condition: "Good",
        comments: "Transferred directly from Site A to Site B.",
        date: "2023-09-19",
        time: "02:45 PM"
    },
    {
        id: "LOG-7500",
        movementType: "Audit Scan",
        performedBy: "System Auto-Scan",
        location: "Site A - Uptown",
        status: "In Field",
        condition: "Good",
        comments: "RFID Tag verified during weekly scan.",
        date: "2023-08-15",
        time: "12:00 PM"
    },
    {
        id: "LOG-7001",
        movementType: "Check Out / Issue",
        performedBy: "Admin (Sarah)",
        location: "Site A - Uptown",
        status: "In Field",
        condition: "New",
        comments: "Initial issue after purchase.",
        date: "2023-01-20",
        time: "08:30 AM"
    },
    {
        id: "LOG-7000",
        movementType: "Purchase / Stock",
        performedBy: "Procurement",
        location: "Warehouse A",
        status: "Available",
        condition: "New",
        comments: "Received from DeWalt Vendor. Added to inventory.",
        date: "2023-01-15",
        time: "10:00 AM"
    }
];

const ToolHistoryTable: React.FC = () => {

    return (
        <>
            <style>{`
                .custom-scrollbar::-webkit-scrollbar {
                    height: 8px;
                    width: 8px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: #f1f1f1;
                    border-radius: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #d1d5db;
                    border-radius: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #9ca3af;
                }
            `}</style>

            <div className="w-full overflow-x-auto custom-scrollbar">
                <table className="w-full whitespace-nowrap">
                    <thead>
                        <tr className="text-xs 2xl:text-13 text-gray-600 border-b border-b-gray-200 text-left bg-gray-100">
                            <th className="p-2 sticky left-0 bg-gray-100 z-10 border-r border-gray-200">Movement</th>
                            {/* Note: If you have two left-0 sticky headers, they will overlap unless left values are offset. 
                                I kept your UI classes exactly as requested, but usually the second sticky needs 'left-[width]' */}
                            <th className="p-2 sticky left-0 bg-gray-100 z-10 border-r border-gray-200">Location</th>
                            <th className="p-2">Status</th>
                            <th className="p-2">Return Date</th>
                            <th className="p-2">Condition</th>
                            <th className="p-2">Comments</th>
                            <th className="p-2">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {historyData.map((el, index) => {
                            return (
                                <tr key={index} className="border-b border-gray-200 text-xs 2xl:text-13 text-gray-700">
                                    
                                    {/* 1. Movement Column */}
                                    <td className="p-2 sticky left-0 bg-white z-10 border-r border-gray-100">
                                        <div className="flex flex-col">
                                            <h3 className="text-xs 2xl:text-13 font-semibold">{el.movementType}</h3>
                                            <small className="text-10 2xl:text-xs text-gray-500">By: {el.performedBy}</small>
                                        </div>
                                    </td>

                                    {/* 2. Location Column */}
                                    <td className="p-2 sticky left-0 bg-white z-10 border-r border-gray-100">
                                        {el.location}
                                    </td>

                                    {/* 3. Status Column (Reused your pill styling) */}
                                    <td className="p-2">
                                        <span className={`px-2 py-0.5 rounded-full text-10 font-medium 
                                            ${el.status === 'Available' ? 'bg-green-100 text-green-700' :
                                                el.status === 'In Field' ? 'bg-cyan-100 text-cyan-700' :
                                                el.status === 'Damaged' ? 'bg-orange-100 text-orange-700' :
                                                el.status === 'Pending Return' ? 'bg-yellow-100 text-yellow-700' :
                                                el.status === 'Under Maintenance' ? 'bg-purple-100 text-purple-700' :
                                                'bg-gray-100 text-gray-700'
                                            }`}>
                                            {el.status}
                                        </span>
                                    </td>

                                    {/* 6. Date Column */}
                                    <td className="p-2">
                                        <div className="flex flex-col">
                                            <span>{el.date}</span>
                                            <small className="text-gray-400 text-10">{el.time}</small>
                                        </div>
                                    </td>

                                    {/* 4. Condition Column */}
                                    <td className="p-2">
                                        <span className={`font-medium ${
                                            el.condition === 'Good' || el.condition === 'New' ? 'text-green-600' :
                                            el.condition === 'Fair' ? 'text-yellow-600' : 'text-red-500'
                                        }`}>
                                            {el.condition}
                                        </span>
                                    </td>

                                    {/* 5. Comments Column */}
                                    <td className="p-2 min-w-[250px] text-wrap" title={el.comments}>
                                        {el.comments}
                                    </td>

                                    {/* 6. Date Column */}
                                    <td className="p-2">
                                        <div className="flex flex-col">
                                            <span>{el.date}</span>
                                            <small className="text-gray-400 text-10">{el.time}</small>
                                        </div>
                                    </td>

                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default ToolHistoryTable;