import '../App.css'; 
import { Shield, Building2, User} from 'lucide-react';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';  




function Login() { 
    const navigate = useNavigate(); 
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');
    const [selectedRole, setSelectedRole] = useState<"super_admin" | "pharmacy" | null>(null);  
    
    const handleLogin = (e: React.FormEvent) => {
         e.preventDefault();  
    
        // Authentication 
        if (selectedRole === "super_admin") {
            // Redirect to super admin dashboard
            navigate('/super-admin/dashboard'); 
        } else if (selectedRole === "pharmacy") {
            // Redirect to pharmacy dashboard
            navigate('/pharmacy-dashboard'); 
        } else {
            alert('Please select a role to continue.'); 
        }
    }; 
    return (
        <div className='p-8 bg-gradient-to-br from-blue-50 to-white mx-auto'> 
            <div className='mx-auto py-40 w-full max-w-5xl'> 
                <div className='mx-auto container'> 
                    <Link to="/home">
                    <div className='flex justify-center items-center gap-2'>
                        <Shield className='text-white bg-blue-600 size-10 p-2 px-2 rounded-lg'/> 
                        <p className='text-2xl font-bold text-blue-900'>PharmaLink</p> 
                    </div>  
                    </Link>
                        <h1 className='text-center py-3 font-bold text-gray-900 text-3xl mb-2'>Welcome back</h1> 
                        <p className='text-center text-gray-600'>Select your role to continue</p>  
                </div> 

                 {!selectedRole ? (
                     <div className='flex justify-center gap-10 py-8 container mx-auto'>      
                     {/* Admin login */} 
                        <div className='max-w-[40%]'  
                            onClick={() => setSelectedRole("super_admin")} 
                            >
                            <FeatureCard 
                            icon={<Shield className='size-25 py-5 px-5 text-blue-200 bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl' />} 
                            title="Super Admin" 
                            subtitle="Platform Owner & Control"  
                            description="Full platform access, pharmacy management, subscription control, and network monitoring" />
                        </div> 

                        {/* Pharmacy login */}  
                        <div className='max-w-[40%]'
                        onClick={() => setSelectedRole('pharmacy')}
                        > 
                            <FeatureCard 
                            icon={<Building2 className='size-25 py-5 px-5 text-blue-200 bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl' />} 
                            title="Pharmacy" 
                            subtitle="Pharmacy Dashboard Access" 
                            description="Manage invetory, serach network drugs, send referrals and collaborate with other pharmacies" />
                        </div> 
                    </div>   
                 ):(
                    /* Login Form */ 
                    <form onSubmit={handleLogin}
                     className='max-w-md mx-auto bg-white p-8 rounded-2xl shadow-md'
                    >   
                <div className="flex items-center gap-3 pb-8">
                <div className={`p-2 rounded-lg ${
                  selectedRole === "super_admin" 
                    ? "bg-blue-900" 
                    : "bg-blue-600"
                }`}>
                  {selectedRole === "super_admin" ? (
                    <Shield className="size-12 text-white" />
                  ) : (
                    <Building2 className="size-12 text-white" />
                  )}  
                  </div>  
                  <div>
                        <h2 className='text-xl font-bold text-center'>
                            {selectedRole === "super_admin"
                                ? "Super Admin Login"  
                                : "Pharmacy Login"
                            } 
                        </h2>
                        <p>
                            {selectedRole === "super_admin"
                                ? "Enter your credentials."
                                : "Enter your credentials"
                            }
                        </p> 
                  </div>
                 </div>    
                    <div className='pt-2'>  
                        <label htmlFor="email">Email</label>                       
                        <input 
                            id='email'
                            type='email'
                            placeholder='example@gmail.com'
                            className='w-full border border-gray-300 bg-gray-300 p-3 rounded-2xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} 
                            required
                        /> 
                    </div>

                    <div className='pb-5'>
                        <label htmlFor="password">Password</label>
                        <input 
                            id='password'
                            type='password'
                            placeholder='*********'
                            className='w-full border p-3 border-gray-300 rounded-2xl bg-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} 
                            required
                        /> 
                    </div>

                        <button
                            type='submit'
                            className='w-full bg-gray-900 text-white p-3 pt-3 rounded-2xl border-0 cursor-pointer'
                        >
                            Sign In
                        </button>

                        <button
                            type='button'
                            onClick={() => setSelectedRole(null)}
                            className='w-full mt-4 border-1 border-gray-300 hover:bg-gray-200 p-3 rounded-2xl cursor-pointer'
                        >
                            Back to role selection
                        </button>
                    </form>
                 )
                }

                    <div>
                        <h1 className=' py-5 text-gray-600 text-center'>Looking for Medications?</h1> 
                        <div className='flex justify-center items-center gap-2'>
                                <User className='size-4'/>  
                                <Link to="/search">
                                <p>Access Public Search</p> 
                                </Link>
                        </div>
                    </div>
            </div>
        </div> 
    )
}

export default Login;  

const FeatureCard = ({icon, title, subtitle, description}: {icon:any, title:string, subtitle:string, description:string}) => {
    return (
        <div className='mx-auto bg-white border border-gray-300 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 hover:border-blue-500 cursor-pointer'>
            <div className='mx-auto flex flex-col items-center gap-4 mb-4'>
                {icon}
                    <h2 className='text-lg font-semibold text-gray-900'>{title}</h2>   
                    <h2 className='text-gray-900'>{subtitle}</h2>     <br /> 
            </div>                    
                <div>
                    <p className='text-gray-600 text-center'>{description}</p>
                </div>
        </div>               
    ) 
} 
                       