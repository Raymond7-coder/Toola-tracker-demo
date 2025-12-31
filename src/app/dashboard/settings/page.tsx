"use client";

import { useState } from "react";
import { 
FiUsers, FiLayers, FiGrid, FiBriefcase, 
FiTool, FiSettings, FiPlus, FiSearch, 
FiEdit2, FiTrash2, FiMoreVertical, 
FiUser
} from "react-icons/fi";
import { BsBuilding } from "react-icons/bs";
import EditUser from "@/_components/modals/EditUser";
import GeneralDelete from "@/_components/modals/GeneralDelete";
import { GenericManagementTable } from "@/_components/ui/GenericManagementTable";
import { AdminProfileSettings } from "@/_components/ui/AdminProfileSettings";
import GeneralAdd from "@/_components/modals/GeneralAdd";
import AddUser from "@/_components/modals/AddUser";

    // --- Types ---
type TabType = 'DIVISIONS' | 'PRODUCT_LINES' | 'SUB_UNITS' | 'DEPARTMENTS' | 'USERS' | 'TOOL_CATEGORIES' | 'TOOL_TYPES' | 'MY_ACCOUNT';


const mockUsers = [
    { id: 1, name: "Sarah Jenkins", email: "sarah.j@company.com", role: "Admin", status: "Active" },
    { id: 2, name: "Mike Ross", email: "mike.r@company.com", role: "Store Keeper", status: "Active" },
    { id: 3, name: "John Doe", email: "john.d@company.com", role: "Viewer", status: "Inactive" },
];



