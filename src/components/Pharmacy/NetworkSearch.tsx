import { MapPin, Search } from "lucide-react";

function NetworkSearch () {
    return (
        <div className="p-5">
            <div>
                <h1 className="text-3xl font-bold">Network Drug Search</h1> 
                <p className="text-sm text-gray-500 pt-3">Search for medications across the entire PharmaLink network</p>
            </div>  
            <div className="py-5">
            <div className="border border-gray-300 rounded-2xl">
                <div className="p-5">
                    <h1 className="font-bold">Search Filters</h1> 
                    <p className="text-gray-500">Find drugs available in the pharmacy network</p>
                </div>  
                <div className="flex gap-5 px-5 py-3"> 
                    <label htmlFor=""> Drug Name
                    <div className="flex bg-gray-300 rounded-lg p-2 text-gray-500 gap-2 items-center">
                        <Search size={20}/>  
                        <input type="text" 
                        placeholder="search name or generic"
                        />
                    </div>  
                    </label>
                    <div className="bg-gray-300">
                        <select name="" id=""> 
                            <input type="text" />
                        </select>
                    </div>  
                    <label htmlFor="">Location
                    <div className="flex items-center bg-gray-300 rounded-lg text-gray-500 gap-2 p-2"> 
                        < MapPin size={20} /> 
                        <input type="text" 
                        placeholder="Filter by location..."
                        /> 
                    </div> 
                    </label>
                </div>
            </div>  
            </div>  
             <div className="py-5">
            <div className="border border-gray-300 rounded-2xl">
                <div className="p-5">
                    <h1 className="font-bold">Network Results</h1> 
                    <p className="text-gray-500">Showing 12 results from 3 active pharmacies</p>
                </div>  
                <div className="pt-10">
                    <table className="w-full"> 
                        <thead className="text-left"> 
                            <tr className="border-b border-gray-300">
                        <th className="p-4 font-semibold text-sm text-gray-700">
                            Drug Name
                        </th> 
                         <th className="p-4 font-semibold text-sm text-gray-700">
                            Pharmacy
                        </th>
                         <th className="p-4 font-semibold text-sm text-gray-700">
                            Quantity
                        </th>
                         <th className="p-4 font-semibold text-sm text-gray-700">
                            Location
                        </th>
                         <th className="p-4 font-semibold text-sm text-gray-700">
                            Status
                        </th>  
                        <th className="p-4 font-semibold text-sm text-gray-700">
                            Source
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

export default NetworkSearch; 