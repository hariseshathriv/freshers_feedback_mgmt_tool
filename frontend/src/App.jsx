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
import MentorDashboard from "./components/Mentor/Dashboard/Dashboard";
import Menu from "./components/Menu";

import MentorProfile from "./components/Mentor/Profile/MentorProfile";
import Feedback from "./components/Mentor/Feedback/Feedback";

//context
import MenteesContextProvider from "./context/MenteesContextProvider";
import UserContextProvider from "./context/UserContextProvider";
import CommentContextProvider from "./context/CommentContextProvider";

function App() {
  return (
    <UserContextProvider>
      <CommentContextProvider>
        <MenteesContextProvider>
          <BrowserRouter>
            <div className="app">
              <Menu />
              <div className="flex-col w-full">
                <Navbar />
                <Routes>
                  <Route path="/" element={<Login />} />
                  <Route
                    path="/registration"
                    element={<MentorRegistration />}
                  />
                  <Route path="/dashboard" element={<MentorDashboard />} />
                  <Route path="/Profile" element={<MentorProfile />} />
                  <Route path="/feedback" element={<Feedback />} />
                  <Route path="/adminDashboard" element={<Layout />}>
                    <Route
                      path="/adminDashboard/:key1"
                      element={<MenteeView />}
                    />
                    <Route
                      path="/adminDashboard/:key1/:key2"
                      element={<WeeklyComments />}
                    />
                  </Route>
                </Routes>
              </div>
            </div>
          </BrowserRouter>
        </MenteesContextProvider>
      </CommentContextProvider>
    </UserContextProvider>
  );
}
export default App;
