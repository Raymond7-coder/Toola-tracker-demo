import { useState } from "react";

export const AdminProfileSettings = () => {
    const [passwords, setPasswords] = useState({ current: "", new: "", confirm: "" });

    return (
        <div className="max-w-4xl p-4">
            <div className="grid  gap-8">
                
                {/* Left: Personal Details */}
                <div className="space-y-3">
                <h3 className=" text-sm sm:text-base 2xl:text-lg font-bold text-gray-900 ">Profile Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">Full Name</label>
                        <input type="text" defaultValue="Admin User" className="w-full border border-gray-300 rounded px-3 py-1.5 2xl:py-2 text-13 2xl:text-sm outline-none focus:border-green-500" />
                    </div>
                    <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">Email Address</label>
                        <input type="email" defaultValue="admin@company.com" className="w-full border border-gray-300 rounded px-3 py-1.5 2xl:py-2 text-13 2xl:text-sm bg-gray-50 text-gray-500 outline-none focus:border-green-500" disabled />
                        <p className="text-10 text-gray-400 mt-1">Contact IT support to change your email.</p>
                    </div>
                </div>
                <div className="w-full flex justify-end">
                    <button className="px-4 py-1.5 2xl:py-2 bg-green-600 text-white text-xs 2xl:text-sm font-medium rounded hover:bg-green-700 cursor-pointer">
                        Update Profile
                    </button>
                </div>
                </div>

                <div className="w-full border-b border-b-gray-200"></div>

                {/* Right: Security / Password */}
                <div className="space-y-4">
                    <h3 className=" text-sm sm:text-base 2xl:text-lg font-bold text-gray-900 ">Security</h3>
                    <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">Current Password</label>
                        <input 
                        type="password" 
                        className="w-full border border-gray-300 rounded px-3 py-1.5 2xl:py-2 text-13 2xl:text-sm outline-none focus:border-green-500"
                        onChange={e => setPasswords({...passwords, current: e.target.value})}
                        />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">New Password</label>
                        <input 
                            type="password" 
                            className="w-full border border-gray-300 rounded px-3 py-1.5 2xl:py-2 text-13 2xl:text-sm outline-none focus:border-green-500"
                            onChange={e => setPasswords({...passwords, new: e.target.value})}
                        />
                        </div>
                        <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">Confirm New</label>
                        <input 
                            type="password" 
                            className="w-full border border-gray-300 rounded px-3 py-1.5 2xl:py-2 text-13 2xl:text-sm outline-none focus:border-green-500"
                            onChange={e => setPasswords({...passwords, confirm: e.target.value})}
                        />
                        </div>
                    </div>
                    
                    <div className="w-full flex justify-end">
                        <button className="px-4 py-1.5 2xl:py-2 border border-gray-300 text-gray-700 text-xs 2xl:text-sm outline-none focus:border-green-500 font-medium rounded hover:bg-gray-50 cursor-pointer">
                            Change Password
                        </button>

                    </div>
                </div>

            </div>
        </div>
    );
};