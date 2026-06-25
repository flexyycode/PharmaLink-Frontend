import  '../App.css'  
import { Network, Send, Phone, Mail } from 'lucide-react'; 
import { useState } from 'react';  
import type { ChangeEvent } from 'react'; 
import { Link } from 'react-router-dom';

interface FormData {
    name: string, 
    phone: string, 
    email: string, 
    message: string,
}

function Contact () { 
    const [formData, setFormData] = useState <FormData>({
        name: "", 
        phone: "",
        email: "", 
        message: ""
    }); 
    const [status, setStatus] = useState <string>('');  

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData, 
            [e.target.name]: e.target.value
        });
    }; 

    // const handleSubmit = async (e: React.FormEvent) => {
    //     e.preventDefault(); 
    //     setStatus('Sending...'); 
    // }
    
    return (
        <div className='py-20 overflow-x-hidden'>  
        <div className='border border-0 rounded-2xl max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-blue-800'> 
           <div className='flex items-center gap-2 justify-center py-10'>
            <Network className='text-white size-15 bg-blue-600 p-2 rounded-2xl' />   
            <Link to='/home'>
            <h1 className='text-3xl text-white'>
                Pharmalink 
              </h1>
            </Link>
           </div>  
            <p className='text-center text-blue-200'>
                Contact us if you would love to be part of PharmaLink 
            </p>  
        {/* <div className="grid md:grid-cols-2 py-5 "> */}
            <div className=''>
              
              <div className="flex space-y-4 justify-center py-10 gap-10  md:grid-cols-2">
                <div className="flex gap-4"> 
                  <div className="p-3">
                    <Mail className="w-5 h-5 text-blue-200"/>
                  </div>
                  <div>
                    <p className="text-blue-200">Email</p>
                    <a href="mailto:suleimanmasaya6@gmail.com" className="text-blue-200 hover:text-blue-400 transition-colors">
                      suleimanmasaya6@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="p-3">
                    <Phone className="w-5 h-5 text-blue-200"/>
                  </div>
                  <div>
                    <p className="text-blue-200">Phone</p>
                    <a href="tel:+2347035914420" className="text-blue-200 hover:text-blue-400 transition-colors">
                      +2347035914420
                    </a>
                  </div>
                </div> 
              </div> 
            </div>  
            <p className='text-center text-blue-200'> You can also message us directly through the form below  </p>
           <form action="" className='py-10 mx-auto max-w-3xl space-y-6 text-white'> 
            <div>
                <label className='flex flex-col py-2'> Pharmacy Name
                <input 
                type="text" 
                id="name"
                name="name"
                value={formData.name} 
                onChange={handleChange}
                required
                className='border rounded-lg px-3' 
                placeholder='Enter Your Pharmacy' 
                /> 
                </label>  
            </div>
            <div>
                <label className='flex flex-col py-2'>Pharmacy Phone
                <input type="number" 
                id='phone' 
                name='phone'
                value={formData.phone} 
                onChange={handleChange}
                required    
                className='border rounded-lg px-3' 
                placeholder='Enter Your Number' 
                /> 
                </label> 
            </div> 
            <div>
                <label className='flex flex-col py-2'>Pharmacy Email
                <input type="email" 
                id='email' 
                name='email'
                value={formData.email} 
                onChange={handleChange}
                required 
                className='border rounded-lg px-3'
                placeholder='Enter Your Email' /> 
                </label>  
            </div>
            <div>
                <label className='flex flex-col py-2'> Message
                <textarea
                id='message'
                name='message'
                value={formData.message} 
                onChange={handleChange}
                required 
                rows={5} 
                className='border rounded-lg px-3 h-4/5'
                placeholder='Write your Message' 
                /> 
                </label>  
            </div>  
            <button
              type="submit" 
              className='flex items-center mx-auto px-5 py-5 gap-2 cursor-pointer bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors'> 
              <Send /> 
              <span>Send Message</span>            
              </button>
           </form> 
        </div> 
        </div> 
    ) 
} 


export default Contact;  