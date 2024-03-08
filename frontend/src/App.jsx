import "./App.css";
<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from "react-router-dom";
=======
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
>>>>>>> refs/remotes/origin/main
import { useEffect, useState, useContext } from "react";

import Login from "./components/Login";
import MentorRegistration from "./components/MentorRegistration";
import LayoutAdmin from "./LayoutAdmin";
import MentorDashboard from "./components/Mentor/Dashboard/Dashboard";

import MentorProfile from "./components/Mentor/Profile/MentorProfile";
import Feedback from "./components/Mentor/Feedback/Feedback";

//context
<<<<<<< HEAD
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
=======
// import UserContextProvider from "./context/UserContextProvider";
// import CommentContextProvider from "./context/CommentContextProvider";
import { UserProvider } from "./context/UserContext";
import AdminDashBoard from "./components/Admin1/AdminDashBoard";
import AdminMentee from "./components/Admin1/AdminMentee";
import LayoutMentor from "./LayoutMentor";

function App() {
  const MentorComp = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    useEffect(() => {
      107.1;
      if (pathname === "/mentor" || pathname === "/mentor/")
        navigate("/mentor/dashboard", { replace: true });
    });
  };

  const AdminComp = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    useEffect(() => {
      if (pathname === "/admin" || pathname === "/admin/")
        navigate("/admin/dashboard", { replace: true });
    });
  };

  const LoginComp = ()=>{
    const navigate = useNavigate();
    useEffect(() => {
        navigate("/", { replace: true });
    });
  }


  const [user, setUser] = useState({});
  const [loginStatus, setLoginStatus] = useState(false);
  const login = (user) => {
    setLoginStatus(true);
    setUser(user);
  };
  const logout = () => {
    setLoginStatus(false);
    setUser("");
  };

  return (
    <UserProvider value={{ user, loginStatus, login, logout }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/registration" element={<MentorRegistration />} />
          {loginStatus ? (
            <>
              <Route
                path="/mentor"
                element={
                  <>
                    <LayoutMentor /> <MentorComp />
                  </>
                }
              >
                <Route path="/mentor/dashboard" element={<MentorDashboard />} />
                <Route path="/mentor/profile" element={<MentorProfile />} />
                <Route path="/mentor/feedback" element={<Feedback />} />
              </Route>
              <Route
                path="/admin"
                element={
                  <>
                    <LayoutAdmin />
                    <AdminComp />
                  </>
                }
              >
                <Route path="/admin/dashBoard" element={<AdminDashBoard />} />
                <Route path="/admin/feedback" element={<AdminMentee />} />
                <Route path="/admin/profile" element={<MentorProfile />} />
              </Route>
            </>
          ) : <Route path="/*" element={<LoginComp />}/>
        }
        </Routes>
      </BrowserRouter>
    </UserProvider>
>>>>>>> refs/remotes/origin/main
  );
}
export default App;
