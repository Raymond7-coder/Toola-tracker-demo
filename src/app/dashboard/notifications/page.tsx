"use client";

import Link from "next/link";
import { useState } from "react";
import { 
    FiBell, FiCheck, FiTrash2, FiAlertCircle, 
    FiTool, FiClock, FiInfo, FiCheckCircle, FiFilter 
} from "react-icons/fi";

// --- Types ---
type NotificationType = 'CRITICAL' | 'WARNING' | 'INFO' | 'SUCCESS';

interface Notification {
    id: number;
    type: NotificationType;
    title: string;
    message: string;
    timestamp: string;
    isRead: boolean;
    relatedToolId?: string; // Optional link to tool details
}

// --- Mock Data ---
const initialNotifications: Notification[] = [
    {
        id: 1,
        type: 'CRITICAL',
        title: 'Tool Overdue: Hammer Drill 18V',
        message: 'This tool was expected to be returned yesterday by John Smith. Please follow up.',
        timestamp: '2 hours ago',
        isRead: false,
        relatedToolId: 'AOS-1001'
    },
    {
        id: 2,
        type: 'WARNING',
        title: 'Maintenance Due: Hydraulic Jack',
        message: 'Routine calibration is due in 3 days. Schedule maintenance to avoid downtime.',
        timestamp: '5 hours ago',
        isRead: false,
        relatedToolId: 'AOS-1002'
    },
    {
        id: 3,
        type: 'INFO',
        title: 'Status Update',
        message: 'Digital Multimeter (AOS-1003) was successfully transferred to Site B.',
        timestamp: '1 day ago',
        isRead: true,
        relatedToolId: 'AOS-1003'
    },
    {
        id: 4,
        type: 'CRITICAL',
        title: 'Damaged Tool Reported',
        message: 'Angle Grinder reported as "Damaged - Cord Frayed" by Mike Ross.',
        timestamp: '1 day ago',
        isRead: true,
        relatedToolId: 'AOS-1004'
    },
    {
        id: 5,
        type: 'SUCCESS',
        title: 'Audit Completed',
        message: 'The monthly inventory audit for "Warehouse A" has been finalized.',
        timestamp: '2 days ago',
        isRead: true
    }
];

