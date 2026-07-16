

function SubscriptionControl () {
    return (
        <div className="p-8"> 
            <div>
                <h1 className="font-bold text-3xl text-gray-900">
                    Subscription Control
                </h1>  
                <p className="text-gray-600 py-2">
                    Manage subscription lifecycle and renewals
                </p>
            </div> 
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-gray-500 rounded-2xl pt-5">
                <FeatureCard 
                title="Active Subscriptions" 
                description="1"
                /> 
                <FeatureCard 
                title="Active Subscriptions" 
                description="1"
                />
                <FeatureCard 
                title="Active Subscriptions" 
                description="1"
                />
            </div>  
            <div className="py-10">
                <div className="border border-gray-300 rounded-2xl"> 
                    <div className="p-5">
                    <h1 className="font-bold">
                        All Subscriptions 
                    </h1> 
                    <p className="text-gray-600">
                        Monitors and manage subscription status 
                    </p>   
                    </div>
                    <div className="py-5 px-5"> 
                    <table className="w-full"> 
                        <thead className="text-left"> 
                            <tr className="border-b border-gray-200">
                        <th className="py-4 font-semibold text-sm text-gray-700">
                            Pharmarcy
                        </th> 
                         <th className="py-4 font-semibold text-sm text-gray-700">
                            Plan
                        </th>
                         <th className="py-4 font-semibold text-sm text-gray-700">
                            Start Date
                        </th>
                         <th className="py-4 font-semibold text-sm text-gray-700">
                            Expiry Date
                        </th>
                         <th className="py-4 font-semibold text-sm text-gray-700">
                            Days Remaining
                        </th> 
                        <th className="py-4 font-semibold text-sm text-gray-700">
                            Status
                        </th>
                         <th className="py-4 font-semibold text-sm text-gray-700 text-right">
                            Action
                        </th>
                            </tr>
                        </thead>
                    </table>
                    </div>
                </div> 
            </div>
        </div>
    )
} 


export default SubscriptionControl;  

const FeatureCard = ({title, description}: {title: string, description: string}) => {
    return (
        <div className="border p-5 border-gray-300 rounded-2xl">
            <h1 className="text-gray-600">{title}</h1> 
            <p className="pt-20"> {description} </p>
        </div>
    )
}