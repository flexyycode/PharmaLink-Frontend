import { router } from './routes.tsx'; 
import './App.css';
import { RouterProvider } from 'react-router-dom';

function App() { 
    return ( 
        <div> 
            <RouterProvider router={router} /> 
        </div>
    )
}



export default App; 