import React, { useState } from "react";
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