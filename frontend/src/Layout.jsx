import React, { useState } from "react";
import AdminPage from './components/Admin/AdminPage'
import MenteeView from './components/Admin/MenteeView'
import WeeklyComments from "./components/Admin/WeeklyComments";
import SideBar from "./components/Admin1/SideBar"
import { Outlet } from "react-router-dom";

const Layout = ()=>{
    const [path, setPath] = useState("");
    return (
        <div className="flex">
            <SideBar />
            <Outlet />
        </div>
    )
}

export default Layout;