import {  Outlet } from "react-router-dom";
// import Navbar from "./navbar/Navbar";
const DefaultLayout = () => {
    return (
        <div className="container"> 
            <Outlet />
        </div>
    )
}

export default DefaultLayout;