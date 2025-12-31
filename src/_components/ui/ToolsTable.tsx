"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { CgArrowsExchange } from "react-icons/cg";
import { FaEdit, FaRegEye } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import ChangeToolStatus from "../modals/ChangeToolStatus";
import DeleteTool from "../modals/DeleteTool";
import LogToolMovement from "../modals/LogToolMovement";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FiMove } from "react-icons/fi";

interface Tool {
    toolName: string;
    category: string;
    type: string;
    department: string;
    serialNumber: string;
    assetId: string;
    manufacturer: string;
    model: string;
    purchaseDate: string;
    yearOfManufacture: string;
    notes: string;
    ownership: string;
    // You can use a Union type here if statuses are fixed, e.g., "In Field" | "Available" | ...
    status: string; 
    lastUpdated: string;
    location: string;
    assignedTo: string | null;
    lastComment: string;
}

const toolsData : Tool[] = [
  // ... (Your data array remains unchanged)
    {
        toolName: "Hammer Drill 18V",
        category: "Power Tools",
        type: "Drill",
        department: "Construction",
        serialNumber: "HD-9928-XA",
        assetId: "AOS-1001",
        manufacturer: "DeWalt",
        model: "DCD996",
        purchaseDate: "2023-01-15",
        yearOfManufacture: "2022",
        notes: "Heavy duty, includes spare battery.",
        ownership: "AOS",
        status: "In Field",
        lastUpdated: "2023-10-05",
        location: "Site B - Downtown",
        assignedTo: "John Smith",
        lastComment: "Battery charger cable slightly frayed."
    },
    {
        toolName: "Hydraulic Jack 10T",
        category: "Lifting Equipment",
        type: "Jack",
        department: "Maintenance",
        serialNumber: "HJ-4421-BB",
        assetId: "AOS-1002",
        manufacturer: "Big Red",
        model: "T91004",
        purchaseDate: "2022-11-20",
        yearOfManufacture: "2022",
        notes: "Standard bottle jack.",
        ownership: "Department",
        status: "Available",
        lastUpdated: "2023-10-01",
        location: "Warehouse A - Shelf 4",
        assignedTo: null,
        lastComment: "Returned clean and verified functional."
    },
    {
        toolName: "Digital Multimeter",
        category: "Testing Equipment",
        type: "Meter",
        department: "Electrical",
        serialNumber: "DM-8832-FL",
        assetId: "AOS-1003",
        manufacturer: "Fluke",
        model: "87V",
        purchaseDate: "2023-05-10",
        yearOfManufacture: "2023",
        notes: "High precision true-RMS.",
        ownership: "AOS",
        status: "Pending Return",
        lastUpdated: "2023-10-10",
        location: "Site A - Uptown",
        assignedTo: "Sarah Connor",
        lastComment: "Project completed, scheduled for drop off."
    },
    {
        toolName: "Angle Grinder 4.5\"",
        category: "Power Tools",
        type: "Grinder",
        department: "Fabrication",
        serialNumber: "AG-1102-MK",
        assetId: "AOS-1004",
        manufacturer: "Makita",
        model: "9557PB",
        purchaseDate: "2021-08-15",
        yearOfManufacture: "2021",
        notes: "Paddle switch model.",
        ownership: "Department",
        status: "Under Maintenance",
        lastUpdated: "2023-10-12",
        location: "Repair Shop",
        assignedTo: "Tech: Mike Ross",
        lastComment: "Replacing worn carbon brushes."
    },
    {
        toolName: "Laser Level Kit",
        category: "Measuring Tools",
        type: "Level",
        department: "Surveying",
        serialNumber: "LL-5590-BS",
        assetId: "AOS-1005",
        manufacturer: "Bosch",
        model: "GLL3-330",
        purchaseDate: "2023-03-22",
        yearOfManufacture: "2022",
        notes: "3-Plane leveling and alignment-line.",
        ownership: "AOS",
        status: "Not Accounted For",
        lastUpdated: "2023-09-15",
        location: "Unknown",
        assignedTo: "Last: David Kim",
        lastComment: "User reported lost during transport."
    },
    {
        toolName: "Socket Set 100pc",
        category: "Hand Tools",
        type: "Wrench Set",
        department: "Automotive",
        serialNumber: "SS-0043-CR",
        assetId: "AOS-1006",
        manufacturer: "Craftsman",
        model: "CMMT12033",
        purchaseDate: "2020-06-10",
        yearOfManufacture: "2019",
        notes: "Metric and Standard.",
        ownership: "AOS",
        status: "Damaged",
        lastUpdated: "2023-10-11",
        location: "Warehouse B - Quarantine",
        assignedTo: null,
        lastComment: "Case broken, missing 10mm and 12mm sockets."
    },
    {
        toolName: "Portable Generator",
        category: "Power Generation",
        type: "Generator",
        department: "Operations",
        serialNumber: "PG-7721-HN",
        assetId: "AOS-1007",
        manufacturer: "Honda",
        model: "EU2200i",
        purchaseDate: "2022-02-01",
        yearOfManufacture: "2021",
        notes: "Super quiet inverter generator.",
        ownership: "AOS",
        status: "In Field",
        lastUpdated: "2023-10-09",
        location: "Site C - Remote Camp",
        assignedTo: "Alice Johnson",
        lastComment: "Refueled and oil checked."
    }
];

