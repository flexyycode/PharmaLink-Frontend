import { Link } from 'react-router-dom';
import '../App.css'; 
import { Network, Search, Shield, TrendingUp } from "lucide-react"; 

function Home () {
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-50 via-white to-blue-50 overflow-x-hidden">  
           <header className="border-b border-gray-300 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
            <div className="px-10 py-4 flex items-center justify-between w-screen">
                <div className="flex justify-between items-center gap-2 w-screen">  
                    <div className='flex items-center'>
                    <div className="bg-blue-600 p-2 rounded-lg">
                        <Network className="size-6 text-white" /> 
                    </div>
                      <span className="text-2xl font-bold text-blue-900 text-center">PharmaLink</span>  
                      </div>
                      <ul className='flex justify-between items-center gap-5'>
                        <li className='hover:bg-gray-400 px-4 py-2 rounded-lg cursor-pointer'>Public Search</li> 
                        <Link to="/login">                        
                        <li><button className="bg-black text-white px-4 py-2 rounded-lg cursor-pointer">Login</button></li> 
                        </Link>
                      </ul>
                </div> 
            </div>
           </header> 

            {/* Hero Section */}
            <section className=''>
                <div className="mt-20">
                    {/* <network /> */}
                     <p className="text-5xl text-center font-bold text-blue-900">Safe Access to Medicines <br/>  Through Verified Collaboration </p>  <br /> 
                     <p className="text-1xl text-center font-bold text-gray-500">PharmaLink prioritizes safe access to medicines through verified pharmacy collaboration. The <br /> platform focuses on availability and secure referral — not price comparison. </p> 
                     <div className='flex justify-center gap-5 mt-10'>
                        <p>
                            <button className='flex justify-between items-center gap-2 bg-black text-xl px-4 py-2 rounded-lg cursor-pointer text-white'>
                               <div className='size-6 text-white'>
                                <Search className='size-5' /> 
                               </div>
                               <span className='text-center'>Search Network</span>
                            </button>
                        </p>
                        <p>
                            <button className='border border-gray-300 text-xl px-4 py-2 rounded-lg cursor-pointer text-black hover:bg-gray-200'>
                                Pharmacy Login
                            </button>
                        </p>
                     </div>
                </div> 
            </section>  

            {/* Feauture Section */}
            <section className='mx-auto px-4 py-40'> 
                <h1 className='text-center font-bold text-4xl text-blue-900'>Platform Features</h1> 
                <div className=' mx-auto gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 w-[75%]'>
                    <FeatureCard 
                        icon={<Shield className='text-blue-600 bg-blue-200 size-15 px-2 rounded-lg'/>} 
                        title="Super Admin Control" 
                        description="Centralized platform management with subscription lifecycle control, pharmacy onboarding, and network monitoring capabilities." 
                    />
                    <FeatureCard 
                        icon={<Network className='text-green-600 bg-green-200 size-15 px-2 rounded-lg'/>} 
                        title="Inter-Pharmacy Network" 
                        description="Search and discover medications across the entire pharmacy network. Send referrals and collaborate to serve patients better." 
                    />
                    <FeatureCard 
                        icon={<TrendingUp className='text-purple-600 bg-purple-200 size-15 px-2 rounded-lg'/>} 
                        title="Real-Time Analytics" 
                        description="Monitor network-wide inventory, track shortages, analyze distribution patterns, and make data-driven decisions." 
                    />
                </div>
            </section> 

            {/* STATS SECTION */}
            <section className='bg-blue-900 text-white py-20'> 
                <div className='container mx-auto px-4'> 
                    <div className='grid md:grid-cols-4 gap-8 text-center max-w-6xl mx-auto'>
                        <div>
                            <h1 className='text-4xl font-bold text-white mb-2'>5+</h1> 
                            <p className='text-blue-200'>Active pharmacies</p>
                        </div>  
                         <div>
                            <h1 className='text-4xl font-bold text-wite mb-2' >500+</h1> 
                            <p className='text-blue-200'>Drugs in Network</p>
                        </div> 
                        <div>
                            <h1 className='text-4xl font-bold text-white mb-2'>98%</h1> 
                            <p className='text-blue-200'>Uptime Gurantee</p>
                        </div> 
                        <div>
                            <h1 className='text-4xl font-bold text-white mb-2'>24/7</h1> 
                            <p className='text-blue-200'>Support Available</p>
                        </div>  
                 </div>
                </div>
            </section> 

            {/* CONTACT SECTION */}
            <section className='py-40'>
                    <div className='bg-gradient-to-r from-blue-600 to-blue-800 w-[40vw] mx-auto text-center  pt-20 pb-20 rounded-2xl'> 
                        <h1 className='text-white font-bold text-3xl'>Ready to Join the Network?</h1> 
                        <Link to="/contact">
                        <p className='text-blue-100 text-xl text-center pt-10 pb-10'>Contact our Super Admin team to get your pharmacy onboarded and start collaborating with the network today.</p> 
                        <button className='bg-white text-center rounded-xl w-30 h-10 cursor-pointer'>
                            Get Started
                        </button> 
                        </Link>
                    </div>
            </section> 

            {/* FOOTER */} 
                <footer className='border-t border-gray-200 bg-gray-50 py-8'> 
                        <div className='px-4 flex flex-col md:flex-row items-center justify-between'> 
                            <div>
                            <p className='text-gray-600'>
                                © 2026 PharmaLink. All rights reserved. Platform for pharmacy network management.
                            </p> 
                            </div> 
                            <div>  
                                <Link to="/system-flow">
                            <button className='text-blue-600 cursor-pointer hover:underline'>
                                View System Flow Diagram 
                            </button> 
                            </Link>
                            </div>
                    </div>
                </footer>
        </div>
    )
} 
 
export default Home;    


const FeatureCard = ({icon, title, description}: {icon: any, title:string, description:string}) => { 
    return (
        <div className='bg-white rounded-xl p-8 shadow-lg shadow-gray-300 w-[80%] border border-blue-100'>
            <div>{icon}</div> 
            <h1 className='text-xl font-bold mb-3 mt-6'> {title} </h1>
            <p className='text-gray-600'> {description} </p>
        </div> 
    )
}


