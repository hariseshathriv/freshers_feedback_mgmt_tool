import React, { useState } from "react";
import SideBar from "./components/Admin/SideBar"
import { Outlet } from "react-router-dom";

const LayoutAdmin = ()=>{
    return (
        <div className="flex">
            <SideBar />
            <div className="flex-grow">
            <Outlet /></div>
        </div>
    )
}

export default LayoutAdmin;
