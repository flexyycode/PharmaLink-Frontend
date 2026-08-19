import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "./components/Home"; 
import SystemFlow from "./components/SystemFlow"; 
import Contact from "./components/Contact";
import Root from "./components/Root"; 
import Login from "./components/LogIn";
import SuperAdminDashboard from "./components/Super Admin/SuperAdminDashboard"; 
import SuperAdminLayout from "./components/Super Admin/SuperAdminLayout";
import PharmacyManagement from "./components/Super Admin/PharmacyManagement";
import SubscriptionControl from "./components/Super Admin/SubscriptionControl";
import SuperAdminSettings from "./components/Super Admin/SuperAdminSettings"; 
import DrugNetworkMonitor from "./components/Super Admin/DrugNetworkMonitor";
import PharmacyLayout from "./components/Pharmacy/PharmacyLayout"; 
import PharmacyDashboard from "./components/Pharmacy/PharmacyDashboard"
import MyInventory from "./components/Pharmacy/MyInventory";
// import ProtectedRoute from "./components/ProtectedRoute";
import NetworkSearch from "./components/Pharmacy/NetworkSearch";




export const router = createBrowserRouter([
    {
        path: "/",
    Component: Root,
    children: [ 
      { index: true, element: <Navigate to="home" replace /> },
      { path:"home", index: true, Component: Home }, 
      { path: "system-flow", Component: SystemFlow }, 
      { path: "contact", Component: Contact }, 
      { path: "login", Component: Login }, 



      {
        path: "super-admin",
        // element: (
        //   <ProtectedRoute>
        //     <SuperAdminLayout />
        //   </ProtectedRoute>
        // ), 
        Component: SuperAdminLayout, 
        children: [
          { index: true, element: <Navigate to="dashboard" replace /> }, 
          { path: "dashboard", Component: SuperAdminDashboard },  
          { path: "pharmancy", Component: PharmacyManagement}, 
          { path: "subscription", Component: SubscriptionControl },
          { path: "settings", Component: SuperAdminSettings }, 
          { path: "network", Component: DrugNetworkMonitor }
        ],
      },   
      

      {
        path: "pharmacy", 
        // element: (
        //   <ProtectedRoute>
        //     <PharmacyLayout />
        //   </ProtectedRoute>
        // ),  
        Component: PharmacyLayout, 
        children: [
          { index: true, element: <Navigate to="dashboard" replace /> },  
          { path: "dashboard", Component: PharmacyDashboard }, 
          { path: "inventory", Component: MyInventory }, 
          { path: "networkSearch", Component: NetworkSearch }, 
        ]
      }
    ] 
    }
]) 