import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
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
import MenteeContextProvider from "./context/MenteeContextProvider";
import UserContextsProvider from "./context/UserContextsProvider";
import CommentContextProvider from "./context/CommentContextProvider";
import AdminDashBoard from "./components/Admin1/AdminDashBoard";
import AdminMentee from "./components/Admin1/AdminMentee";

function App() {
  const AdminComp = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    useEffect(() => {
      if (pathname === "/admin" || pathname === "/admin/")
        navigate("/admin/dashboard", { replace: true });
    });
  };
  return (
    <UserContextsProvider>
      <CommentContextProvider>
        <MenteesContextProvider>
          <MenteeContextProvider>
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
                    <Route path="/feedback" element={<Feedback />} />
                    <Route path="/Profile" element={<MentorProfile />} />
                    <Route
                      path="/admin"
                      element={
                        <>
                          <Layout />
                          <AdminComp />
                        </>
                      }
                    >
                      <Route
                        path="/admin/dashBoard"
                        element={<AdminDashBoard />}
                      />
                      <Route path="/admin/feedback" element={<AdminMentee />} />
                      <Route
                        path="/admin/profile"
                        element={<MentorProfile />}
                      />
                    </Route>
                  </Routes>
                </div>
              </div>
            </BrowserRouter>
          </MenteeContextProvider>
        </MenteesContextProvider>
      </CommentContextProvider>
    </UserContextsProvider>
  );
}
export default App;
