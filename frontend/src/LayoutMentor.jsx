import React from "react";
import { Outlet } from "react-router-dom";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";

function LayoutMentor() {
  return (
    <div className="app">
      <Menu />
      <div className="flex-col w-full">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}

export default LayoutMentor;
