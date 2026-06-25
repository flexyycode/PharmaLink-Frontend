import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "./components/Home"; 
import SystemFlow from "./components/SystemFlow"; 
import Contact from "./components/Contact";
import Root from "./components/Root"; 
import Login from "./components/LogIn";



export const router = createBrowserRouter([
    {
        path: "/",
    Component: Root,
    children: [
      { path:"home", index: true, Component: Home }, 
      { path: "system-flow", Component: SystemFlow }, 
      { path: "contact", Component: Contact }, 
      { path: "login", Component: Login },
    ]
    }
]) 