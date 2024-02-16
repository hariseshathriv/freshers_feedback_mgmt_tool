import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState, useContext } from "react";

import Navbar from "./components/Navbar";
import Login from "./components/Login";
import AdminPage from "./components/Admin/AdminPage";
import MenteeView from "./components/Admin/MenteeView";
import WeeklyComments from "./components/Admin/WeeklyComments";
import MentorRegistration from "./components/MentorRegistration";
import Layout from "./Layout";
import MentorDashboard from "./components/Mentor/Dashboard";

import UserContextProvider from "./context/UserContextProvider";
import LeftNavbar from "./components/LeftNavbar";

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <div className="app">
        <LeftNavbar />
        <div className="flex-col w-full">
          <Navbar />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/registration" element={<MentorRegistration />} />
            <Route path="/dashboard" element={<MentorDashboard />} />
            <Route path="/adminDashboard" element={<Layout />}>
              <Route path="/adminDashboard/:key1" element={<MenteeView />} />
              <Route
                path="/adminDashboard/:key1/:key2"
                element={<WeeklyComments />}
              />
            </Route>
          </Routes>
        </div>
        </div>
      </BrowserRouter>
    </UserContextProvider>
  );
}
export default App;
