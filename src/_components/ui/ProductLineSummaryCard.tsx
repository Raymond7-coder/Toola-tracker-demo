const ProductLineSummaryCard = () => {
    return ( 
        <div className="bg-white shadow-sm rounded-sm py-2 px-3 2xl:py-3 2xl:px-4 pb-4">
            <div className="flex justify-between">
                <h3 className="text-sm 2xl:text-base font-medium">D&E-01</h3>
                <p className="text-xs sm:text-13 2xl:text-sm font-medium text-gray-600">2 hours ago</p>
            </div>
            <div className="mt-3 flex flex-col gap-y-3 2xl:gap-y-4">
                <div className="flex justify-between items-center">
                    <p className="text-xs sm:text-13 2xl:text-sm font-medium text-gray-600">Total Tools:</p>
                    <p className="text-xs sm:text-13 2xl:text-sm font-medium">547</p>
                </div>
                <div className="flex justify-between items-center ">
                    <p className="text-xs sm:text-13 2xl:text-sm font-medium text-gray-600">In Use:</p>
                    <p className="text-xs sm:text-13 2xl:text-sm font-medium text-cyan-600">234</p>
                </div>
                <div className="flex justify-between items-center ">
                    <p className="text-xs sm:text-13 2xl:text-sm font-medium text-gray-600">Available:</p>
                    <p className="text-xs sm:text-13 2xl:text-sm font-medium text-green-600">278</p>
                </div>
                <div className="flex justify-between items-center ">
                    <p className="text-xs sm:text-13 2xl:text-sm font-medium text-gray-600">Damaged:</p>
                    <p className="text-xs sm:text-13 2xl:text-sm font-medium text-red-600">33</p>
                </div>
            </div>
        </div>
     );
}
 
export default ProductLineSummaryCard;