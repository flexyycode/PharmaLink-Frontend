import { Plus, MapPin, Slice } from "lucide-react"; 
import Modal from "../Modal";
import { useState, useEffect } from "react";  
import api from "../../api/client";


function PharmacyManagement () {  

    const [pharmacies, setPharmacies] = useState<any[]>([]);   
    const [isSubmitting, setIsSubmitting] = useState(false); 
    const [toast, setToast] = useState<string | null>(null);   

    const showToast = (message: string) => {
        setToast(message); 
        setTimeout(() => setToast(null), 4000); 
    }; 

    const fetchPharmacies = async () => {
        try{
            const response = await api.get('/pharmacy'); 
            setPharmacies(response.data); 
        } catch (err) {
            console.error(err); 
        }
    };  

    useEffect(() => {
        fetchPharmacies();
    }, []); 

    const [isCreateOpen, setIsCreateOpen] = useState(false);
    const [formdata, setFormData] = useState({ 
        name: "", 
        licenseId: "", 
        contactEmail: "", 
        phone: "",  
        street: "",  
        city: "", 
        state: "", 
        password: "", 
        subscriptionType: "paid",  
        duration: "12", 
        startDate: new Date().toISOString().split('T')[0],
        expiryDate: "",
        coordinates: { lat: 0, lng: 0 }
    })  

    useEffect(() =>  { 
        if (
            formdata.subscriptionType === "paid" && 
            formdata.startDate && 
            formdata.duration
        ) {
            const date = new Date(formdata.startDate); 
            date.setMonth(date.getMonth() + Number(formdata.duration)); 

            setFormData(prev => ({
                ...prev, 
                expiryDate: date.toISOString().split('T')[0]
            }))
        }
    
    }, [
        formdata.startDate,
        formdata.duration,
        formdata.subscriptionType 
    ]) 

    const handleCreatePharmacy = async () => {  
        setIsSubmitting(true);
        const startTime = Date.now(); 
        const subscriptionTypeMap: Record<string, string> = {
            paid: "PAID", 
            trial: "FREE_TRIAL"
        } 
        const durationMap: Record<string, string> = {
            "3": "THREE_MONTHS", 
            "6": "SIX_MONTHS", 
            "12": "ONE_YEAR", 
        }
        const payload = {
            name: formdata.name, 
            licenseId: formdata.licenseId,  
            contactEmail: formdata.contactEmail, 
            phone: formdata.phone, 
            street: formdata.street,
            city: formdata.city, 
            state: formdata.state, 
            password: formdata.password,  
            subscriptionType: subscriptionTypeMap [formdata.subscriptionType],  
            ...(formdata.subscriptionType === "paid" 
                ? { duration: durationMap[formdata.duration]}  
                : {}
            ),
            startDate: formdata.startDate, 
            expiryDate: formdata.expiryDate, 
        }; 
        
        try {
            await api.post("/pharmacy", payload); 
            showToast("Pharmacy Created Sucessfully!"); 
            setIsCreateOpen(false);  
            fetchPharmacies(); //referesh the list so a new one shows up 
        } catch (err: any) {
            console.error(err); 
            showToast(err.response?.data?.message || "Failed to create Pharmacy."); 
        } finally {  
            const elapsed = Date.now() - startTime; 
            const minDelay = 3000; // 3 seconds 
            if (elapsed < minDelay) {
                await new Promise((resolve) => setTimeout(resolve, minDelay - elapsed))
            }
            setIsSubmitting(false); 
        }
    };  


    return ( 
        <div className="h-screen p-8 overflow-hidden"> 
            <div className="flex justify-between items-center"> 
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Pharmacy Management</h1> 
                    <p className="text-gray-600">Create, manage, and monitor pharmacy accounts</p>  
                </div> 
                <div>
                    <button
                        onClick={() => setIsCreateOpen(true)}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700"
                    >
                        <Plus size={18} />
                        Create Pharmacy
                    </button>

                    <Modal  
                        title="Create New Pharmacy" 
                        description="Add a new pharmacy to the PharmaLink network with complete location details."
                        isOpen={isCreateOpen}
                        onClose={() => setIsCreateOpen(false)}
                    >

                        {/* Everything below came from DialogContent */}


                        

                        {/* Your form starts here */}  
                    <div className="grid gap-4 max-w-2xl">    

                        {/*Basic Information*/}
                        <div className="space-y-4">
                            <h3 className="font-bold text-sm text-gray-700">Basic Information</h3> 
                            <div className="">
                                <div className="flex flex-col pb-5">
                                    <label htmlFor="name" 
                                    className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50"> 
                                    Pharmacy Name * </label> 
                                    <input 
                                    className="bg-gray-100 px-3 py-3 rounded-2xl"
                                    id="name"
                                    value={formdata.name} 
                                    onChange={(e) => setFormData({...formdata, name: e.target.value})} 
                                    placeholder="Enter Pharmacy Name"
                                    />
                                </div> 
                                <div className="flex flex-col">
                                    <label 
                                    htmlFor="licenseid" 
                                    className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50">
                                        License ID * 
                                        </label> 
                                    <input 
                                    className="bg-gray-100 px-3 py-3 rounded-2xl"
                                    id="licenseId" 
                                    value={formdata.licenseId}
                                    onChange={(e) => setFormData({...formdata, licenseId: e.target.value})}
                                    placeholder="Enter your License ID"
                                    />
                                </div>
                            </div>
                        </div>  

                        {/* Contact Information */} 
                        <div className="space-y-4">
                            <h3 className="font-bold text-sm text-gray-700">Contact Information</h3>
                            <div className="">
                                <div className="flex flex-col pb-5">
                                <label htmlFor="contactEmail"
                                className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
                                >Contact Email * </label>  
                                    <input  
                                    className="bg-gray-100 px-3 py-3 rounded-2xl"
                                    id="contactEmail" 
                                    value={formdata.contactEmail} 
                                    onChange={(e) => setFormData({...formdata, contactEmail: e.target.value})}
                                    placeholder="Enter Pharmacy Email"
                                    /> 
                                </div> 
                                <div className="flex flex-col">
                                    <label htmlFor="phone"
                                    className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
                                    >Phone Number * </label>  
                                    <input  
                                    className="bg-gray-100 px-3 py-3 rounded-2xl"
                                    id="phone" 
                                    value={formdata.phone} 
                                    onChange={(e) => setFormData({...formdata, phone: e.target.value})}
                                    placeholder="Enter Phone Number"
                                    /> 
                                </div>
                            </div>
                        </div>   
                        {/* Location Information */}
                        <div className="space-y-4">
                            <h3 className="font-semibold text-sm text-gray-700 flex items-center gap-2">
                                <MapPin />
                                Location Information
                                </h3>
                            <div className="">
                                <div className="flex flex-col">
                                    <label htmlFor="address"
                                    className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
                                    >Street Address * </label>  
                                    <input  
                                    className="bg-gray-100 px-3 py-3 rounded-2xl"
                                    id="address" 
                                    value={formdata.street} 
                                    onChange={(e) => setFormData({...formdata, street: e.target.value})}
                                    placeholder="Enter Pharmacy Address"
                                    /> 
                                </div>  
                            </div> 
                            <div className="">
                                <div className="flex flex-col pb-5">
                                    <label htmlFor="city" 
                                    className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
                                    >City * </label>  
                                    <input  
                                    className="bg-gray-100 px-3 py-3 rounded-2xl"
                                    id="city" 
                                    value={formdata.city} 
                                    onChange={(e) => setFormData({...formdata, city: e.target.value})}
                                    placeholder="Enter City"
                                    /> 
                                </div> 
                                <div className="flex flex-col pb-5">
                                    <label htmlFor="state"
                                    className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
                                    >State * </label>  
                                    <input  
                                    className="bg-gray-100 px-3 py-3 rounded-2xl"
                                    id="city" 
                                    value={formdata.state} 
                                    onChange={(e) => setFormData({...formdata, state: e.target.value})}
                                    placeholder="Enter City"
                                    /> 
                                </div>
                            </div>
                        </div> 
                        
                    </div>  

                    <div className="py-5">
                    <div className="border-gray-200 border-0 rounded-lg bg-gray-50 p-3">
                        <p className="text-xs text-gray-600">💡 Tip: The pharmacy can add map coordinates later from their profile to enable location navigation</p>
                    </div> 
                    </div> 

                    {/* Pharmacy Login Password*/}
                    <div className="">
                            <hr />
                        <div className="py-5"> 
                            <h1>Login Password</h1>   
                            <div className="flex flex-col pt-5">
                            <label htmlFor="password">Assign Password</label> 
                            <input  
                            className="bg-gray-100 px-3 py-3 rounded-2xl"
                            id="password" 
                            value={formdata.password}
                            onChange={(e) => setFormData({...formdata, password: e.target.value})}
                            placeholder="Enter Secure Password"
                            /> 
                            </div> 
                            <p>Password will be sent to your email which you can later change it </p>
                        </div>
                            <hr />
                    </div> 

                    {/*Subscription*/} 
                    <div className="py-8">
                        <div>
                            <h1 className="font-bold text-sm text-gray-700">
                                Subscription Information 
                            </h1>    
                            <div className="grid grid-cols-2 gap-2">
                                <div className="flex flex-col"> 
                                    <label htmlFor="subscriptionType">Subscription Type</label>  
                                    <select name=""className="bg-gray-100 rounded-2xl px-3 py-3 "
                                    id="subscriptionType"
                                    value={formdata.subscriptionType} 
                                    onChange={(e) => setFormData({...formdata, subscriptionType: e.target.value})}
                                    >  
                                    <option value="paid" className="g-gray-100 rounded-2xl px-3 py-3 ">PAID</option> 
                                    <option value="trial">FREE TRIAL</option>
                                    </select>
                                </div>  
                                {formdata.subscriptionType === "paid" && (
                                <div className="flex flex-col"> 
                                    <label htmlFor="subscriptionType">Duration</label>   
                                    <select name=""
                                    className="bg-gray-100 rounded-2xl px-3 py-3"
                                    id="subscriptionType" 
                                    value={formdata.duration} 
                                    onChange={(e) => setFormData({...formdata, duration: e.target.value})} 
                                    >  
                                        <option value="3">3 MONTHS</option> 
                                        <option value="6">6 MONTHS</option> 
                                        <option value="12">12 MONTHS</option> 
                                    </select>
                                </div> 
                                )}
                            </div>
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="flex flex-col">
                                        <label htmlFor="startdate">Start Date*</label>  
                                        <input type="date"  
                                        className="bg-gray-100 rounded-2xl px-3 py-3"
                                        id="startDate"
                                        value={formdata.startDate}
                                        onChange={(e) => setFormData({...formdata, startDate: e.target.value})}/>  
                                    </div> 
                                    <div className="flex flex-col">
                                        <label htmlFor="expiryDate">Expiry Date</label> 
                                        <input  
                                        className="bg-gray-100 rounded-2xl px-3 py-3" 
                                        type="date"
                                        id="expiryDate"
                                        value={formdata.expiryDate}  
                                        readOnly={formdata.subscriptionType === "paid"}
                                        onChange={(e) => {
                                            if (formdata.subscriptionType === "trial") {
                                                setFormData({
                                                    ...formdata,
                                                    expiryDate: e.target.value,
                                                });
                                            }
                                        }}
                                        />
                                    </div>
                                </div>
                        </div>
                    </div> 

                    <div className="flex justify-end gap-2">
                        <button className="cursor-pointer border border-gray-300 rounded-2xl py-2 px-4">
                            Cancel
                        </button> 
                        <button className="bg-black text-white py-2 px-4 rounded-xl cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                        onClick={handleCreatePharmacy} 
                        disabled={isSubmitting}
                        >
                            {isSubmitting ? "Creating..." : "Create Pharmacy"}
                        </button>
                    </div>

                    </Modal> 

            </div>                  
             </div>   
        <div className="py-10">
             <div className="py-10 px-5 border border-gray-400 rounded-2xl">  
                <h1 className="font-bold">All Pharmacies</h1> 
                <p>Manage pharmacy accounts and subscriptions</p> 
                <div className="pt-10">
                    <table className="w-full"> 
                        <thead className="text-left"> 
                            <tr className="border-b border-gray-300">
                        <th className="p-4 font-semibold text-sm text-gray-700">
                            Pharmarcy Name
                        </th> 
                         <th className="p-4 font-semibold text-sm text-gray-700">
                            License ID
                        </th>
                         <th className="p-4 font-semibold text-sm text-gray-700">
                            Status
                        </th>
                         <th className="p-4 font-semibold text-sm text-gray-700">
                            Subscription Type
                        </th>
                         <th className="p-4 font-semibold text-sm text-gray-700">
                            Expiry Date
                        </th> 
                        <th className="p-4 font-semibold text-sm text-gray-700 text-right">
                           Actions
                        </th>
                            </tr>
                        </thead> 
                        <tbody>
                            {pharmacies.map((pharmacy) => (
                                <tr key={pharmacy.id} className="border-b border-gray-300"> 
                                <td className="p-4"> 
                                    <div className="font-medium text-gray-900">{pharmacy.name}</div> 
                                    <div className="text-sm text-gray-500">{pharmacy.fullAddress}</div>
                                </td> 
                                <td className="p-4">{pharmacy.licenseId}</td>
                                <td className="p-4">{pharmacy.status}</td> 
                                <td className="p-4">{pharmacy.subscriptionType}</td> 
                                <td className="p-4">{new Date(pharmacy.expiryDate).toLocaleDateString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table> 
                </div>
                    </div> 
        </div>
                {toast && (
                    <div className="fixed bottom-6 right-6 bg-gray-900 text-white px-5 py-3 rounded-xl shadow-lg flex items-center gap-2 z-50">
                        ✅ {toast}
                    </div>
                )}

        </div>
    )
}


export default PharmacyManagement; 
