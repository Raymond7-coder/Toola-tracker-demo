import { MdOutlineAutoGraph } from "react-icons/md";
import ProductLineSummaryCard from "./ProductLineSummaryCard";

const ProductLineSummary = () => {
    return ( 
        <div className="flex flex-col gap-y-3 mt-4">
            <h1 className="text-base font-semibold flex gap-x-1 items-center"><MdOutlineAutoGraph/> Product Line Summary</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                <ProductLineSummaryCard/>
                <ProductLineSummaryCard/>
                <ProductLineSummaryCard/>
                <ProductLineSummaryCard/>
                <ProductLineSummaryCard/>
                <ProductLineSummaryCard/>
            </div>
        </div>
    );
}

export default ProductLineSummary;