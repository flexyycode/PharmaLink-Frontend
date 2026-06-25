import '../App.css';  
import { Shield, Building2, Package, Network, Send, BarChart3, ArrowDown } from 'lucide-react';  
import { Link } from 'react-router-dom';

function SystemFlow() {
    return (
        <div className='p-8 bg-gradient-to-br from-blue-50 to-white'> 
        <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-12'> 
                <Link to='/home'>
                    <h1 className='font-bold text-4xl text-gray-900'>PharmaLink Sytem Flow</h1> 
                </Link>
                <p className='text-lg text-gray-600'>Complete workflow of the pharmacy network management platform</p>
            </div>  

            <div className='space-y-6'>
               
                {/* Super Admin Creates Account */} 
                <div className='bg-gradient-to-br from-blue-900 to-blue-800 border border rounded-2xl '>
                    <div className='flex px-10 py-10 items-center'>
                        <Shield className='size-15 bg-white text-lg text-blue-900 border rounded-xl p-2'/> 
                        <div className='mx-5'> 
                        <h1 className='text-white'>1. Super Admin Creates Pharmacy Account</h1> 
                        <p className='text-blue-100'>Platform owner onboards new pharmacies</p>      
                        </div>               
                    </div> 
                    <ul className='text-white px-10 list-disc space-y-2 pb-6'>
                        <li>Creates pharmacy account with license details</li>
                        <li>Sets subscription plan and expiry date</li>
                        <li>Automatically generates login credentials</li>
                        <li>Sends credentials to pharmacy email</li>
                    </ul>
                </div> 
                <ArrowDown className='mx-auto size-8 text-blue-600' /> 
                
                {/* Pharmacy Logs In */} 
                <div className='bg-white border border-blue-600 border-2 rounded-2xl '>
                    <div className='flex px-10 py-10 items-center'>
                        <Building2 className='size-15 bg-blue-200 text-lg text-blue-400 border border-0 rounded-xl p-2'/> 
                        <div className='mx-5'> 
                        <h1 className='text-gray-900'>2. Pharmacy Logs In</h1> 
                        <p className='text-gray-600'>Platform owner onboards new pharmacies</p>      
                        </div>               
                    </div> 
                    <ul className='text-gray-600 px-10 list-disc space-y-2 pb-6'>
                        <li>Creates pharmacy account with license details</li>
                        <li>Sets subscription plan and expiry date</li>
                        <li>Automatically generates login credentials</li>
                        <li>Sends credentials to pharmacy email</li>
                    </ul>
                </div> 
                <ArrowDown className='mx-auto size-8 text-blue-600' /> 
               
                {/* Manages Invetory*/} 
                <div className='bg-white border border-green-600 border-2 rounded-2xl '>
                    <div className='flex px-10 py-10 items-center'>
                        <Package className='size-15 bg-green-200 text-lg text-green-400 border border-0 rounded-xl p-2'/> 
                        <div className='mx-5'> 
                        <h1 className='text-gray-900'>3. Manages Inventory</h1> 
                        <p className='text-gray-600'>Add and update drug inventory</p>      
                        </div>               
                    </div> 
                    <ul className='text-gray-600 px-10 list-disc space-y-2 pb-6'>
                        <li> Add drugs with quantities and pricing</li>
                        <li>Update stock levels in real-time</li>
                        <li>Track batch numbers and expiry dates</li>
                        <li>Monitor low stock alerts</li>
                    </ul>
                </div> 
                <ArrowDown className='mx-auto size-8 text-blue-600' /> 

                {/* Network*/} 
                <div className='bg-white border border-purple-600 border-2 rounded-2xl '>
                    <div className='flex px-10 py-10 items-center'>
                        <Network className='size-15 bg-purple-200 text-lg text-purple-400 border border-0 rounded-xl p-2'/> 
                        <div className='mx-5'> 
                        <h1 className='text-gray-900'>4. Searches Network</h1> 
                        <p className='text-gray-600'>Cross-pharmacy drug discovery</p>      
                        </div>               
                    </div> 
                    <ul className='text-gray-600 px-10 list-disc space-y-2 pb-6'>
                        <li>Search drugs acrosss all active pharmacies</li>
                        <li>View own inventory labeled "Your Inventory"</li>
                        <li>See other pharmacies as "Network Pharmacy"</li>
                        <li>Filter by drug name, generic, and location</li>
                    </ul>
                </div> 
                <ArrowDown className='mx-auto size-8 text-blue-600' /> 

                {/* Referral*/} 
                <div className='bg-white border border-orange-600 border-2 rounded-2xl '>
                    <div className='flex px-10 py-10 items-center'>
                        <Send className='size-15 bg-orange-200 text-lg text-orange-400 border border-0 rounded-xl p-2'/> 
                        <div className='mx-5'> 
                        <h1 className='text-gray-900'>5. Referral Sent</h1> 
                        <p className='text-gray-600'>Inter-pharmacy Collaboration</p>      
                        </div>               
                    </div> 
                    <ul className='text-gray-600 px-10 list-disc space-y-2 pb-6'>
                        <li>Send patient referrals to partner pharmacies</li>
                        <li>Include quantity needed and notes</li>
                        <li>Track referral status (pending/accepted/completed)</li>
                        <li>Facilitate patient care across network</li>
                    </ul>
                </div> 
                <ArrowDown className='mx-auto size-8 text-blue-600' />

                {/* Admin Monitors Network*/} 
                <div className='bg-gradient-to-br from-blue-900 to-blue-800 border border rounded-2xl'>
                    <div className='flex px-10 py-10 items-center md:grid-cols-2'>
                        <BarChart3 className='size-15 bg-white text-lg text-blue-900 border rounded-xl p-2'/> 
                        <div className='mx-5'> 
                        <h1 className='text-white :text-[10px] '>6. Admin Monitors Network</h1> 
                        <p className='text-blue-100'>Centralized network oversight</p>      
                        </div>               
                    </div> 
                    <ul className='text-white px-10 list-disc space-y-2 pb-6'>
                        <li>View network-wide inventory levels</li>
                        <li>Monitor drug shortages and distribution</li>
                        <li>Track subscription status and renewals</li>
                        <li>Analyze platform usage and growth</li>
                    </ul>
                </div>  

                  {/* Database Aligned structure*/} 
                <div className='mt-12 border-2 border-gray-300 rounded-2xl'>
                        <div className='px-5 py-5'> 
                        <h1 className='text-gray-900 font-bold'>Database-Aligned Structure</h1> 
                        <p className='text-gray-500'>Core entities and relationships</p>      
                        </div>     
                        <div className='grid md:grid-cols-2'> 
                            <div>           
                                <h1 className='px-5 font-bold text-lg'>Entities</h1>
                                <ul className='px-10 list-disc space-y-2 pb-6'> 
                                <li>Users (Super Admin / Pharmacy)</li>
                                <li>Pharmacies</li>
                                <li>Subscriptions</li>
                                <li>Drugs</li> 
                                <li>Inventory</li>
                                <li>Referrals</li>
                                </ul> 
                            </div> 
                            <div>           
                                <h1 className='px-5 font-bold text-lg'>Relationships</h1>
                                <ul className='px-10 list-disc space-y-2 pb-6'> 
                                <li>One Super Admin → Many Pharmacies</li>
                                <li>One Pharmacy → Many Drugs</li>
                                <li>One Subscription → One Pharmacy</li>
                                <li>Many Pharmacies → Many Drugs (Network)</li> 
                                <li>Pharmacy → Pharmacy (Referrals)</li>
                                </ul> 
                            </div> 
                        </div>
                </div>   
                
            </div>
        </div>
        </div>
    )
} 


// const FeatureCard = ({icon, title, description}: {icon:any, title:string, description:string}) => {
//     return ( 
//         <div>
//             <div>{icon}</div> 
//             <h1>{title}</h1>
//             <p>{description}</p>
//         </div>
//     )
// }
export default SystemFlow; 