import '../App.css'; 
import { Shield, Building, User} from 'lucide-react';
import { Link } from 'react-router-dom';
 

function Login() {
    return (
        <div className='p-8 bg-gradient-to-br from-blue-50 to-white mx-auto'> 
            <div className='mx-auto'>
                    <div className='flex justify-center gap-2'>
                        <Shield className='text-white bg-blue-500'/> 
                        <p>PharmaLink</p> 
                    </div> 
                        <h1 className='text-center py-3'>Welcome back</h1> 
                        <p className='text-center py-2'>Select your role to continue</p>  
                    <div className='flex justify-between mx-auto'>      
                        <div>
                            <FeatureCard 
                            icon={<Shield />} 
                            title="Super Admin" 
                            subtitle="Platform Owner & Control"  
                            description="Full platform access, pharmacy management, subscription control, and network monitoring." />
                        </div> 
                        <div>
                            <FeatureCard 
                            icon={<Shield />} 
                            title="Super Admin" 
                            subtitle="Platform Owner & Control" 
                            description="Full platform access, pharmacy management, subscription control, and network monitoring." />
                        </div> 
                    </div>  
            </div>
        </div> 
    )
}

export default Login;  

const FeatureCard = ({icon, title, subtitle, description}: {icon:any, title:string, subtitle:string, description:string}) => {
    return (
        <div className='bg-white border border-gray-300 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300'>
            <div className='flex items-center gap-4 mb-4'>
                {icon}
                <div> 
                    <h2 className='text-lg font-semibold text-gray-900'>{title}</h2>   
                    <h2 className='text-gray-900'>{subtitle}</h2>    
                </div> 
                <div>
                    <p className='text-gray-600'>{description}</p>
                </div>
            </div> 
        </div>               
    ) 
} 
                       