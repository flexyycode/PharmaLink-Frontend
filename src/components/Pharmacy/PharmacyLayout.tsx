import { Building2, User, LayoutDashboard, LogOut, Network, Package, Send } from "lucide-react";  
import { useLocation, Outlet, Link } from "react-router-dom"; 


const navigation = [
    { name: "Dashboard", href: "/pharmacy/dashboard", icon: LayoutDashboard },
    { name: "My Inventory", href: "/pharmacy/inventory", icon: Package },
    { name: "Network Search", href:"/pharmacy/networkSearch", icon: Network}, 
    { name: "Referrals", href: "/pharmacy/referrals", icon: Send},
    { name: "Profile", href: "/pharmacy/profile", icon: User }
]

function PharmacyLayout () { 
    const location = useLocation(); 

    return (
        <div className="flex h-screen bg-gray-200">
            {/* Sidebar - Dark Navy for Pharmacy Dashboard */}
            <aside className="bg-[#1e49c9] w-72 text-white flex flex-col">
                    <div className="flex items-center gap-3 p-6 border-b border-blue-600">  
                        <div className="bg-white rounded-lg p-2">
                        <Building2 className="text-[#0D47A1] size-6" /> 
                        </div>  
                        <div>
                            <h1 className="font-bold text-xl">
                                PharmaLink
                            </h1> 
                            <p className="text-xs">
                                Pharmacy Dashboard
                            </p>
                        </div>
                    </div> 

                    <nav className="flex-1 p-4 y-space-1">
                        {navigation.map((item) => {
                            const isActive = location.pathname === item.href; 
                            return (
                                <Link 
                                    key={item.name} 
                                    to={item.href} 
                                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                                        isActive 
                                        ? "bg-blue-600 text-white" 
                                        : "text-blue-100 hover:bg-blue-500/50"
                                    }`}
                                >
                                    <item.icon className="size-5" /> 
                                    <span>{item.name}</span>
                                </Link>
                            )
                        })} 
                        </nav>

                        <div className="p-4 border-t border-blue-800">
                            <Link to="/login">
                                <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-blue-200 hover:bg-blue-800/50 hover:text-white w-full">
                                    <LogOut className="size-5" /> 
                                    Logout
                                </button>
                            </Link>
                        </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-auto">
                <Outlet />
            </main>
        </div>
    )
}



export default PharmacyLayout; 