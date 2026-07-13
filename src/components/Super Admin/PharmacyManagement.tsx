import { Plus, MapPin } from "lucide-react"; 
import Modal from "../Modal";
import { useState } from "react";

function PharmacyManagement () { 

    const [isCreateOpen, setIsCreateOpen] = useState(false);
    const [formdata, setFormData] = useState({ 
        name: "", 
        licenseid: "", 
        contactEmail: "", 
        phone: "",  
        address: "",  
        city: "", 
        state: "", 
        zipCode: "", 
        location: "",
        autoGeneratePassword: true,
        subscriptionPlan: "Standard",
        startDate: new Date().toISOString().split('T')[0],
        expiryDate: "",
        coordinates: { lat: 0, lng: 0 }
    }) 
    return ( 
        <div className="h-screen p-8 overflow-hidden"> 
            <div className="flex justify-between items-center pb-10"> 
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
                    <div className="grid gap-4 py-4 max-w-2xl">    

                        {/*Basic Information*/}
                        <div className="space-y-4">
                            <h3 className="font-semibold text-sm text-gray-700">Basic Information</h3> 
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="name"> Pharmacy Name * </label> 
                                    <input 
                                    className="border border-gray-300 px-3 rounded-2xl"
                                    id="name"
                                    value={formdata.name} 
                                    onChange={(e) => setFormData({...formdata, name: e.target.value})} 
                                    placeholder="Enter Pharmacy Name"
                                    />
                                </div> 
                                <div className="space-y-2">
                                    <label htmlFor="licenseid" className="px-3">License ID * </label> 
                                    <input 
                                    className="border border-gray-300 px-3 rounded-2xl"
                                    id="licenseId" 
                                    value={formdata.licenseid}
                                    onChange={(e) => setFormData({...formdata, licenseid: e.target.value})}
                                    placeholder="Enter your License ID"
                                    />
                                </div>
                            </div>
                        </div>  

                        {/* Contact Information */} 
                        <div className="space-y-4">
                            <h3 className="font-semibold text-sm text-gray-700">Contact Information</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="contactEmail">Contact Email * </label>  
                                    <input  
                                    className="border border-gray-300 px-3 rounded-2xl"
                                    id="contactEmail" 
                                    value={formdata.contactEmail} 
                                    onChange={(e) => setFormData({...formdata, contactEmail: e.target.value})}
                                    placeholder="Enter Pharmacy Email"
                                    /> 
                                </div> 
                                <div>
                                    <label htmlFor="phone">Phone Number * </label>  
                                    <input  
                                    className="border border-gray-300 px-3 rounded-2xl"
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
                            <div className="grid grid-cols-2">
                                <div className="space-y-2">
                                    <label htmlFor="address">Street Address * </label>  
                                    <input  
                                    className="border border-gray-300 px-3 rounded-2xl w-4/4"
                                    id="address" 
                                    value={formdata.address} 
                                    onChange={(e) => setFormData({...formdata, address: e.target.value})}
                                    placeholder="Enter Pharmacy Address"
                                    /> 
                                </div>  
                            </div> 
                            <div className="grid grid-cols-3 gap-">
                                <div className="space-y-2">
                                    <label htmlFor="city">City * </label>  
                                    <input  
                                    className="border border-gray-300 px-3 rounded-2xl"
                                    id="city" 
                                    value={formdata.city} 
                                    onChange={(e) => setFormData({...formdata, city: e.target.value})}
                                    placeholder="Enter City"
                                    /> 
                                </div> 
                                <div className="space-y-2">
                                    <label htmlFor="state">State * </label>  
                                    <input  
                                    className="border border-gray-300 px-3 rounded-2xl"
                                    id="city" 
                                    value={formdata.state} 
                                    onChange={(e) => setFormData({...formdata, city: e.target.value})}
                                    placeholder="Enter City"
                                    /> 
                                </div> 
                                <div className="space-y-2">
                                    <label htmlFor="zipCode">Zip Code * </label>  
                                    <input  
                                    className="border border-gray-300 px-3 rounded-2xl"
                                    id="zipCode" 
                                    value={formdata.zipCode} 
                                    onChange={(e) => setFormData({...formdata, zipCode: e.target.value})}
                                    placeholder="Enter Zip Code"
                                    /> 
                                </div>
                            </div>
                        </div> 
                        
                    </div>

                    </Modal>
                </div> 
            </div> 
        </div>
    )
}


export default PharmacyManagement; 
