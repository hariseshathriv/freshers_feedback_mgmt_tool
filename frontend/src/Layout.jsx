import React, { useState } from "react";
import AdminPage from './components/Admin/AdminPage'
import MenteeView from './components/Admin/MenteeView'
import WeeklyComments from "./components/Admin/WeeklyComments";
import { Outlet } from "react-router-dom";

const Layout = ()=>{
    const [path, setPath] = useState("");
    return (
        <div className="flex w-full h-[calc(100vh-120px)]">
            <AdminPage/>
            <Outlet  />
        </div>
    )
}

export default Layout;