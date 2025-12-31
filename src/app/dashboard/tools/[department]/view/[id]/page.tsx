"use client";

import React, { useState } from 'react';
import { 
  FiTool, FiMapPin, FiCalendar, FiUser, FiClock, 
  FiFileText, FiActivity, FiAlertTriangle, FiCheckCircle, 
  FiDownload, FiEdit3, FiArrowRightCircle 
} from 'react-icons/fi';
import { BsTools, BsQrCode } from 'react-icons/bs';
import ToolHistoryTable from '@/_components/ui/ToolHistoryTable';
import { FaHistory } from 'react-icons/fa';

// --- Types based on your requirement list ---
interface TimelineEvent {
    id: number;
    type: 'MOVEMENT' | 'STATUS_CHANGE' | 'MAINTENANCE' | 'COMMENT';
    title: string;
    date: string;
    user: string;
    notes?: string;
    statusFrom?: string;
    statusTo?: string;
}

interface MaintenanceLog {
    id: number;
    date: string;
    type: string;
    vendor: string;
    cost: string;
    notes: string;
    nextDueDate: string;
}

// --- Mock Data ---
const toolDetails = {
  // A. TOOL INFORMATION
    name: "Hammer Drill 18V XR",
    assetId: "AOS-1001",
    serialNumber: "HD-9928-XA-2022",
    category: "Power Tools",
    type: "Drill",
    department: "Construction",
    manufacturer: "DeWalt",
    model: "DCD996",
    purchaseDate: "15 Jan 2023",
    yearOfManufacture: "2022",
    description: "Brushless 3-speed hammer drill. Heavy duty use.",
    ownership: "AOS Owned",
    
    // B. STATUS & CONDITION
    status: "In Use",
    condition: "Good",
    
    // C. LOCATION & ASSIGNMENT
    currentLocation: "Site B - Downtown",
    assignedTo: "John Smith (Foreman)",
    lastSeen: "2 hours ago",
    
    // G. DOCUMENTS
    documents: [
        { name: "Purchase_Invoice.pdf", size: "1.2 MB" },
        { name: "Safety_Manual.pdf", size: "3.4 MB" },
        { name: "Calibration_Cert_2023.jpg", size: "0.8 MB" },
    ]
};

const timelineData: TimelineEvent[] = [
    {
        id: 1,
        type: 'MOVEMENT',
        title: 'Tool Issued',
        date: 'Oct 05, 2023 - 08:30 AM',
        user: 'Admin (Sarah)',
        notes: 'Issued for Downtown Renovation Project. Verified functionality before handover.',
        statusTo: 'In Use'
    },
    {
        id: 2,
        type: 'STATUS_CHANGE',
        title: 'Status Update',
        date: 'Oct 01, 2023 - 04:15 PM',
        user: 'John Smith',
        statusFrom: 'Available',
        statusTo: 'In Field',
        notes: 'In Field for drilling project.'
    },
    {
        id: 3,
        type: 'MAINTENANCE',
        title: 'Routine Maintenance',
        date: 'Sep 15, 2023',
        user: 'Workshop Tech',
        notes: 'Cleaned contacts, replaced chuck grease.'
    },
    {
        id: 4,
        type: 'COMMENT',
        title: 'Asset Tag Verified',
        date: 'Aug 20, 2023',
        user: 'Audit Team',
        notes: 'Scanned during quarterly inventory check. Location verified.'
    }
];

const maintenanceLogs: MaintenanceLog[] = [
    { id: 101, date: "2023-09-15", type: "Preventative", vendor: "Internal", cost: "$0", notes: "Greasing and cleaning", nextDueDate: "2024-03-15" },
    { id: 102, date: "2023-01-20", type: "Repair", vendor: "DeWalt Service Ctr", cost: "$120", notes: "Motor brush replacement", nextDueDate: "N/A" },
];

