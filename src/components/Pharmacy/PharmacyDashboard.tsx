import { Package, TrendingUp, CircleX, Activity } from "lucide-react"; 


function PharmacyDashboard () {
    return (
         <div className="p-8 overflow-x-hidden bg-white h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Welcome back to PharmaLink Centeral Pharmacy</p>
      </div>  

        <div className="grid grid-cols-4 gap-8 py-5">
            <div className="">
            <FeatureCard 
            title="Total Products" 
            icon={<Package className="bg-blue-100 text-blue-600 size-10 px-2 rounded-xl"/>}
            number={4}
            /> 
            </div> 
            <div className="">
            <FeatureCard 
            title="Total Quantity" 
            icon={<TrendingUp className="bg-green-100 text-green-600 size-10 px-2 rounded-xl"/>}
            number={1}
            /> 
            </div> 
            <div className="">
            <FeatureCard 
            title="Low Stock Items" 
            icon={<CircleX className="bg-red-100 text-red-600 size-10 px-2 rounded-xl"/>}
            number={3}
            /> 
            </div>
            <div className="">
            <FeatureCard 
            title="Pending Referrals" 
            icon={<Activity className="bg-purple-100 text-purple-600 size-10 px-2 rounded-xl"/>}
            number={3600}
            /> 
            </div>
        </div> 

        <div className="py-5">
        <div className="px-4 py-6 border border-gray-300 rounded-2xl">
            <div>
                <div className="">
                    <h1 className="font-bold">Recent Inventory</h1>
                    <p className="text-gray-500">Latest updates to your inventory</p>
                </div> 
            </div> 
            <div className="flex justify-between items-center border-b border-b-gray-300"> 
                <div className="flex pt-5">
                    <Package className="bg-blue-200 text-blue-500 p-1 size-10 rounded-lg" />
                    <div className="pl-3">
                        <h1 className="font-bold">Paracetamol</h1> 
                        <p className="text-sm text-gray-500">Acetaminophen • 500mg</p>
                    </div>
                </div> 
                <div className="flex items-center gap-3">
                    <div>
                        <h1 className="font-bold text-lg">Qty: 500</h1> 
                        <p className="text-sm text-end">$5.99</p>
                    </div> 
                    <div className="bg-green-600 text-white rounded-md p-1 text-center">
                        <p className="text-sm">In Stock</p>
                    </div>
                </div>
            </div>   
        </div>  
        </div>
    </div>
    )
}


export default PharmacyDashboard;  

const FeatureCard = ({ icon, title, number}: {icon: any, title: string, number: number }) => {
    return (
        <div className="rounded-xl p-6 border border-gray-300">
            <div className="flex flex-col">
                <div className="py-5">
                    <h1 className="text-gray-500 mb-1 text-lg">{title}</h1>
                </div>
                <div className="flex items-center"> 
                    <div className="p-3 rounded-lg">
                    {icon} 
                    </div>
                    <p className="text-gray-600 font-bold text-3xl">{number}</p>
                </div>
            </div>
        </div>
    )
}