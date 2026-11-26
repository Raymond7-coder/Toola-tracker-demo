
"use client";

import { useState } from "react";
import {
    FiUsers,
    FiLayers,
    FiGrid,
    FiBriefcase,
    FiTool,
    FiSettings,
    FiPlus,
    FiSearch,
    FiEdit2,
    FiTrash2,
    FiUser,
    FiChevronDown
} from "react-icons/fi";

import { BsBuilding } from "react-icons/bs";
import EditUser from "@/_components/modals/EditUser";
import GeneralDelete from "@/_components/modals/GeneralDelete";
import { GenericManagementTable } from "@/_components/ui/GenericManagementTable";
import { AdminProfileSettings } from "@/_components/ui/AdminProfileSettings";
import GeneralAdd from "@/_components/modals/GeneralAdd";
import AddUser from "@/_components/modals/AddUser";

type TabType =
    | "DIVISIONS"
    | "PRODUCT_LINES"
    | "SUB_UNITS"
    | "DEPARTMENTS"
    | "USERS"
    | "TOOL_CATEGORIES"
    | "TOOL_TYPES"
    | "MY_ACCOUNT";

const mockUsers = [
    {
        id: 1,
        name: "Sarah Jenkins",
        email: "sarah.j@company.com",
        role: "Admin",
        status: "Active"
    },
    {
        id: 2,
        name: "Mike Ross",
        email: "mike.r@company.com",
        role: "Store Keeper",
        status: "Active"
    },
    {
        id: 3,
        name: "John Doe",
        email: "john.d@company.com",
        role: "Viewer",
        status: "Inactive"
    }
];

const tabLabels: Record<TabType, string> = {
    MY_ACCOUNT: "My Account",
    USERS: "Users & Roles",
    DIVISIONS: "Divisions",
    PRODUCT_LINES: "Product Lines",
    SUB_UNITS: "Sub-Units",
    DEPARTMENTS: "Departments",
    TOOL_CATEGORIES: "Tool Categories",
    TOOL_TYPES: "Tool Types"
};

const navigationGroups = [
    {
        title: "Personal",
        items: [
            { id: "MY_ACCOUNT", icon: FiUser }
        ]
    },
    {
        title: "Access Control",
        items: [
            { id: "USERS", icon: FiUsers }
        ]
    },
    {
        title: "Organization",
        items: [
            { id: "DIVISIONS", icon: BsBuilding },
            { id: "PRODUCT_LINES", icon: FiLayers },
            { id: "SUB_UNITS", icon: FiGrid },
            { id: "DEPARTMENTS", icon: FiBriefcase }
        ]
    },
    {
        title: "Inventory Settings",
        items: [
            { id: "TOOL_CATEGORIES", icon: FiTool },
            { id: "TOOL_TYPES", icon: FiSettings }
        ]
    }
] as const;

