"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";
import {FaRegEye, FaRegEyeSlash} from "react-icons/fa"

const LoginForm : React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setTimeout(() => {
            router.push("/dashboard");
            
        }, 500);
    }

    return ( 
        <form action="" className="flex flex-col gap-y-4 w-full">
            <div className="flex flex-col">
                <label htmlFor="email" className="text-xs xsm:text-13 font-medium">Email Address:</label>
                <input type="email" name="" id="" placeholder="abc@aosorwell.com" className="text-13 border border-gray-200 rounded-sm mt-1 px-2 py-1 ouline-none" required autoComplete="email"/>
            </div>
            <div className="flex flex-col">
                <label htmlFor="password" className="text-xs xsm:text-13 font-medium">Password:</label>
                <div className="relative">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Enter your password"
                        required
                        autoComplete="current-password"
                        className="w-full text-13 border border-gray-200 rounded-sm mt-1 px-2 py-1 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                    
                    {/* Toggle button */}
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700 focus:outline-none cursor-pointer"
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                    >
                        {showPassword ? (
                        <FaRegEyeSlash className="h-4 w-4" />
                        ) : (
                        <FaRegEye className="h-4 w-4" />
                        )}
                    </button>
                </div>
            </div>
            <p className="text-xs text-right w-full font-medium hover:text-green-600 cursor-pointer transition">Forgot Password</p>
            <button
                className="bg-green-600 px-3 py-1.5 rounded-sm font-medium text-white w-full text-xs disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer hover:bg-green-700 transition"
                onClick={handleSubmit}
                disabled={loading}
            >
                {loading ? "Signing in..." : "Sign In"}
            </button>
        </form>
     );
}
 
export default LoginForm;