export default function AdminSettingsPage() {
    const [activeTab, setActiveTab] = useState<TabType>('USERS');
    const [search, setSearch] = useState("");
    const [editUserModal, setEditUserModal] = useState(false)
    const [selectedUser, setSelectedUser] = useState<any | null>("")
    const [selected, setSelected] = useState<any | null>("")
    const [category, setCategory] = useState("")
    const [deleteModal, setDeleteModal] = useState(false)
    const [addModal, setAddModal] = useState(false)
    const [addUserModal, setAddUserModal] = useState(false)

    // --- Helper to render the Sidebar Navigation ---
    const NavItem = ({ id, label, icon }: { id: TabType, label: string, icon: any }) => (
        <button
        onClick={() => setActiveTab(id)}
        className={`w-full flex items-center gap-3 px-4 py-3 text-xs cursor-pointer sm:text-13 2xl:text-sm font-medium transition-colors rounded-md mb-1
            ${activeTab === id 
            ? ' text-green-700  rounded-l-none' 
            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
            }`}
        >
        <span className="text-lg">{icon}</span>
        {label}
        </button>
    );

    const openEditUserModal = (user : any) => {
        setSelectedUser(user)
        setEditUserModal(true)
    }
    const openDeleteModal = (data : any, type : string) => {
        setSelected(data)
        setCategory(type)
        setDeleteModal(true)
    }
    const openAddModal = (type : string) => {
        setCategory(type)
        setAddModal(true)
    }
    const openAddUserModal = () => {
        setAddUserModal(true)
    }

    return (
        <>
            {
                editUserModal &&
                <EditUser
                    name={selectedUser.name}
                    onClose={() => setEditUserModal(false)}
                    open={editUserModal}
                />
            }
            {
                deleteModal &&
                <GeneralDelete
                    name={selected.name}
                    onClose={() => setDeleteModal(false)}
                    open={deleteModal}
                    type={category}
                />
            }
            {
                addModal &&
                <GeneralAdd
                    onClose={() => setAddModal(false)}
                    open={addModal}
                    type={category.toLowerCase()}
                />
            }
            {
                addUserModal &&
                <AddUser
                    onClose={() => setAddUserModal(false)}
                    open={addUserModal}
                />
            }
            <div className="min-h-screen bg-gray-50/50 font-sans">
        
                <div className="max-w-7xl mx-auto">
                    {/* Page Header */}
                    <div className="mb-8">
                    <h1 className="text-base sm:text-lg md:text-xl 2xl:text-2xl font-bold text-gray-900 flex items-center gap-2">
                        Settings
                    </h1>
                    <p className= "text-xs sm:text-13 2xl:text-sm text-gray-500 mt-1">Manage organization structure, user roles, and tool classifications.</p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-y-6">
                    
                    {/* --- LEFT SIDEBAR --- */}
                    <aside className="w-full md:w-56 shrink-0">
                        <div className="">
                        
                        <div className="mb-2 text-11 2xl:text-xs font-bold text-gray-400 uppercase tracking-wider">PERSONAL</div>
                        <NavItem id="MY_ACCOUNT" label="My Account" icon={<FiUser />} />

                        <div className="mb-2 mt-3 text-11 2xl:text-xs font-bold text-gray-400 uppercase tracking-wider">Access Control</div>
                        <NavItem id="USERS" label="Users & Roles" icon={<FiUsers />} />

                        <div className="mt-3 mb-2 text-11 2xl:text-xs font-bold text-gray-400 uppercase tracking-wider">Organization</div>
                        <NavItem id="DIVISIONS" label="Divisions" icon={<BsBuilding />} />
                        <NavItem id="PRODUCT_LINES" label="Product Lines" icon={<FiLayers />} />
                        <NavItem id="SUB_UNITS" label="Sub-Units" icon={<FiGrid />} />
                        <NavItem id="DEPARTMENTS" label="Departments" icon={<FiBriefcase />} />

                        <div className="mt-3 mb-2 text-11 2xl:text-xs font-bold text-gray-400 uppercase tracking-wider">Inventory Settings</div>
                        <NavItem id="TOOL_CATEGORIES" label="Tool Categories" icon={<FiTool />} />
                        <NavItem id="TOOL_TYPES" label="Tool Types" icon={<FiSettings />} />
                        
                        </div>
                    </aside>

                    {/* --- RIGHT CONTENT AREA --- */}
                    <main className="flex-1 bg-white min-w-0 rounded-lg shadow-sm  flex flex-col">
                        
                        {/* Toolbar */}
                        <div className="p-4 border-b border-gray-200 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                        <div>
                            <h2 className="text-base 2xl:text-lg font-bold text-gray-900">
                            {activeTab.replace('_', ' ')} Management
                            </h2>
                            <p className= "text-11 2xl:text-xs text-gray-500">View and manage records for {activeTab.toLowerCase().replace('_', ' ')}.</p>
                        </div>

                        {
                            activeTab !== 'MY_ACCOUNT' &&
                            <div className="flex flex-wrap gap-3">
                                <div className="relative">
                                    <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-13" />
                                    <input 
                                        type="text" 
                                        placeholder="Search..." 
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                        className="pl-8 pr-4 py-1.5 2xl:py-2 border border-gray-300 rounded-sm text-xs sm:text-13 2xl:text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                                    />
                                </div>
                                <button 
                                    className="flex items-center gap-2 px-4 py-1.5 2xl:py-2 bg-green-600 text-white rounded-sm text-xs sm:text-13 2xl:text-sm font-medium hover:bg-green-700 transition shadow-sm cursor-pointer"
                                    onClick={() => 
                                        activeTab === 'USERS' ?
                                        openAddUserModal()
                                        :
                                        openAddModal(activeTab)
                                    }
                                >
                                    <FiPlus /> Add New
                                </button>
                            </div>
                        }
                        </div>

                        {/* Dynamic Content Body */}
                        <div className="p-0">

                        {activeTab === 'MY_ACCOUNT' && <AdminProfileSettings />}
                        
                        {/* 1. USER MANAGEMENT TABLE */}
                        {activeTab === 'USERS' && (
                            <div className="w-full overflow-x-auto">
                                <table className="w-full whitespace-nowrap text-left">
                                    <thead>
                                    <tr className="bg-gray-50 text-11 2xl:text-xs text-gray-500 border-b border-gray-200">
                                        <th className="px-6 py-3 font-medium uppercase">Full Name</th>
                                        <th className="px-6 py-3 font-medium uppercase">Email Address</th>
                                        <th className="px-6 py-3 font-medium uppercase">Role</th>
                                        <th className="px-6 py-3 font-medium uppercase">Status</th>
                                        <th className="px-6 py-3 font-medium uppercase text-right">Actions</th>
                                    </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                    {mockUsers.map(user => (
                                        <tr key={user.id} className="hover:bg-gray-50/50">
                                        <td className="px-6 py-4 flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-11 2xl:text-xs font-bold">
                                            {user.name.charAt(0)}
                                            </div>
                                            <span className="text-xs sm:text-13 2xl:text-sm font-medium text-gray-900">{user.name}</span>
                                        </td>
                                        <td className="px-6 py-4 text-xs sm:text-13 2xl:text-sm text-gray-500">{user.email}</td>
                                        <td className="px-6 py-4 text-xs sm:text-13 2xl:text-sm">
                                            {user.role}
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`px-2 py-1 rounded-full text-11 2xl:text-xs font-medium ${user.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                                            {user.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right flex justify-end gap-2">
                                            <button 
                                                className="p-1.5 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded cursor-pointer"
                                                onClick={() => openEditUserModal(user)}
                                            ><FiEdit2 /></button>
                                            <button className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded cursor-pointer" onClick={() => openDeleteModal(user, "user")}><FiTrash2 /></button>
                                        </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        )}

                        {/* 2. GENERIC MANAGEMENT TABLE (Used for Divisions, Depts, Categories, etc.) */}
                        {activeTab !== 'USERS' && activeTab !==  'MY_ACCOUNT' && (
                            <GenericManagementTable type={activeTab} />
                        )}

                        </div>
                    </main>
                    </div>
                </div>
                </div>
        </>
    );
}