export default function AdminSettingsPage() {
    const [activeTab, setActiveTab] =
        useState<TabType>("USERS");

    const [search, setSearch] = useState("");

    const [editUserModal, setEditUserModal] =
        useState(false);

    const [selectedUser, setSelectedUser] =
        useState<(typeof mockUsers)[number] | null>(null);

    const [selected, setSelected] =
        useState<{ name: string } | null>(null);

    const [category, setCategory] = useState("");

    const [deleteModal, setDeleteModal] =
        useState(false);

    const [addModal, setAddModal] =
        useState(false);

    const [addUserModal, setAddUserModal] =
        useState(false);

    const changeTab = (tab: TabType) => {
        setActiveTab(tab);
        setSearch("");
    };

    const filteredUsers = mockUsers.filter((user) =>
        `${user.name} ${user.email} ${user.role} ${user.status}`
            .toLowerCase()
            .includes(search.trim().toLowerCase())
    );

    const openEditUserModal = (
        user: (typeof mockUsers)[number]
    ) => {
        setSelectedUser(user);
        setEditUserModal(true);
    };

    const openDeleteModal = (
        data: { name: string },
        type: string
    ) => {
        setSelected(data);
        setCategory(type);
        setDeleteModal(true);
    };

    const openAddModal = (type: string) => {
        setCategory(type);
        setAddModal(true);
    };

    const openAddUserModal = () => {
        setAddUserModal(true);
    };

    return (
        <>
            {editUserModal && selectedUser && (
                <EditUser
                    name={selectedUser.name}
                    onClose={() => setEditUserModal(false)}
                    open={editUserModal}
                />
            )}

            {deleteModal && selected && (
                <GeneralDelete
                    name={selected.name}
                    onClose={() => setDeleteModal(false)}
                    open={deleteModal}
                    type={category}
                />
            )}

            {addModal && (
                <GeneralAdd
                    onClose={() => setAddModal(false)}
                    open={addModal}
                    type={category.toLowerCase()}
                />
            )}

            {addUserModal && (
                <AddUser
                    onClose={() => setAddUserModal(false)}
                    open={addUserModal}
                />
            )}

            <div className="min-h-screen bg-gray-50/50 font-sans pb-24 sm:pb-6">

                <div className="max-w-7xl mx-auto min-w-0">

                    {/* PAGE HEADER */}

                    <div className="mb-5 md:mb-8">

                        <h1 className="text-lg md:text-xl 2xl:text-2xl font-bold text-gray-900">
                            Settings
                        </h1>

                        <p className="text-xs sm:text-13 2xl:text-sm text-gray-500 mt-1">
                            Manage organization structure,
                            user roles, and tool classifications.
                        </p>

                    </div>

                    {/* MOBILE SETTINGS SELECTOR */}

                    <div className="md:hidden mb-4">

                        <label
                            htmlFor="settings-section"
                            className="block text-xs font-medium text-gray-500 mb-2"
                        >
                            Settings section
                        </label>

                        <div className="relative">

                            <FiSettings className="absolute left-3 top-1/2 -translate-y-1/2 text-green-700 pointer-events-none" />

                            <select
                                id="settings-section"
                                value={activeTab}
                                onChange={(e) =>
                                    changeTab(e.target.value as TabType)
                                }
                                className="w-full appearance-none bg-white border border-gray-200 rounded-lg pl-10 pr-10 py-3 text-sm font-semibold text-gray-800 shadow-sm outline-none focus:ring-2 focus:ring-green-500"
                            >
                                {navigationGroups.map((group) => (
                                    <optgroup
                                        key={group.title}
                                        label={group.title}
                                    >
                                        {group.items.map((item) => (
                                            <option
                                                key={item.id}
                                                value={item.id}
                                            >
                                                {tabLabels[item.id]}
                                            </option>
                                        ))}
                                    </optgroup>
                                ))}
                            </select>

                            <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />

                        </div>

                    </div>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-6">

                        {/* DESKTOP SETTINGS SIDEBAR */}

                        <aside className="hidden md:block md:w-48 xl:w-56 shrink-0">

                            {navigationGroups.map((group) => (
                                <div
                                    key={group.title}
                                    className="mb-4"
                                >

                                    <div className="mb-2 text-11 2xl:text-xs font-bold text-gray-400 uppercase tracking-wider">
                                        {group.title}
                                    </div>

                                    {group.items.map((item) => {
                                        const Icon = item.icon;

                                        return (
                                            <button
                                                key={item.id}
                                                onClick={() =>
                                                    changeTab(item.id)
                                                }
                                                className={`w-full flex items-center gap-3 px-4 py-3 text-xs sm:text-13 2xl:text-sm font-medium transition-colors rounded-md mb-1 cursor-pointer ${
                                                    activeTab === item.id
                                                        ? "bg-green-50 text-green-700"
                                                        : "text-gray-600 hover:bg-gray-100"
                                                }`}
                                            >
                                                <Icon className="text-lg shrink-0" />

                                                {tabLabels[item.id]}

                                            </button>
                                        );
                                    })}

                                </div>
                            ))}

                        </aside>

                        {/* MAIN CONTENT */}

                        <main className="flex-1 w-full min-w-0 bg-white rounded-lg shadow-sm border border-gray-100">

                            {/* TOOLBAR */}

                            <div className="p-3 sm:p-4 border-b border-gray-200 flex flex-col xl:flex-row xl:items-center justify-between gap-3">

                                <div>

                                    <h2 className="text-sm sm:text-base 2xl:text-lg font-bold text-gray-900">

                                        {activeTab === "MY_ACCOUNT"
                                            ? "My Account"
                                            : activeTab === "USERS"
                                            ? "Users Management"
                                            : `${tabLabels[activeTab]} Management`}

                                    </h2>

                                    <p className="text-xs text-gray-500 mt-1">

                                        {activeTab === "MY_ACCOUNT"
                                            ? "Manage your personal account settings."
                                            : `View and manage records for ${tabLabels[activeTab].toLowerCase()}.`}

                                    </p>

                                </div>

                                {activeTab !== "MY_ACCOUNT" && (

                                    <div className="flex items-center gap-2 w-full xl:w-auto">

                                        <div className="relative flex-1 min-w-0">

                                            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />

                                            <input
                                                type="text"
                                                aria-label="Search records"
                                                placeholder="Search..."
                                                value={search}
                                                onChange={(e) =>
                                                    setSearch(e.target.value)
                                                }
                                                className="w-full min-w-0 pl-8 pr-2 py-2 border border-gray-300 rounded-md text-xs sm:text-13 2xl:text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                                            />

                                        </div>

                                        <button
                                            className="flex items-center justify-center gap-1.5 px-3 sm:px-4 py-2 bg-green-600 text-white rounded-md text-xs sm:text-13 2xl:text-sm font-medium hover:bg-green-700 transition shadow-sm cursor-pointer shrink-0 whitespace-nowrap"
                                            onClick={() =>
                                                activeTab === "USERS"
                                                    ? openAddUserModal()
                                                    : openAddModal(activeTab)
                                            }
                                        >
                                            <FiPlus />
                                            Add New
                                        </button>

                                    </div>

                                )}

                            </div>

                            {/* CONTENT BODY */}

                            <div className="min-w-0">

                                {activeTab === "MY_ACCOUNT" && (
                                    <AdminProfileSettings />
                                )}

                                {/* USERS MANAGEMENT */}

                                {activeTab === "USERS" && (
                                    <>

                                        {/* MOBILE USER CARDS */}

                                        <div className="md:hidden divide-y divide-gray-100">

                                            {filteredUsers.map((user) => (

                                                <div
                                                    key={user.id}
                                                    className="p-3 sm:p-4"
                                                >

                                                    <div className="flex items-start gap-3">

                                                        <div className="w-10 h-10 shrink-0 rounded-full bg-green-100 flex items-center justify-center text-green-700 text-sm font-bold">

                                                            {user.name.charAt(0)}

                                                        </div>

                                                        <div className="flex-1 min-w-0">

                                                            <h3 className="text-sm font-semibold text-gray-900">
                                                                {user.name}
                                                            </h3>

                                                            <p className="text-xs text-gray-500 break-all mt-1">
                                                                {user.email}
                                                            </p>

                                                            <div className="flex flex-wrap items-center gap-2 mt-2">

                                                                <span className="text-xs text-gray-600">
                                                                    {user.role}
                                                                </span>

                                                                <span className={`px-2 py-1 rounded-full text-[10px] font-medium ${
                                                                    user.status === "Active"
                                                                        ? "bg-green-100 text-green-700"
                                                                        : "bg-gray-100 text-gray-500"
                                                                }`}>
                                                                    {user.status}
                                                                </span>

                                                            </div>

                                                        </div>

                                                        <div className="flex items-center gap-1 shrink-0">

                                                            <button
                                                                aria-label={`Edit ${user.name}`}
                                                                className="p-2 text-gray-500 bg-gray-50 hover:text-green-600 hover:bg-green-50 rounded-md cursor-pointer"
                                                                onClick={() =>
                                                                    openEditUserModal(user)
                                                                }
                                                            >
                                                                <FiEdit2 size={14} />
                                                            </button>

                                                            <button
                                                                aria-label={`Delete ${user.name}`}
                                                                className="p-2 text-gray-500 bg-gray-50 hover:text-red-600 hover:bg-red-50 rounded-md cursor-pointer"
                                                                onClick={() =>
                                                                    openDeleteModal(user, "user")
                                                                }
                                                            >
                                                                <FiTrash2 size={14} />
                                                            </button>

                                                        </div>

                                                    </div>

                                                </div>

                                            ))}

                                            {filteredUsers.length === 0 && (
                                                <div className="py-10 px-4 text-center text-sm text-gray-500">
                                                    No users found.
                                                </div>
                                            )}

                                        </div>

                                        {/* DESKTOP USERS TABLE */}

                                        <div className="hidden md:block w-full overflow-x-auto">

                                            <table className="w-full whitespace-nowrap text-left">

                                                <thead>

                                                    <tr className="bg-gray-50 text-11 2xl:text-xs text-gray-500 border-b border-gray-200">

                                                        <th className="px-6 py-3 font-medium uppercase">
                                                            Full Name
                                                        </th>

                                                        <th className="px-6 py-3 font-medium uppercase">
                                                            Email Address
                                                        </th>

                                                        <th className="px-6 py-3 font-medium uppercase">
                                                            Role
                                                        </th>

                                                        <th className="px-6 py-3 font-medium uppercase">
                                                            Status
                                                        </th>

                                                        <th className="px-6 py-3 font-medium uppercase text-right">
                                                            Actions
                                                        </th>

                                                    </tr>

                                                </thead>

                                                <tbody className="divide-y divide-gray-100">

                                                    {filteredUsers.map((user) => (

                                                        <tr
                                                            key={user.id}
                                                            className="hover:bg-gray-50/50"
                                                        >

                                                            <td className="px-6 py-4">

                                                                <div className="flex items-center gap-3">

                                                                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-11 2xl:text-xs font-bold">
                                                                        {user.name.charAt(0)}
                                                                    </div>

                                                                    <span className="text-xs sm:text-13 2xl:text-sm font-medium text-gray-900">
                                                                        {user.name}
                                                                    </span>

                                                                </div>

                                                            </td>

                                                            <td className="px-6 py-4 text-xs sm:text-13 2xl:text-sm text-gray-500">
                                                                {user.email}
                                                            </td>

                                                            <td className="px-6 py-4 text-xs sm:text-13 2xl:text-sm">
                                                                {user.role}
                                                            </td>

                                                            <td className="px-6 py-4">

                                                                <span className={`px-2 py-1 rounded-full text-11 2xl:text-xs font-medium ${
                                                                    user.status === "Active"
                                                                        ? "bg-green-100 text-green-700"
                                                                        : "bg-gray-100 text-gray-500"
                                                                }`}>
                                                                    {user.status}
                                                                </span>

                                                            </td>

                                                            <td className="px-6 py-4">

                                                                <div className="flex justify-end gap-2">

                                                                    <button
                                                                        aria-label={`Edit ${user.name}`}
                                                                        className="p-1.5 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded cursor-pointer"
                                                                        onClick={() =>
                                                                            openEditUserModal(user)
                                                                        }
                                                                    >
                                                                        <FiEdit2 />
                                                                    </button>

                                                                    <button
                                                                        aria-label={`Delete ${user.name}`}
                                                                        className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded cursor-pointer"
                                                                        onClick={() =>
                                                                            openDeleteModal(user, "user")
                                                                        }
                                                                    >
                                                                        <FiTrash2 />
                                                                    </button>

                                                                </div>

                                                            </td>

                                                        </tr>

                                                    ))}

                                                    {filteredUsers.length === 0 && (
                                                        <tr>
                                                            <td
                                                                colSpan={5}
                                                                className="py-10 text-center text-sm text-gray-500"
                                                            >
                                                                No users found.
                                                            </td>
                                                        </tr>
                                                    )}

                                                </tbody>

                                            </table>

                                        </div>

                                    </>
                                )}

                                {/* OTHER MANAGEMENT SECTIONS */}

                                {activeTab !== "USERS" &&
                                    activeTab !== "MY_ACCOUNT" && (

                                        <div className="w-full min-w-0 overflow-x-auto">

                                            <GenericManagementTable
                                                type={activeTab}
                                            />

                                        </div>

                                    )}

                            </div>

                        </main>

                    </div>

                </div>

            </div>

        </>
    );
}
