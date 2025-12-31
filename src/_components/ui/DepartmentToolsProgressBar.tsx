const DepartmentToolsProgressBar = () => {
    return ( 
        <div className="flex flex-col gap-y-1 bg-white border border-gray-200 rounded-sm py-3 px-3 md:px-4 shadow-sm">
                {/* Header Section */}
                <div className="flex gap-x-2 items-end">
                    <h1 className="text-lg md:text-xl 2xl:text-2xl font-bold text-gray-800">4,389</h1>
                    <small className="mb-1 text-xs  2xl:text-sm text-gray-500 font-medium uppercase tracking-wide">Total Tools</small>
                </div>

                {/* The Stacked Progress Bar */}
                {/* Note: Widths are calculated percentages based on 4389 total */}
                <div className="flex gap-x-0.5 h-3 xl:h-4 rounded-sm mt-2 w-full bg-gray-100">
                    {/* Available (The remaining balance) - 47.5% */}
                    <div className="bg-green-600 w-[47.5%] first:rounded-l-sm" title="Available"></div>
                    
                    {/* In Field - 34.2% */}
                    <div className="bg-cyan-600 w-[34.2%]" title="In Field"></div>
                    
                    {/* Pending Return - 13.7% */}
                    <div className="bg-yellow-500 w-[13.7%]" title="Pending Return"></div>
                    
                    {/* Under Maintenance - 2.8% */}
                    <div className="bg-purple-600 w-[2.8%]" title="Under Maintenance"></div>
                    
                    {/* Damaged - 1.1% */}
                    <div className="bg-orange-500 w-[1.1%]" title="Damaged"></div>
                    
                    {/* Not Accounted - 0.7% */}
                    <div className="bg-red-600 w-[0.7%] last:rounded-r-sm" title="Not Accounted For"></div>
                </div>

                {/* Legend / Key Section */}
                <div className="flex items-center gap-x-4 gap-y-2 mt-3 flex-wrap w-full">
                    
                    {/* Available */}
                    <div className="flex gap-x-1.5 items-center">
                        <div className="h-2 w-2 rounded-full bg-green-600"></div>
                        <p className="text-xs 2xl:text-13 text-gray-600">Available (2,085)</p>
                    </div>

                    {/* In Field */}
                    <div className="flex gap-x-1.5 items-center">
                        <div className="h-2 w-2 rounded-full bg-cyan-600"></div>
                        <p className="text-xs 2xl:text-13 text-gray-600">In Field (1,500)</p>
                    </div>

                    {/* Pending Return */}
                    <div className="flex gap-x-1.5 items-center">
                        <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                        <p className="text-xs 2xl:text-13 text-gray-600">Pending (600)</p>
                    </div>

                    {/* Maintenance */}
                    <div className="flex gap-x-1.5 items-center">
                        <div className="h-2 w-2 rounded-full bg-purple-600"></div>
                        <p className="text-xs 2xl:text-13 text-gray-600">Under Maintenance (124)</p>
                    </div>

                    {/* Damaged */}
                    <div className="flex gap-x-1.5 items-center">
                        <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                        <p className="text-xs 2xl:text-13 text-gray-600">Damaged (50)</p>
                    </div>

                    {/* Not Accounted For */}
                    <div className="flex gap-x-1.5 items-center">
                        <div className="h-2 w-2 rounded-full bg-red-600"></div>
                        <p className="text-xs 2xl:text-13 text-gray-600">Missing (30)</p>
                    </div>
                </div>
            </div>
     );
}
 
export default DepartmentToolsProgressBar;