export default function NotificationsPage() {
    const [notifications, setNotifications] = useState<Notification[]>(initialNotifications);
    const [filter, setFilter] = useState<'ALL' | 'UNREAD'>('ALL');

    // --- Actions ---

    const markAsRead = (id: number) => {
        setNotifications(prev => prev.map(n => n.id === id ? { ...n, isRead: true } : n));
    };

    const markAllAsRead = () => {
        setNotifications(prev => prev.map(n => ({ ...n, isRead: true })));
    };

    const deleteNotification = (id: number) => {
        setNotifications(prev => prev.filter(n => n.id !== id));
    };

    // --- Filtering ---
    const filteredList = filter === 'ALL' 
        ? notifications 
        : notifications.filter(n => !n.isRead);

    const unreadCount = notifications.filter(n => !n.isRead).length;

return (
    <div className="min-h-screen bg-gray-50/50 max-sm:my-12">

        <div className="">
            
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
                <h1 className="text-base sm:text-xl 2xl:text-2xl font-bold text-gray-900 flex items-center gap-2">
                Notifications
                {unreadCount > 0 && (
                    <span className="bg-red-500 text-white text-[9px] sm:text-10 2xl:text-11 font-semibold px-1 sm:px-2 sm:py-0.5 rounded-full">
                    {unreadCount} New
                    </span>
                )}
                </h1>
                <p className="text-xs sm:text-13 2xl:text-sm text-gray-500">Manage your alerts and tool updates.</p>
            </div>

            <div className="flex items-center gap-2">
                <button 
                onClick={markAllAsRead}
                className="text-11 sm:text-xs 2xl:text-sm text-gray-600 hover:bg-green-600 font-medium px-3 py-1 sm:py-1.5 border border-gray-200 rounded-md bg-white hover:text-white cursor-pointer transition"
                >
                Mark all read
                </button>
            </div>
            </div>

            {/* Filters */}
            <div className="flex items-center gap-4 mb-4 border-b border-gray-200 pb-1">
            <button 
                onClick={() => setFilter('ALL')}
                className={`pb-3 text-xs sm:text-13 2xl:text-sm font-medium transition-colors relative ${filter === 'ALL' ? 'text-green-700 border-b-2 border-green-600 -mb-1.5' : 'text-gray-500 hover:text-gray-700'} px-2 cursor-pointer`}
            >
                All Notifications
            </button>
            <button 
                onClick={() => setFilter('UNREAD')}
                className={`pb-3 text-xs sm:text-13 2xl:text-sm font-medium transition-colors relative ${filter === 'UNREAD' ? 'text-green-700 border-b-2 border-green-600 -mb-1.5' : 'text-gray-500 hover:text-gray-700'} cursor-pointer`}
            >
                Unread
            </button>
            </div>

            {/* Notification List */}
            <div className="space-y-3">
            {filteredList.length === 0 ? (
                <div className="text-center py-12 bg-white rounded-lg border border-gray-100 shadow-sm">
                <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <FiBell className="text-gray-300 text-2xl" />
                </div>
                <h3 className="text-gray-900 font-medium">All caught up!</h3>
                <p className="text-gray-500 text-13 2xl:text-sm">You have no {filter === 'UNREAD' ? 'unread' : ''} notifications.</p>
                </div>
            ) : (
                filteredList.map((note) => (
                <div 
                    key={note.id} 
                    className={`group flex flex-col xsm:flex-row items-start gap-4 p-2 sm:p-4 rounded-lg border transition-all ${
                    note.isRead 
                        ? 'bg-white border-gray-100 opacity-75 hover:opacity-100' 
                        : 'bg-white border-l-4 border-l-green-600 border-y-gray-200 border-r-gray-200 shadow-sm'
                    }`}
                >
                    {/* Icon Column */}
                    <div className="mt-1">
                    <NotificationIcon type={note.type} />
                    </div>

                    {/* Content Column */}
                    <div className="flex-1">
                    <div className="flex justify-between items-start">
                        <h4 className={`text-13 sm:text-sm font-semibold ${note.isRead ? 'text-gray-700' : 'text-gray-900'}`}>
                        {note.title}
                        </h4>
                        <span className="text-11 sm:text-xs text-gray-400 whitespace-nowrap ml-2">{note.timestamp}</span>
                    </div>
                    
                    <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
                        {note.message}
                    </p>

                    {/* Optional Action Link */}
                    {note.relatedToolId && (
                        <div className="mt-2">
                        <Link 
                            href={`/dashboard/tools/fishing/view/${note.relatedToolId}`} 
                            className="text-xs font-medium text-green-600 hover:text-green-800 hover:underline flex items-center gap-1 w-fit"
                        >
                            View Tool Details &rarr;
                        </Link>
                        </div>
                    )}
                    </div>

                    {/* Action Buttons (Visible on Hover or if Unread) */}
                    <div className="flex xsm:flex-col gap-2 sm:opacity-0 group-hover:opacity-100 transition-opacity">
                        {!note.isRead && (
                            <button 
                            onClick={() => markAsRead(note.id)}
                            title="Mark as read"
                            className="p-1.5 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-full transition cursor-pointer"
                            >
                                <FiCheck />
                            </button>
                        )}
                        <button 
                            onClick={() => deleteNotification(note.id)}
                            title="Delete notification"
                            className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-full transition cursor-pointer"
                        >
                            <FiTrash2 />
                        </button>
                    </div>
                </div>
                ))
            )}
            </div>

        </div>
        </div>
    );
}

// --- Helper Component for Icons ---
const NotificationIcon = ({ type }: { type: NotificationType }) => {
    switch (type) {
        case 'CRITICAL':
            return <div className="p-2 bg-red-100 text-red-600 rounded-full"><FiAlertCircle /></div>;
        case 'WARNING':
            return <div className="p-2 bg-orange-100 text-orange-600 rounded-full"><FiClock /></div>;
        case 'SUCCESS':
            return <div className="p-2 bg-green-100 text-green-600 rounded-full"><FiCheckCircle /></div>;
        case 'INFO':
            default:
            return <div className="p-2 bg-green-100 text-green-600 rounded-full"><FiInfo /></div>;
    }
};