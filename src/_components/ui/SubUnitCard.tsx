interface SubUnitCardProps {
  name: string;
//   totalTools: number;
//   inUse: number;
//   available: number;
//   damaged: number;
//   lastUpdated?: string;
}

const SubUnitCard = ({name }: SubUnitCardProps) => {
    return ( 
        <div className="bg-gray-100 border border-gray-200  rounded-sm py-2 px-3">
            <div className="flex justify-between">
                <h3 className="text-sm font-medium">{name}</h3>
                <p className="text-xs font-medium text-gray-600">2 hours ago</p>
            </div>
            <div className="mt-3 flex flex-col gap-y-2">
                <div className="flex justify-between items-center">
                    <p className="text-xs font-medium text-gray-600">Total Tools:</p>
                    <p className="text-xs font-medium">547</p>
                </div>
                <div className="flex justify-between items-center ">
                    <p className="text-xs font-medium text-gray-600">In Use:</p>
                    <p className="text-xs font-medium text-cyan-600">234</p>
                </div>
                <div className="flex justify-between items-center ">
                    <p className="text-xs font-medium text-gray-600">Damaged:</p>
                    <p className="text-xs font-medium text-orange-600">278</p>
                </div>
                <div className="flex justify-between items-center ">
                    <p className="text-xs font-medium text-gray-600">Maintenance:</p>
                    <p className="text-xs font-medium text-purple-600">33</p>
                </div>
                <div className="flex justify-between items-center border-t border-t-gray-200 pt-2">
                    <p className="text-xs font-medium text-gray-600">Assigned Jobs:</p>
                    <p className="text-xs font-medium text-green-600">11</p>
                </div>
                
            </div>
        </div>
     );
}
 
export default SubUnitCard;