
"use client";

import { useState } from "react";
import GeneralDelete from "../modals/GeneralDelete";
import GeneralEdit from "../modals/GeneralEdit";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

type TabType =
    | "DIVISIONS"
    | "PRODUCT_LINES"
    | "SUB_UNITS"
    | "DEPARTMENTS"
    | "USERS"
    | "TOOL_CATEGORIES"
    | "TOOL_TYPES"
    | "MY_ACCOUNT";

type ManagementItem = {
    id: number;
    name: string;
    count: number;
    description: string;
};

// MOCK DATA

const mockDivisions = [
    {
        id: 1,
        name: "Upstream Operations",
        count: 12,
        description: "Exploration and production activities."
    },
    {
        id: 2,
        name: "Downstream Services",
        count: 8,
        description: "Refining and distribution."
    }
];

const mockToolCategories = [
    {
        id: 1,
        name: "Power Tools",
        count: 150,
        description: "Electric and battery operated tools."
    },
    {
        id: 2,
        name: "Lifting Equipment",
        count: 45,
        description: "Jacks, hoists, and cranes."
    }
];

export const GenericManagementTable = ({
    type,
    search = ""
}: {
    type: TabType;
    search?: string;
}) => {

    const [selected, setSelected] =
        useState<ManagementItem | null>(null);

    const [deleteCategory, setDeleteCategory] =
        useState("");

    const [deleteModal, setDeleteModal] =
        useState(false);

    const [editModal, setEditModal] =
        useState(false);

    // Determine which records to display

    const data = type.includes("TOOL")
        ? mockToolCategories
        : mockDivisions;

    const label =
        type === "DIVISIONS" ? "Departments" : "Tools";

    // Filter records using the search field

    const filteredData = data.filter((item) =>
        `${item.name} ${item.description} ${item.count}`
            .toLowerCase()
            .includes(search.trim().toLowerCase())
    );

    const openDeleteModal = (
        item: ManagementItem,
        type: string
    ) => {
        setSelected(item);
        setDeleteCategory(type);
        setDeleteModal(true);
    };

    const openEditModal = (
        item: ManagementItem,
        type: string
    ) => {
        setSelected(item);
        setDeleteCategory(type);
        setEditModal(true);
    };

    return (
        <>

            {/* DELETE MODAL */}

            {deleteModal && selected && (
                <GeneralDelete
                    name={selected.name}
                    onClose={() => setDeleteModal(false)}
                    open={deleteModal}
                    type={deleteCategory}
                />
            )}

            {/* EDIT MODAL */}

            {editModal && selected && (
                <GeneralEdit
                    name={selected.name}
                    onClose={() => setEditModal(false)}
                    open={editModal}
                    type={deleteCategory}
                />
            )}

            <div className="w-full min-w-0">

                {/* MOBILE MANAGEMENT CARDS */}

                <div className="md:hidden divide-y divide-gray-100">

                    {filteredData.map((item) => (

                        <div
                            key={item.id}
                            className="p-3 sm:p-4"
                        >

                            <div className="flex items-start justify-between gap-3">

                                {/* RECORD INFORMATION */}

                                <div className="flex-1 min-w-0">

                                    <h3 className="text-sm font-semibold text-gray-900 break-words">
                                        {item.name}
                                    </h3>

                                    <p className="text-xs text-gray-500 leading-relaxed mt-1 break-words">
                                        {item.description}
                                    </p>

                                    <div className="flex flex-wrap items-center gap-2 mt-3">

                                        <span className="text-[11px] text-gray-500">
                                            Associated {label}:
                                        </span>

                                        <span className="px-2 py-1 bg-green-50 text-green-700 rounded-md text-[11px] font-semibold">
                                            {item.count}
                                        </span>

                                    </div>

                                </div>

                                {/* ACTION BUTTONS */}

                                <div className="flex items-center gap-1 shrink-0">

                                    <button
                                        aria-label={`Edit ${item.name}`}
                                        className="p-2 text-gray-500 bg-gray-50 hover:text-green-600 hover:bg-green-50 rounded-md cursor-pointer transition"
                                        onClick={() =>
                                            openEditModal(
                                                item,
                                                type.toLowerCase()
                                            )
                                        }
                                    >
                                        <FiEdit2 size={14} />
                                    </button>

                                    <button
                                        aria-label={`Delete ${item.name}`}
                                        className="p-2 text-gray-500 bg-gray-50 hover:text-red-600 hover:bg-red-50 rounded-md cursor-pointer transition"
                                        onClick={() =>
                                            openDeleteModal(
                                                item,
                                                type.toLowerCase()
                                            )
                                        }
                                    >
                                        <FiTrash2 size={14} />
                                    </button>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

                {/* DESKTOP MANAGEMENT TABLE */}

                <div className="hidden md:block w-full overflow-x-auto">

                    <table className="w-full whitespace-nowrap border-collapse text-left">

                        <thead>

                            <tr className="bg-gray-50 text-11 2xl:text-xs text-gray-500 border-b border-gray-200">

                                <th className="px-6 py-3 font-medium uppercase">
                                    Name
                                </th>

                                <th className="px-6 py-3 font-medium uppercase">
                                    Description
                                </th>

                                <th className="px-6 py-3 font-medium uppercase">
                                    Associated {label}
                                </th>

                                <th className="px-6 py-3 font-medium uppercase text-right">
                                    Actions
                                </th>

                            </tr>

                        </thead>

                        <tbody className="divide-y divide-gray-100">

                            {filteredData.map((item) => (

                                <tr
                                    key={item.id}
                                    className="hover:bg-gray-50/50"
                                >

                                    <td className="px-6 py-4 text-xs sm:text-13 2xl:text-sm font-semibold text-gray-900">
                                        {item.name}
                                    </td>

                                    <td className="px-6 py-4 text-xs sm:text-13 2xl:text-sm text-gray-500">
                                        {item.description}
                                    </td>

                                    <td className="px-6 py-4">

                                        <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-11 2xl:text-xs font-bold">
                                            {item.count}
                                        </span>

                                    </td>

                                    <td className="px-6 py-4">

                                        <div className="flex justify-end gap-2">

                                            <button
                                                aria-label={`Edit ${item.name}`}
                                                className="p-1.5 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded cursor-pointer"
                                                onClick={() =>
                                                    openEditModal(
                                                        item,
                                                        type.toLowerCase()
                                                    )
                                                }
                                            >
                                                <FiEdit2 />
                                            </button>

                                            <button
                                                aria-label={`Delete ${item.name}`}
                                                className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded cursor-pointer"
                                                onClick={() =>
                                                    openDeleteModal(
                                                        item,
                                                        type.toLowerCase()
                                                    )
                                                }
                                            >
                                                <FiTrash2 />
                                            </button>

                                        </div>

                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>

                {/* EMPTY STATE */}

                {filteredData.length === 0 && (

                    <div className="py-10 px-4 text-center">

                        <p className="text-sm font-medium text-gray-600">
                            No records found.
                        </p>

                        <p className="text-xs text-gray-400 mt-1">
                            {search
                                ? "Try a different search term."
                                : "Click Add New to create a record."}
                        </p>

                    </div>

                )}

            </div>

        </>
    );
};
