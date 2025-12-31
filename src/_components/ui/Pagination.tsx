
type Props = {
  from: number;
  to: number;
  total: number
};

const Pagination = ({from, to, total} : Props) => {
    return ( 
        <div className="flex items-center w-full justify-between pt-0">
            
            <div className="flex flex-wrap gap-y-2 items-center w-full justify-between">
                <div>
                    <p className="text-13 2xl:text-sm text-gray-600 ">
                        Showing <span className=" text-black font-semibold">{from}</span> to <span className="text-black font-semibold">{to}</span> of{' '}
                        <span className="text-black font-semibold">{total}</span> results
                    </p>
                </div>
                <div className="flex gap-x-2">
                    <button
                        className="text-xs font-semibold px-3 py-1 border rounded-sm border-gray-200 bg-gray-100 hover:border-primary text-gray-700 hover:bg-primary hover:text-white cursor-pointer"
                    >
                    Previous
                    </button>
                    <button
                        className="text-xs font-semibold px-3 py-1 border rounded-sm border-gray-200 bg-gray-100 hover:border-primary text-gray-700 hover:bg-primary hover:text-white cursor-pointer"
                    >
                    Next
                    </button>
                </div>  
            </div>
        </div>
    );
}

export default Pagination;