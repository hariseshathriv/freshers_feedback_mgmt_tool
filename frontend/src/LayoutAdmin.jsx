import React, { useState } from "react";
import SideBar from "./components/Admin/SideBar"
import { Outlet } from "react-router-dom";

<<<<<<< HEAD:frontend/src/Layout.jsx
const Layout = () => {
  const [path, setPath] = useState("");
  return (
    <div className="flex w-full h-[calc(100vh-120px)]">
      <AdminPage />
      <Outlet />
    </div>
  );
};

export default Layout;
=======
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
>>>>>>> refs/remotes/origin/main:frontend/src/LayoutAdmin.jsx
