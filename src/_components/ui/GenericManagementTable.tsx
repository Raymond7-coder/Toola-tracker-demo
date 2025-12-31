import { useState } from "react";
import GeneralDelete from "../modals/GeneralDelete";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import GeneralEdit from "../modals/GeneralEdit";

type TabType = 'DIVISIONS' | 'PRODUCT_LINES' | 'SUB_UNITS' | 'DEPARTMENTS' | 'USERS' | 'TOOL_CATEGORIES' | 'TOOL_TYPES' | 'MY_ACCOUNT';

    // --- Mock Data ---
const mockDivisions = [
    { id: 1, name: "Upstream Operations", count: 12, description: "Exploration and production activities." },
    { id: 2, name: "Downstream Services", count: 8, description: "Refining and distribution." },
];

const mockToolCategories = [
    { id: 1, name: "Power Tools", count: 150, description: "Electric and battery operated tools." },
    { id: 2, name: "Lifting Equipment", count: 45, description: "Jacks, hoists, and cranes." },
];

export const GenericManagementTable = ({ type }: { type: TabType }) => {
    const [selected, setSelected] = useState<any | null>("")
    const [deleteCategory, setDeleteCategory] = useState("")
    const [deleteModal, setDeleteModal] = useState(false)
    const [editModal, setEditModal] = useState(false)
    
    // Decide which data to show based on type
    const data = type.includes('TOOL') ? mockToolCategories : mockDivisions;
    const label = type === 'DIVISIONS' ? 'Departments' : 'Tools'; // Contextual label

    const openDeleteModal = (data : any, type : string) => {
        setSelected(data)
        setDeleteCategory(type)
        setDeleteModal(true)
    }

    const openEditModal = (data : any, type : string) => {
        setSelected(data)
        setDeleteCategory(type)
        setEditModal(true)
    }

    return (
        <>
            {
                deleteModal &&
                <GeneralDelete
                    name={selected.name}
                    onClose={() => setDeleteModal(false)}
                    open={deleteModal}
                    type={deleteCategory}
                />
            }
            {
                editModal &&
                <GeneralEdit
                    name={selected.name}
                    onClose={() => setEditModal(false)}
                    open={editModal}
                    type={deleteCategory}
                />
            }
            <div className="w-full overflow-x-auto">
            <table className="w-full whitespace-nowrap border-collapse">
                <thead>
                <tr className="bg-gray-50 text-11 2xl:text-xs text-gray-500 border-b border-gray-200">
                    <th className="px-6 py-3 font-medium uppercase">Name</th>
                    <th className="px-6 py-3 font-medium uppercase">Description</th>
                    <th className="px-6 py-3 font-medium uppercase">Associated {label}</th>
                    <th className="px-6 py-3 font-medium uppercase text-right">Actions</th>
                </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                {data.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50/50">
                    <td className="px-6 py-4 text-xs sm:text-13 2xl:text-sm font-semibold text-gray-900">{item.name}</td>
                    <td className="px-6 py-4 text-xs sm:text-13 2xl:text-sm text-gray-500">{item.description}</td>
                    <td className="px-6 py-4">
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-11 2xl:text-xs font-bold">
                        {item.count}
                        </span>
                    </td>
                    <td className="px-6 py-4 text-right flex justify-end gap-2">
                        <button className="p-1.5 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded cursor-pointer"  onClick={() => openEditModal(item, type.toLowerCase())}><FiEdit2 /></button>
                        <button className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded cursor-pointer"  onClick={() => openDeleteModal(item, type.toLowerCase())}><FiTrash2 /></button>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
            
            {/* Empty State visual if needed */}
            {data.length === 0 && (
                <div className="p-12 text-center text-gray-400 text-sm">
                No records found. Click "Add New" to create one.
                </div>
            )}
            </div>
        </>
    );
};
