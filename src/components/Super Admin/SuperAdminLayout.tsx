import { Shield, Building2, User, CreditCard, Settings, LayoutDashboard, LogOut, Network, ChartColumn } from "lucide-react";  
import { useLocation, Outlet, Link } from "react-router-dom"; 


const navigation = [
    { name: "Dashboard", href: "/super-admin/dashboard", icon: LayoutDashboard },
    { name: "Pharmacy Management", href: "/super-admin/pharmancy", icon: Building2 },
    { name: "Subscription", href:"/super-admin/subscription", icon: CreditCard}, 
    { name: "Drug Netwrk Monitor", href: "/", icon: Network},
    { name: "Annalytics", href:"/", icon: ChartColumn }, 
    { name: "Settings", href: "/", icon: Settings }
]

function SuperAdminLayout () { 
    const location = useLocation(); 

    return (
        <div className="flex h-screen bg-gray-200">
            {/* Sidebar - Dark Navy for Super Admin */}
            <aside className="bg-[#0D47A1] w-72 text-white flex flex-col">
                    <div className="flex items-center gap-3 p-6 border-b border-blue-800">  
                        <div className="bg-white rounded-lg p-2">
                        <Shield className="text-[#0D47A1] size-6" /> 
                        </div>  
                        <div>
                            <h1 className="font-bold text-xl">
                                PharmaLink
                            </h1> 
                            <p className="text-xs">
                                Super Admin Dashboard
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
                                        ? "bg-blue-800 text-white" 
                                        : "text-blue-100 hover:bg-blue-800/50"
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
                                <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-blue-200 hover:bg-blue-700/50 hover:text-white w-full">
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



export default SuperAdminLayout; 


    <div className="flex h-screen bg-gray-50">
        {/* Sidebar - Dark Navy for Super Admin */}
        <aside className="w-72 bg-[#0D47A1] text-white flex flex-col">
            <div className="p-6 border-b border-blue-800">
            <div className="flex items-center gap-3 mb-2">
                <div className="bg-white p-2 rounded-lg">
                <Shield className="size-6 text-[#0D47A1]" />
                </div>
                <div>
                <h1 className="text-xl font-bold">PharmaLink</h1>
                <p className="text-xs text-blue-200">Super Admin Panel</p>
                </div>
            </div>
            </div>

            <nav className="flex-1 p-4 space-y-1">
            {navigation.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                        ? "bg-blue-800 text-white"
                        : "text-blue-100 hover:bg-blue-800/50"
                    }`}
                >
                    <item.icon className="size-5" />
                    <span>{item.name}</span>
                </Link>
                );
            })}
            </nav>

            <div className="p-4 border-t border-blue-800">
            <Link to="/login">
                <button className="w-full justify-start gap-3 text-blue-100 hover:bg-blue-800/50 hover:text-white">
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