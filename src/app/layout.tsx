
import Sidebar from "@/_components/ui/Sidebar";
import SplashScreen from "@/_components/ui/SplashScreen";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <SplashScreen />

            <Sidebar />

            <main
                className="
                    bg-gray-50
                    min-h-screen
                    min-w-0
                    font-sans
                    px-4
                    pt-20
                    pb-24
                    sm:ml-50
                    sm:p-5
                "
            >
                {children}
            </main>
        </>
    );
}
