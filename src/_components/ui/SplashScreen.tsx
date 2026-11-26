
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/assets/images/logo.png";

export default function SplashScreen() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 600);

        return () => clearTimeout(timer);
    }, []);

    if (!loading) return null;

    return (
        <div
            role="status"
            aria-label="Loading Toola Tracker"
            className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center"
        >
            <Image
                src={logo}
                alt="Toola Tracker"
                priority
                className="w-16 h-auto sm:w-20 motion-safe:animate-[spin_0.6s_ease-in-out_1]"
            />

            <p className="mt-5 text-xs font-semibold tracking-[0.2em] text-gray-500">
                TOOLA TRACKER
            </p>
        </div>
    );
}
