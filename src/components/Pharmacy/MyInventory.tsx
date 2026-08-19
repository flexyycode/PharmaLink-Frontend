import { Plus, Trash2, Edit, Search } from "lucide-react"; 
import Modal from "../Modal";
import { useState } from "react";

function MyInventory () { 

     const [formdata, setFormData] = useState({ 
            drugName: "", 
            generic: "",  
            category: "", 
            quantity: "", 
            expiryDate: "",  
            batchNumber: "",  
            price: "" 
        })  
    const [isCreateOpen, setIsCreateOpen] = useState(false)
    return (
        <div className="p-5">
            <div className="flex justify-between">
                <div>
                    <h1 className="font-bold text-3xl">Inventory Management</h1> 
                    <p className="text-sm text-gray-500 pt-3">Manage your pharmacy's current drug inventory</p>
                </div>  
                <div>
                <div className="bg-gray-900 rounded-2xl p-3">
                   <button className="flex items-center text-white text-center gap-3 cursor-pointer" 
                   onClick={() => setIsCreateOpen(true)}
                   >
                    <Plus /> Add Drug
                   </button>
                </div>  
                </div>
            </div>   
            <Modal 
            title="Add Drug to Inventory" 
            description="Add a new drug to your pharmacy's inventory" 
            isOpen={isCreateOpen}
            onClose={() => setIsCreateOpen(false)}
            >
                <div>
                        <div className="space-y-4">
                                <div className="flex flex-col pb-5">
                                    <label htmlFor="drugName" 
                                    className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50"> 
                                    Drug Name * </label> 
                                    <input 
                                    className="bg-gray-100 px-3 py-3 rounded-2xl"
                                    id="name"
                                    value={formdata.drugName} 
                                    onChange={(e) => setFormData({...formdata, drugName: e.target.value})} 
                                    placeholder="Enter Drug Name"
                                    />
                                </div> 
                        </div> 
                         <div className="space-y-4">
                                <div className="flex flex-col pb-5">
                                    <label htmlFor="generic" 
                                    className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50"> 
                                    Drug Type * </label> 
                                    <input 
                                    className="bg-gray-100 px-3 py-3 rounded-2xl"
                                    id="genric"
                                    value={formdata.generic} 
                                    onChange={(e) => setFormData({...formdata, generic: e.target.value})} 
                                    placeholder="Enter Drug Type"
                                    />
                                </div> 
                        </div>   
                         <div className="space-y-4">
                                <div className="flex flex-col pb-5">
                                    <label htmlFor="category" 
                                    className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50"> 
                                    Category * </label> 
                                    <input 
                                    className="bg-gray-100 px-3 py-3 rounded-2xl"
                                    id="category"
                                    value={formdata.category} 
                                    onChange={(e) => setFormData({...formdata, category: e.target.value})} 
                                    placeholder="Enter Drug Category"
                                    />
                                </div> 
                        </div> 
                        <div className="flex gap-5 space-y-4">
                            <div className="space-y-2">
                                    <div className="flex flex-col pb-5">
                                        <label htmlFor="quantity" 
                                        className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50"> 
                                        Quantity * </label> 
                                        <input 
                                        className="bg-gray-100 px-3 py-3 rounded-2xl"
                                        id="quantity" 
                                        type="number"
                                        value={formdata.quantity} 
                                        onChange={(e) => setFormData({...formdata, quantity: e.target.value})} 
                                        placeholder="Enter Quantity"
                                        />
                                    </div> 
                            </div> 
                            <div className="space-y-2">
                                    <div className="flex flex-col pb-5">
                                        <label htmlFor="expiryDate" 
                                        className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50"> 
                                        Expiry Date * </label> 
                                        <input 
                                        className="bg-gray-100 px-3 py-3 rounded-2xl"
                                        id="expiryDate" 
                                        type="date"
                                        value={formdata.expiryDate} 
                                        onChange={(e) => setFormData({...formdata, expiryDate: e.target.value})} 
                                        />
                                    </div> 
                            </div> 
                        </div>  
                        <div className="flex gap-5 space-y-4">
                         <div className="space-y-4">
                                    <div className="flex flex-col pb-5">
                                        <label htmlFor="batchNumber" 
                                        className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50"> 
                                        Batch Number * </label> 
                                        <input 
                                        className="bg-gray-100 px-3 py-3 rounded-2xl"
                                        id="batchNumber" 
                                        value={formdata.batchNumber} 
                                        onChange={(e) => setFormData({...formdata, batchNumber: e.target.value})} 
                                        placeholder="Batch Number"
                                        />
                                    </div> 
                        </div>   
                          <div className="space-y-4">
                                    <div className="flex flex-col pb-5">
                                        <label htmlFor="price" 
                                        className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50"> 
                                        Price * </label> 
                                        <input 
                                        className="bg-gray-100 px-3 py-3 rounded-2xl"
                                        id="price"  
                                        type="number"
                                        value={formdata.price} 
                                        onChange={(e) => setFormData({...formdata, price: e.target.value})} 
                                        placeholder="Price"
                                        />
                                    </div> 
                        </div>  
                        </div>
                        <div className="flex justify-end gap-4">
                            <button className="bg-none border border-gray-300 p-3 rounded-2xl font-bold cursor-pointer">
                                Cancel
                            </button> 
                            <button className="bg-gray-900 rounded-2xl p-3 text-white cursor-pointer">
                                Add to inventory
                            </button>
                        </div>
                </div>
            </Modal> 

            <div className="py-7">
                <div className=" border border-gray-300 rounded-2xl">
                    <div className="p-3 flex justify-between">
                        <div>
                            <h1 className="font-bold text">My Inventory</h1> 
                            <p className="text-sm text-gray-500">Your pharmacy's current drug inventory</p>
                        </div> 
                        <div className="flex items-center bg-gray-300 rounded-lg gap-3 p-2">
                            < Search className="text-gray-400"/> 
                            <input type="text"  
                            className="text-gray-400"
                            placeholder="search invenotry" 
                            />
                        </div>
                    </div> 
                     <div className="pt-10">
                    <table className="w-full"> 
                        <thead className="text-left"> 
                            <tr className="border-b border-gray-300">
                        <th className="p-4 font-semibold text-sm text-gray-700">
                            Drug Name
                        </th> 
                         <th className="p-4 font-semibold text-sm text-gray-700">
                            Generic
                        </th>
                         <th className="p-4 font-semibold text-sm text-gray-700">
                            Category
                        </th>
                         <th className="p-4 font-semibold text-sm text-gray-700">
                            Quantity
                        </th>
                         <th className="p-4 font-semibold text-sm text-gray-700">
                            Batch
                        </th>  
                        <th className="p-4 font-semibold text-sm text-gray-700">
                            Expiry Date
                        </th> 
                        <th className="p-4 font-semibold text-sm text-gray-700">
                            Price
                        </th> 
                        <th className="p-4 font-semibold text-sm text-gray-700">
                            Status
                        </th>
                        <th className="p-4 font-semibold text-sm text-gray-700 text-right">
                           Actions
                        </th>
                            </tr>
                        </thead> 
                        <tbody>
                                <tr className="border-b border-gray-300"> 
                                <td className="p-4"> 
                                    <div className="font-medium text-gray-900"></div> 
                                    <div className="text-sm text-gray-500"></div>
                                </td> 
                                <td className="p-4"></td>
                                <td className="p-4"></td> 
                                <td className="p-4"></td> 
                                <td className="p-4"></td>
                                </tr>
                        </tbody>
                    </table> 
                </div>
                </div>
            </div>
        </div>
    )
}

export default MyInventory; 