import React, { useState } from "react";
import AdminPage from './components/Admin1/AdminPage'
import MenteeView from './components/Admin1/MenteeView'
import WeeklyComments from "./components/Admin1/WeeklyComments";
import SideBar from "./components/Admin/SideBar"
import { Outlet } from "react-router-dom";

const LayoutAdmin = ()=>{
    const [path, setPath] = useState("");
    return (
        <div className="flex">
            <SideBar />
            <div className="flex-grow">
            <Outlet /></div>
        </div>
    )
}

export default LayoutAdmin;