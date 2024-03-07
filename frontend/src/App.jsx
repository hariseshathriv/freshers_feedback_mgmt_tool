import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { useEffect, useState, useContext } from "react";

import Login from "./components/Login";
import MentorRegistration from "./components/MentorRegistration";
import LayoutAdmin from "./LayoutAdmin";
import MentorDashboard from "./components/Mentor/Dashboard/Dashboard";

import MentorProfile from "./components/Mentor/Profile/MentorProfile";
import Feedback from "./components/Mentor/Feedback/Feedback";

//context
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
  );
}
export default App;
