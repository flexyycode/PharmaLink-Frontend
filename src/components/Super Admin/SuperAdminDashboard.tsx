import { Shield, Building2, CircleCheckBig, CircleX, Package, Activity } from "lucide-react"; 



function SuperAdminDashboard () { 
    return (
    <div className="p-8 overflow-x-hidden bg-white h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Super Admin Dashboard</h1>
        <p className="text-gray-600">Platform overview and recent activities</p>
      </div>  

        <div className="grid grid-cols-4 gap-8 py-10">
            <div className="">
            <FeatureCard 
            title="Total Registered Pharmacies" 
            icon={<Building2 className="bg-blue-100 text-blue-600 size-10 px-2 rounded-xl"/>}
            number={5}
            /> 
            </div> 
            <div className="">
            <FeatureCard 
            title="Active Subscriptions" 
            icon={<CircleCheckBig className="bg-green-100 text-green-600 size-10 px-2 rounded-xl"/>}
            number={1}
            /> 
            </div> 
            <div className="">
            <FeatureCard 
            title="Expired Subscriptions" 
            icon={<CircleX className="bg-red-100 text-red-600 size-10 px-2 rounded-xl"/>}
            number={3}
            /> 
            </div>
            <div className="">
            <FeatureCard 
            title="Total Drugs in Network" 
            icon={<Package className="bg-purple-100 text-purple-600 size-10 px-2 rounded-xl"/>}
            number={3600}
            /> 
            </div>
        </div> 

        <div className="px-4 py-6 border border-gray-500 rounded-2xl">
            <div>
                <div className="flex gap-2">
                    <Activity /> 
                    <p>Recent Activity Feed</p>
                </div> 
                <p className="text-gray-500">Latest platform activities and updates</p>
            </div>   
        </div>
    </div>
    )
} 




export default SuperAdminDashboard;  

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



{/* <div className="space-y-5">
    {recentActivity.map((activity) => (
        <div key={activity.id} className="flex items-start gap-4 pb-4 border-b last:border-0" >
            <div className={`p-2 rounded-lg ${
                activity.type === "pharmacy-created" ? "bg-blue-100":
                activity.type === "subscription-renewed" ? "bg-green-100" : 
                activity.type === "subscription-expired" ? "bg-red-100": 
                activity.type === "drug-added" ? "bg-purple-100": 
                activity.type === "referral-sent" ? "bg-yellow-100":
            }`}>
                {activity.type === "pharmacy-created" && <Building2 className="size-5 text-blue-600" />}
                {activity.type === "subscription-renewed" && <CircleCheckBig className="size-5 text-green-600" />}
                {activity.type === "subscription-expired" && <CircleX className="size-5 text-red-600" />}
                {activity.type === "drug-added" && <Package className="size-5 text-purple-600" />}
                {activity.type === "referral-sent" && <Activity className="size-5 text-yellow-600" />}
            </div>
            <div> 
                <p>{activity.description}</p>
                <p>{new Date (activity.timestamp).toLocaleString()}</p>
            </div>
        </div>
    )) }
</div> */}