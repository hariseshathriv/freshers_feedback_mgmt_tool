import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { useEffect, useState } from "react";

import Login from "./components/Login";
import MentorRegistration from "./components/MentorRegistration";
import LayoutAdmin from "./LayoutAdmin";
import MentorDashboard from "./components/Mentor/Dashboard/Dashboard";
import MentorProfile from "./components/Profile/MentorProfile";
import Feedback from "./components/Mentor/Feedback/Feedback";
import { UserProvider } from "./context/UserContext";
import AdminDashBoard from "./components/Admin/AdminDashBoard";
import AdminMentee from "./components/Admin/AdminMentee";
import LayoutMentor from "./LayoutMentor";
import MenteesContextProvider from "./context/MenteesContextProvider";
import MenteeContextProvider from "./context/MenteeContextProvider";
import UserContextsProvider from "./context/UserContextsProvider";
import CommentContextProvider from "./context/CommentContextProvider";

function App() {
  const MentorComp = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
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

  const LoginComp = () => {
    const navigate = useNavigate();
    useEffect(() => {
      navigate("/", { replace: true });
    });
  };

  const [user, setUser] = useState({});
  const [loginStatus, setLoginStatus] = useState(false);
  const [mentorDetails, setMentorDetails] = useState([]);
  const [menteeDetails, setMenteeDetails] = useState([]);
  const [comments, setComments] = useState({});

  const login = (user) => {
    console.log(user);
    localStorage.setItem("loginStatus", true);
    localStorage.setItem("user", JSON.stringify(user));
    setLoginStatus(true);
    setUser(user);
  };
  const logout = () => {
    localStorage.setItem("loginStatus", false);
    localStorage.setItem("user", JSON.stringify({}));
    localStorage.setItem("menteeDetails", JSON.stringify([]));
    localStorage.setItem("mentorDetails", JSON.stringify([]));
    setLoginStatus(false);
    setUser({});
    updateMentorDetails([]);
    updateMenteeDetails([]);
  };

  const updateMentorDetails = (data) => {
    data.sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (nameA <= nameB) {
        return -1;
      }
      return 1;
    });
    localStorage.setItem("mentorDetails", JSON.stringify(data));
    setMentorDetails(data);
  };

  const updateMenteeDetails = (data) => {
    localStorage.setItem("menteeDetails", JSON.stringify(data));
    setMenteeDetails(data);
  };

  return (
    <UserProvider
      value={{
        user,
        loginStatus,
        login,
        logout,
        mentorDetails,
        menteeDetails,
        updateMentorDetails,
        updateMenteeDetails,
      }}
    >
      <BrowserRouter>
        <UserContextsProvider>
          <CommentContextProvider>
            <MenteesContextProvider>
              <MenteeContextProvider>
                <Routes>
                  <Route path="/" element={<Login />} />
                  <Route
                    path="/registration"
                    element={<MentorRegistration />}
                  />
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
                        <Route
                          path="/mentor/dashboard"
                          element={<MentorDashboard />}
                        />
                        <Route path="/mentor/feedback" element={<Feedback />} />
                        <Route
                          path="/mentor/profile"
                          element={<MentorProfile />}
                        />
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
                        <Route
                          path="/admin/dashBoard"
                          element={<AdminDashBoard />}
                        />
                        <Route
                          path="/admin/feedback"
                          element={<AdminMentee />}
                        />
                        <Route
                          path="/admin/profile"
                          element={<MentorProfile />}
                        />
                      </Route>
                    </>
                  ) : (
                    <Route path="/*" element={<LoginComp />} />
                  )}
                </Routes>
              </MenteeContextProvider>
            </MenteesContextProvider>
          </CommentContextProvider>
        </UserContextsProvider>
      </BrowserRouter>
    </UserProvider>
  );
}
export default App;
