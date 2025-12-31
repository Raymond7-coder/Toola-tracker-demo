import Sidebar from "@/_components/ui/Sidebar";

export default function DashboardLayout ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return ( 
        <>
            <Sidebar/>
            <main className="bg-gray-50  min-h-screen font-sans sm:ml-50 p-5">
                {children}
            </main>
        </>
    );
}