const ToolsTable : React.FC = () => {
    // 1. Changed state to hold the INDEX (number) or null, not just true/false
    const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);
    const [deleteModal, setDeleteModal] = useState(false)
    const [changeModal, setChangeModal] = useState(false)
    const [movement, setMovement] = useState(false)
    const [selectedTool, setSelectedTool] = useState<Tool | null>(null);



    const toggleMenu = (index : number) => {
        if (openMenuIndex === index) {
            setOpenMenuIndex(null); // Close if clicking the same one
        } else {
            setOpenMenuIndex(index); // Open the new one
        }
    };

    const openChangeStatusModal = (tool: Tool) => {
        setSelectedTool(tool);
        setChangeModal(true);
        setOpenMenuIndex(null); // Close the dropdown menu
    };
    const openMovementModal = (tool: Tool) => {
        setSelectedTool(tool);
        setMovement(true);
        setOpenMenuIndex(null); // Close the dropdown menu
    };
    const openDeleteToolModal = (tool: Tool) => {
        setSelectedTool(tool);
        setDeleteModal(true);
        setOpenMenuIndex(null); // Close the dropdown menu
    };

    return (
        <>
            {
                changeModal && selectedTool &&
                <ChangeToolStatus
                    name={selectedTool.toolName + " - " + selectedTool.assetId}
                    open={changeModal}
                    onClose={() => setChangeModal(false)}
                />
            }
            {
                deleteModal && selectedTool &&
                <DeleteTool
                    name={selectedTool.toolName + " - " + selectedTool.assetId}
                    open={deleteModal}
                    onClose={() => setDeleteModal(false)}
                />
            }
            {
                movement && selectedTool &&
                <LogToolMovement
                    name={selectedTool.toolName + " - " + selectedTool.assetId}
                    open={movement}
                    onClose={() => setMovement(false)}
                />
            }
            <style>{`
                .custom-scrollbar::-webkit-scrollbar {
                    height: 8px; /* Increased slightly for better usability */
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

            {/* 2. Invisible Backdrop to close menu when clicking anywhere else */}
            {openMenuIndex !== null && (
                <div 
                    className="fixed inset-0 z-10 bg-transparent" 
                    onClick={() => setOpenMenuIndex(null)}
                ></div>
            )}

            {/* Added pb-32 so the last row's menu doesn't get cut off by the container */}
            <div className="w-full overflow-x-auto custom-scrollbar pb-32">
                <table className="w-full whitespace-nowrap">
                    <thead>
                        <tr className="text-xs 2xl:text-13 text-gray-600 border-b border-b-gray-200 text-left bg-gray-100">
                            <th className="p-2 sticky left-0 bg-gray-100 z-10 border-r border-gray-200">Tool</th>
                            <th className="p-2">Serial Number</th>
                            <th className="p-2">Type</th>
                            <th className="p-2">Category</th>
                            <th className="p-2">Manufacturer</th>
                            <th className="p-2">Model</th>
                            <th className="p-2">Purchase Date</th>
                            <th className="p-2">Year of Manufacture</th>
                            <th className="p-2">Notes</th>
                            <th className="p-2">Ownership</th>
                            <th className="p-2">Status</th>
                            <th className="p-2">Last Updated</th>
                            <th className="p-2">Location</th>
                            <th className="p-2">Assigned To</th>
                            <th className="p-2">Last Comment</th>
                            <th className="p-2 text-center sticky right-0 bg-gray-100 z-10">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {toolsData.map((el, index) => {
                            return (
                                <tr key={index} className="border-b border-gray-200  text-xs 2xl:text-13 text-gray-700">
                                    <td className="p-2 sticky left-0 bg-white z-10 border-r border-gray-100">
                                        <div className="flex flex-col">
                                            <h3 className=" text-xs 2xl:text-13 font-semibold">{el.toolName}</h3>
                                            <small className="text-10 2xl:text-xs text-gray-600">{el.assetId}</small>
                                        </div>
                                    </td>
                                    <td className="p-2">{el.serialNumber}</td>
                                    <td className="p-2">{el.type}</td>
                                    <td className="p-2">{el.category}</td>
                                    <td className="p-2">{el.manufacturer}</td>
                                    <td className="p-2">{el.model}</td>
                                    <td className="p-2">{el.purchaseDate}</td>
                                    <td className="p-2">{el.yearOfManufacture}</td>
                                    <td className="p-2 max-w-[200px] truncate" title={el.notes}>{el.notes}</td>
                                    <td className="p-2">{el.ownership}</td>
                                    <td className="p-2">
                                        <span className={`px-2 py-0.5 rounded-full text-11 font-medium 
                                            ${el.status === 'Available' ? 'bg-green-100 text-green-700' :
                                                el.status === 'In Field' ? 'bg-cyan-100 text-cyan-700' :
                                                el.status === 'Damaged' ? 'bg-orange-100 text-orange-700' :
                                                el.status === 'Pending Return' ? 'bg-yellow-100 text-yellow-700' :
                                                el.status === 'Under Maintenance' ? 'bg-purple-100 text-purple-700' :
                                                'bg-red-100 text-red-700'
                                            }`}>
                                            {el.status}
                                        </span>
                                    </td>
                                    <td className="p-2">{el.lastUpdated}</td>
                                    <td className="p-2">{el.location}</td>
                                    <td className="p-2">{el.assignedTo || "-"}</td>
                                    <td className="p-2 max-w-[200px] truncate" title={el.lastComment}>{el.lastComment}</td>
                                    
                                    {/* --- MENU COLUMN --- */}
                                    <td className="p-2 text-center sticky right-0 bg-white z-10">
                                        <div className="relative">
                                            {/* 3. Button toggles specific index */}
                                            <button 
                                                onClick={() => toggleMenu(index)}
                                                className="p-1 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
                                            >
                                                <BsThreeDots className="text-gray-500 text-lg" />
                                            </button>

                                            {/* 4. Conditional Rendering based on Index */}
                                            {openMenuIndex === index && (
                                                <div 
                                                    className="absolute right-8 top-0 mt-2 w-48 bg-white rounded-md shadow-xl border border-gray-100 z-50 flex flex-col p-1 text-left cursor-pointer"
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    <Link className="px-3 py-2 hover:bg-gray-50 rounded-sm text-gray-700 flex gap-x-2 items-center cursor-pointer" href={`${el.department}/view/${el.assetId}`}>
                                                        <FaRegEye className="text-gray-400"/> View Tool
                                                    </Link>
                                                    <Link className="px-3 py-2 hover:bg-gray-50 rounded-sm text-gray-700 flex gap-x-2 items-center" href={`${el.department}/edit/${el.assetId}`}>
                                                        <FaEdit className="text-gray-400"/> Edit Tool
                                                    </Link>
                                                    <button 
                                                        className="px-3 py-2 hover:bg-gray-50 rounded-sm text-gray-700 flex gap-x-2 items-center w-full text-left"
                                                        onClick={() => openChangeStatusModal(el)}
                                                    >
                                                        <CgArrowsExchange className="text-gray-400"/> Change Status
                                                    </button>
                                                    <button 
                                                        className="px-3 py-2 hover:bg-gray-50 rounded-sm text-gray-700 flex gap-x-2 items-center w-full text-left"
                                                        onClick={() => openMovementModal(el)}
                                                    >
                                                        <FiMove className="text-gray-400"/> Log Movement
                                                    </button>
                                                    <button 
                                                        className="px-3 py-2 hover:bg-red-50 rounded-sm text-red-600 flex gap-x-2 items-center w-full text-left"
                                                        onClick={() => openDeleteToolModal(el)}
                                                    >
                                                        <RiDeleteBinLine className="text-red-400"/> Delete Tool
                                                    </button>
                                                </div>
                                            )}
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

export default ToolsTable;