export default function ToolDetailPage() {
    const [activeTab, setActiveTab] = useState<'timeline' | 'maintenance'>('timeline');

    return (
        <div className="min-h-screen bg-gray-50/50 max-sm:my-12 font-sans">

            {/* 1. TOP HEADER: High level info & Actions */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-2 2xl:gap-4">
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <span className="text-10 sm:text-11 2xl:text-xs font-bold text-gray-500 uppercase tracking-wider">Power Tools / Drills</span>
                        <span className="px-2 py-0.5 rounded text-10 font-semibold bg-gray-200 text-gray-700">AOS Owned</span>
                    </div>
                    <h1 className="text-xl md:text-2xl 2xl:text-3xl font-bold text-gray-900">{toolDetails.name}</h1>
                    <div className="flex items-center gap-4 mt-2 text-xs md:text-13 2xl:text-sm text-gray-600">
                        <span className="flex items-center gap-1"><BsQrCode /> {toolDetails.assetId}</span>
                        <span className="flex items-center gap-1"><FiActivity /> Serial: {toolDetails.serialNumber}</span>
                    </div>
                </div>
                
                <div className="flex gap-2">
                <button className="flex items-center gap-2 px-3 py-1.5 2xl:px-4 2xl:py-2 bg-white border border-gray-300 rounded-md text-xs 2xl:text-sm font-medium text-gray-700 hover:bg-gray-50 transition">
                    <FiEdit3 /> Edit Details
                </button>
                <button className="flex items-center gap-2 px-3 py-1.5 2xl:px-4 2xl:py-2 bg-green-600 text-white rounded-md text-xs 2xl:text-sm font-medium cursor-pointer hover:bg-green-700 transition">
                    <FiArrowRightCircle /> Actions / Move
                </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                
                {/* --- LEFT COLUMN (Detailed Info) --- */}
                <div className="lg:col-span-2 space-y-4">
                
                    {/* A & B. General Info Card */}
                    <div className="bg-white rounded-md shadow-sm p-4 2xl:p-6">
                        <h3 className=" text-base 2xl:text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                        <FiTool className="text-blue-500" /> Tool Information
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                            <DetailRow label="Manufacturer" value={toolDetails.manufacturer} />
                            <DetailRow label="Model Number" value={toolDetails.model} />
                            <DetailRow label="Category" value={toolDetails.category} />
                            <DetailRow label="Department" value={toolDetails.department} />
                            <DetailRow label="Year of Mfg" value={toolDetails.yearOfManufacture} />
                            <DetailRow label="Purchase Date" value={toolDetails.purchaseDate} />
                        </div>
                        <div className="mt-6 pt-4 border-t border-gray-100">
                        <span className="text-11 md:text-xs text-gray-500 uppercase font-semibold">Description / Notes</span>
                        <p className="mt-1 text-13 md:text-sm text-gray-700 leading-relaxed">{toolDetails.description}</p>
                        </div>
                    </div>

                    {/* C. Location & Assignment Card */}
                    <div className="bg-white rounded-md shadow-sm p-4">
                        <h3 className="text-sm sm:text-base 2xl:text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                            <FiMapPin className="text-orange-500" /> Current Location & Assignment
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-4 bg-orange-50 rounded border border-orange-100">
                            <span className="text-10 md:text-11 2xl:text-xs text-orange-600 font-semibold uppercase">Current Site</span>
                            <p className="text-sm sm:text-base 2xl:text-lg font-bold text-gray-800 mt-1">{toolDetails.currentLocation}</p>
                            <p className=" text-11 2xl:text-xs text-gray-500 mt-2 flex items-center gap-1">
                            <FiClock /> Return Date: {toolDetails.purchaseDate}
                            </p>
                        </div>
                        <div className="p-4 bg-blue-50 rounded border border-blue-100">
                            <span className="text-10 md:text-11 2xl:text-xs text-blue-600 font-semibold uppercase">Assigned To</span>
                            <p className="text-sm sm:text-base 2xl:text-lg font-bold text-gray-800 mt-1">{toolDetails.assignedTo}</p>
                            <p className="text-11 2xl:text-xs text-gray-500 mt-2 flex items-center gap-1">
                            <FiUser /> Department: {toolDetails.department}
                            </p>
                        </div>
                        </div>
                    </div>


                    {/* G. Attachments Card */}
                    <div className="bg-white rounded-lg shadow-sm p-4">
                        <h3 className="text-sm sm:text-base 2xl:text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                        <FaHistory className="text-green-500" /> Tool History
                        </h3>
                        <ToolHistoryTable/>
                    </div>
                </div>

                {/* --- RIGHT COLUMN (Live Activity & Status) --- */}
                <div className="lg:col-span-1 space-y-6">
                
                    {/* Status Snapshot */}
                    <div className="bg-white rounded-lg shadow-sm  p-4 border-l-4 border-l-cyan-500">
                        <h3 className="text-11 sm:text-xs 2xl:text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Current Status</h3>
                        <div className="flex items-center justify-between mb-4">
                        <span className="text-xl sm:text-2xl 2xl:text-3xl font-bold text-cyan-600">{toolDetails.status}</span>
                        <span className="bg-green-100 text-green-700 text-11 2xl:text-xs px-2 py-0.5 2xl:py-1 rounded-full border border-green-200">
                            Condition: {toolDetails.condition}
                        </span>
                        </div>
                        <p className="text-11 2xl:text-xs text-gray-500 italic">
                        Next Maintenance Due: <span className="font-semibold text-gray-700">15 Mar 2024</span>
                        </p>
                    </div>

                    {/* TABS: Activity vs Maintenance */}
                    <div className="bg-white rounded-lg shadow-sm flex flex-col h-[600px]">
                        <div className="flex border-b border-gray-200">
                        <button 
                            onClick={() => setActiveTab('timeline')}
                            className={`flex-1 py-3 text-13 2xl:text-sm font-medium border-b-2 transition-colors ${activeTab === 'timeline' ? 'border-green-500 text-green-600' : 'border-transparent text-gray-500 hover:text-gray-700'}cursor-pointer`}
                        >
                            Activity Timeline
                        </button>
                        <button 
                            onClick={() => setActiveTab('maintenance')}
                            className={`flex-1 py-3 text-13 2xl:text-sm font-medium border-b-2 transition-colors ${activeTab === 'maintenance' ? 'border-green-500 text-green-600' : 'border-transparent text-gray-500 hover:text-gray-700'}cursor-pointer`}
                        >
                            Maintenance Logs
                        </button>
                        </div>

                        <div className="p-4 overflow-y-auto custom-scrollbar flex-1">
                        
                        {/* E. TOOL HISTORY TIMELINE */}
                        {activeTab === 'timeline' && (
                            <div className="space-y-6">
                            {timelineData.map((event) => (
                                <div key={event.id} className="relative pl-6 border-l-2 border-gray-200 last:border-0 pb-2">
                                {/* Timeline Dot */}
                                <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 border-white shadow-sm 
                                    ${event.type === 'MOVEMENT' ? 'bg-blue-500' : 
                                    event.type === 'STATUS_CHANGE' ? 'bg-orange-500' : 
                                    event.type === 'MAINTENANCE' ? 'bg-purple-500' : 'bg-gray-400'
                                    }`}></div>
                                
                                <div className="flex flex-col">
                                    <span className="text-11 2xl:text-xs text-gray-400 font-mono mb-0.5">{event.date}</span>
                                    <h4 className="text-xs sm:text-13 2xl:text-sm font-bold text-gray-800">{event.title}</h4>
                                    
                                    {/* Status Change Badge logic */}
                                    {event.type === 'STATUS_CHANGE' && (
                                    <div className="flex items-center gap-2 my-1">
                                        <span className="text-11 2xl:text-xs bg-gray-100 text-gray-600 px-1.5 rounded">{event.statusFrom}</span>
                                        <span className="text-gray-400 text-10">➜</span>
                                        <span className="text-11 2xl:text-xs bg-orange-100 text-orange-700 px-1.5 rounded">{event.statusTo}</span>
                                    </div>
                                    )}

                                    <p className="text-xs sm:text-13 2xl:text-sm text-gray-600 mt-1 bg-gray-50 p-1 py-0.5 2xl:p-2 rounded border border-gray-100">
                                    "{event.notes}"
                                    </p>
                                    <span className="text-11 2xl:text-xs text-gray-400 mt-1 flex items-center gap-1">
                                    By: <span className="font-medium text-gray-600">{event.user}</span>
                                    </span>
                                </div>
                                </div>
                            ))}
                            </div>
                        )}

                        {/* F. MAINTENANCE LIST */}
                        {activeTab === 'maintenance' && (
                            <div className="space-y-4">
                                {maintenanceLogs.map((log) => (
                                    <div key={log.id} className="p-3 border border-gray-200 rounded-md bg-gray-50">
                                        <div className="flex justify-between items-start mb-2">
                                            <span className="text-13 2xl:text-sm font-bold text-gray-800">{log.type}</span>
                                            <span className="text-11 2xl:text-xs text-gray-500">{log.date}</span>
                                        </div>
                                        <div className="space-y-1">
                                            <div className="flex justify-between text-11 2xl:text-xs">
                                            <span className="text-gray-500">Vendor:</span>
                                            <span className="font-medium">{log.vendor}</span>
                                            </div>
                                            <div className="mt-2 pt-2 border-t border-gray-200">
                                            <p className="text-11 2xl:text-xs text-gray-600 italic">"{log.notes}"</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <button className="w-full py-2 mt-4 text-xs font-medium text-green-600 border border-dashed border-green-300 rounded bg-green-50 cursor-pointer hover:bg-green-600 hover:text-white">
                                    + Log New Maintenance
                                </button>
                            </div>
                        )}

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

// Helper component for consistent rows
const DetailRow = ({ label, value }: { label: string, value: string }) => (
    <div className="flex flex-col">
        <span className="text-xs text-gray-500 font-medium">{label}</span>
        <span className="text-sm text-gray-900 font-medium mt-0.5">{value}</span>
    </div>
);