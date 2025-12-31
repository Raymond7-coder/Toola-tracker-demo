"use client";

import DeleteTool from "@/_components/modals/DeleteTool";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiSave, FiX, FiTool, FiMapPin, FiInfo, FiTrash2 } from "react-icons/fi";

// --- Types ---
interface ToolFormData {
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
    status: string;
    condition: string;
    location: string;
    assignedTo: string;
}

export default function AddToolPage({ params }: { params: { id: string } }) {
    const [loading, setLoading] = useState(true);

  // Initial Empty State
    const [formData, setFormData] = useState<ToolFormData>({
        toolName: "",
        category: "",
        type: "",
        department: "",
        serialNumber: "",
        assetId: "",
        manufacturer: "",
        model: "",
        purchaseDate: "",
        yearOfManufacture: "",
        notes: "",
        ownership: "AOS",
        status: "",
        condition: "",
        location: "",
        assignedTo: ""
    });


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Submitting updated data:", formData);
        // Add API call logic here
        alert("Tool updated successfully!");
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="min-h-screen max-sm:my-12 font-sans">

                {/* --- HEADER --- */}
                <div className=" mb-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
                        <Link href="/tools" className="hover:text-blue-600">Tools</Link>
                        <span>/</span>
                        <span>Add Tool</span>
                    </div>
                    <h1 className="text-base sm:text-xl 2xl:text-2xl font-bold text-gray-900">Add Tool</h1>
                    </div>

                    <div className="flex items-center gap-3">
                        <Link 
                            href="/tools"
                            className="px-3 py-1.5 2xl:px-4 2xl:py-2 bg-white border border-gray-300 rounded-md text-xs sm:text-13 2xl:text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center gap-2"
                        >
                            <FiX /> Cancel
                        </Link>
                        <button 
                            type="submit"
                            className="px-3 py-1.5 2xl:px-4 2xl:py-2 bg-green-600 rounded-md text-xs sm:text-13 2xl:text-sm font-medium text-white hover:bg-green-700 shadow-sm flex items-center gap-2"
                        >
                            <FiSave /> Save Changes
                        </button>
                    </div>
                </div>

                <div className=" grid grid-cols-1 lg:grid-cols-3 gap-4">
                    
                    {/* --- COLUMN 1: CORE DETAILS --- */}
                    <div className="lg:col-span-2 space-y-4">
                        
                        {/* Card 1: General Info */}
                        <div className="bg-white p-3 xsm:p-4 rounded-lg shadow-sm border border-gray-200">
                            <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wide mb-4 flex items-center gap-2">
                                <FiTool className="text-blue-500"/> Core Information
                            </h3>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <InputGroup label="Tool Name" name="toolName" value={formData.toolName} onChange={handleChange} />
                                <InputGroup label="Manufacturer" name="manufacturer" value={formData.manufacturer} onChange={handleChange} />
                                <InputGroup label="Model Number" name="model" value={formData.model} onChange={handleChange} />
                                
                                {/* Read Only Field */}
                                <div className="flex flex-col gap-1">
                                    <label className="text-xs font-semibold text-gray-500">Asset ID (Read Only)</label>
                                    <input 
                                        disabled 
                                        value={formData.assetId} 
                                        className="w-full border border-gray-200 bg-gray-100 text-gray-500 rounded px-3 py-2 text-sm cursor-not-allowed"
                                    />
                                </div>

                                <InputGroup label="Serial Number" name="serialNumber" value={formData.serialNumber} onChange={handleChange} />
                                <InputGroup label="Year of Mfg" name="yearOfManufacture" value={formData.yearOfManufacture} onChange={handleChange} />
                            </div>
                        </div>

                        {/* Card 2: Classification */}
                        <div className="bg-white p-3 xsm:p-4 rounded-lg shadow-sm border border-gray-200">
                            <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wide mb-4 flex items-center gap-2">
                                <FiInfo className="text-purple-500"/> Classification & Ownership
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <SelectGroup 
                                    label="Category" 
                                    name="category" 
                                    value={formData.category} 
                                    onChange={handleChange} 
                                    options={["Power Tools", "Hand Tools", "Lifting Equipment", "Testing Equipment", "Measuring Tools"]}
                                />
                                <SelectGroup 
                                    label="Type" 
                                    name="type" 
                                    value={formData.type} 
                                    onChange={handleChange} 
                                    options={["Drill", "Grinder", "Jack", "Meter", "Level", "Generator", "Wrench Set"]}
                                />
                                <SelectGroup 
                                    label="Department" 
                                    name="department" 
                                    value={formData.department} 
                                    onChange={handleChange} 
                                    options={["Construction", "Maintenance", "Electrical", "Fabrication", "Surveying", "Automotive", "Operations"]}
                                />
                                <SelectGroup 
                                    label="Ownership" 
                                    name="ownership" 
                                    value={formData.ownership} 
                                    onChange={handleChange} 
                                    options={["AOS", "Department", "Rental"]}
                                />
                                <InputGroup label="Purchase Date" name="purchaseDate" type="date" value={formData.purchaseDate} onChange={handleChange} />
                            </div>
                        </div>

                        {/* Card 3: Notes */}
                        <div className="bg-white p-3 xsm:p-4 rounded-lg shadow-sm border border-gray-200">
                            <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wide mb-4">Description / Notes</h3>
                            <textarea 
                                name="notes"
                                rows={4}
                                value={formData.notes}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
                                placeholder="Enter details about tool condition, included accessories, etc..."
                            />
                        </div>
                    </div>

                    {/* --- COLUMN 2: STATUS & SETTINGS --- */}
                    <div className="space-y-4">
                        
                        {/* Card 4: Status & Location */}
                        <div className="bg-white p-3 xsm:p-4 rounded-lg shadow-sm border border-gray-200">
                            <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wide mb-4 flex items-center gap-2">
                                <FiMapPin className="text-orange-500"/> Status & Location
                            </h3>
                            
                            <div className="flex flex-col gap-4">
                                <SelectGroup 
                                    label="Current Status" 
                                    name="status" 
                                    value={formData.status} 
                                    onChange={handleChange} 
                                    options={["Available", "In Field", "Pending Return", "Under Maintenance", "Damaged", "Not Accounted For"]}
                                />
                                <SelectGroup 
                                    label="Physical Condition" 
                                    name="condition" 
                                    value={formData.condition} 
                                    onChange={handleChange} 
                                    options={["New", "Good", "Fair", "Poor", "Damaged"]}
                                />

                                <hr className="border-gray-100 my-2" />

                                <InputGroup label="Current Location" name="location" value={formData.location} onChange={handleChange} />
                                <InputGroup label="Assigned To (Person/Team)" name="assignedTo" value={formData.assignedTo} onChange={handleChange} />
                            </div>
                        </div>


                    </div>

                </div>
            </form>
        </>
    );
}

// --- Reusable Components for Cleaner Code ---

const InputGroup = ({ label, name, value, onChange, type = "text" }: any) => (
    <div className="flex flex-col gap-1">
        <label className="text-xs font-semibold text-gray-700">{label}</label>
        <input 
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
        />
    </div>
);

const SelectGroup = ({ label, name, value, onChange, options }: any) => (
    <div className="flex flex-col gap-1">
        <label className="text-xs font-semibold text-gray-700">{label}</label>
        <div className="relative">
            <select 
                name={name}
                value={value}
                onChange={onChange}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-800 appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            >
                <option value="">Select...</option>
                {options.map((opt: string) => (
                    <option key={opt} value={opt}>{opt}</option>
                ))}
            </select>
            {/* Custom Arrow Icon */}
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
        </div>
    </div>
);