import { Settings } from "lucide-react"


function SuperAdminSettings () {
    return (
        <div className="p-8 w-[50%]">
            <div>
                <h1 className="font-bold text-gray-900 text-3xl mb-2">Settings</h1> 
                <p className="text-gray-600">Platform Configuration and Preferences</p> 
            </div>  
            <div className="py-8">
            <div className="border border-gray-300 rounded-2xl p-3">  
                <div className="flex gap-2"> 
                < Settings />
                <h1>Platform Settings </h1>  
                </div>
                <p> Configure system-wide settings </p>
                <div className="grid grid-cols-1 pt-5">
                    <label htmlFor="platform-name">Platform Name</label> 
                <input id="platform-name"  
                defaultValue="PharmaLink"
                className="rounded-lg bg-gray-300 p-2"
                placeholder=""
                />  
                <label htmlFor="admin-contact-email" className="pt-3">Admin Contatct Email</label> 
                <input id="admin-contact-email" 
                defaultValue="suleimanmasaya6@gmail.com" 
                className="rounded-lg bg-gray-300 p-2"
                /> 
                <label htmlFor="support-email" className="pt-3">Support Email</label>
                <input id="support-email" 
                defaultValue="suleimanmasaya6@gmail.com"
                className="rounded-lg bg-gray-300 p-2"
                />  
                <div className="w-sm py-5">
                <button className="rounded-lg bg-gray-900 p-2 text-white cursor-pointer">
                    Save Settings
                </button> 
                </div>
                </div>  
            </div> 
            </div>
        </div>
    )
} 


export default SuperAdminSettings;