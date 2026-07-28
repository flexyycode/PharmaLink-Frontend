import { Package, AlertTriangle, Search } from "lucide-react" 

function DrugNetworkMonitor () {
    return (
        <div className="p-8 bg-white h-full">
            <div>
                <h1 className="font-bold text-3xl text-gray-900">
                    Drug Network Monitor
                </h1>  
                <p className="text-gray-600 py-2">
                    Centralized visibility of all drugs across the network
                </p>
            </div>  
            <div className="grid grid-cols-3 gap-8 py-8">
                <FeatureCard 
                title="Total Network Quantity"
                icon={<Package className="text-blue-600 bg-blue-200 size-15 px-3 rounded-lg "/>} 
                amount="3,600"
                />
                <FeatureCard 
                title="Drugs in Shortage"
                icon={<AlertTriangle className="text-orange-600 bg-orange-200 size-15 px-3 rounded-lg" />} 
                amount="2"
                />
                <FeatureCard 
                title="Low Stock Locations"
                icon={<AlertTriangle className="text-red-600 bg-red-200 size-15 px-3 rounded-lg" />} 
                amount="0"
                />
            </div> 
            <div className="border border-gray-300 rounded-2xl p-5">
                <div className="flex justify-between">
                    <div>
                        <h1 className="text-gray-900 font-bold">Network Drug Inventory</h1>
                        <p className="text-gray-500">Real-time view of all drugs across pharmacies</p>
                    </div>  
                    <search className="flex items-center bg-gray-100 gap-5 p-3 rounded-lg">
                        <Search className="size-4 text-gray-500"/>  
                    <input type="text" 
                    className="text-sm" 
                    placeholder="Search Drugs..." 
                    />
                    </search> 
                </div> 
                <div className="py-8">
                    <table className="w-full">
                        <thead className="">
                            <tr>
                                <th>
                                    Drug Name
                                </th> 
                                  <th>
                                    Generic
                                </th>
                                  <th>
                                    Total Network Quantity
                                </th>
                                  <th>
                                    Pharamacies Carrying
                                </th>
                                  <th>
                                    Low Stock Count
                                </th>
                                  <th>
                                   Status
                                </th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
    )
} 

export default DrugNetworkMonitor; 


const FeatureCard = ({icon, title, amount}: {icon: any, title: string, amount: string}) => {
    return(
        <div className="border border-gray-300 rounded-2xl p-5">
            <h1>{title}</h1>  
            <div className="flex pt-15 items-center gap-2"> 
                <div>
                {icon}  
                </div>
                <p className="font-bold text-3xl">{amount}</p>
            </div>
        </div>
    )
}