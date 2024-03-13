import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserContexts from "../context/UserContexts";
import logo from "../images/logo2.jpeg";
import logo2 from "../images/jmanLogo3.png";
import sideImage from "../images/loginSideRight.avif";
import loginImage from "../images/loginImage.png";
import useUserStatus from "../context/UserContext";

function Login() {
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: password,
  });
  const [typePassword, setTypePassword] = useState("password");
  const [showPassword, setShowPassword] = useState(true);
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const { setUserContext } = useContext(UserContexts);

  const { login, updateMentorDetails, updateMenteeDetails, loginStatus } =
    useUserStatus();

  const navigate = useNavigate();

  const [apiResponse, setApiResponse] = useState(null);

  useEffect(() => {
    const getUser = () =>
      new Promise(async (res, rej) => {
        const user = localStorage.getItem("user");
        const loginStatus = localStorage.getItem("loginStatus");
        res({ user, loginStatus });
      });

    const handleReload = async () => {
      const data = await getUser();
      const user = await JSON.parse(data.user);
      const loginStatus = await JSON.parse(data.loginStatus);
      //console.log(data);
      if (loginStatus === true) {
        const user = JSON.parse(localStorage.getItem("user"));
        login(user);
        if (user.role === "ADMIN") {
          updateMentorDetails(
            JSON.parse(localStorage.getItem("mentorDetails"))
          );
          navigate("/admin");
          //console.log("admin");
        } else {
          updateMenteeDetails(
            JSON.parse(localStorage.getItem("menteeDetails"))
          );
          navigate("/mentor");
          //console.log("mentor");
        }
        //console.log("found");
      }
    };

    handleReload();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    //console.log(formData);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    handleInputChange(e);
  };

  const handleSubmit = async (e) => {
    //console.log("Passsword is " + password);
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:3001/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const res = await response.json();
      //console.log(res);
      setApiResponse(res.message);
      const { data } = res;
      //console.log("Login data: ");
      //console.log(data);
      setUserContext(data); //update the user data here
      setIsLoading(false);
      if (data.role === "ADMIN") {
        const user = {
          name: data.name,
          id: data.id,
          desg: data.designation,
          email: data.email,
          role: data.role,
        };
        login(user);
        updateMentorDetails(data.mentors);
        navigate("/admin");
      } else if (data.role === "MENTOR") {
        const user = {
          name: data.mentor_name,
          id: data.id,
          desg: data.designation,
          email: data.email,
          role: data.role,
        };
        // console.log(user);
        login(user);
        // console.log(data.mentees, typeof data.mentees);
        updateMenteeDetails(data.mentees);
        //console.log("Hey i am here", data);
        navigate("/mentor");
      } else {
        alert("Wrong Credentials");
        navigate("/");
      }
    } catch (error) {
      setIsLoading(false);
      console.error("Error:", error);
      setApiResponse("An error occurred. Please try again.");
    }
  };

  return (
    <>
      {isLoading ? (
        <div className="loader-container">
          <h1 className="text-xl text-hex-darkpink">You Are Logging In...</h1>
          <div className="loader"></div>
        </div>
      ) : (
        <div className="loginBox">
          <img className="jmanLogo" src={logo2} alt="jmanImage" />
          <h1 className="text-3xl navHeading mb-10">
            Freshers Feedback Management Tool
          </h1>
          <div className="login">
            <h2 className="text-2xl loginHeading">LOGIN</h2>
            <form className="loginForm">
              <div className="mb-5  loginDiv">
                <label htmlFor="email" className="text-xl loginLabel">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  id="email"
                  className="loginInput outline-none"
                  placeholder="name@jman.com"
                  required
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-5 loginDiv">
                <label htmlFor="password" className="text-xl loginLabel">
                  Password
                </label>
                <span>
                  <input
                    name="password"
                    type={typePassword}
                    id="password"
                    className="loginInput outline-none loginInputPassword"
                    placeholder="********"
                    required
                    onChange={handlePassword}
                  />
                  <span
                    class="show-password-icon2 cursor-pointer"
                    onClick={() => {
                      if (typePassword === "password")
                        setTypePassword((prev) => "text");
                      else setTypePassword((prev) => "password");
                      togglePasswordVisibility();
                    }}
                  >
                    {showPassword ? "👀" : "👁️"}
                  </span>
                </span>
              </div>
              <button
                type="submit"
                className="text-2xl loginBtn"
                onClick={handleSubmit}
              >
                Login
                <img className="loginImageButton" src={loginImage} alt="" />
              </button>

              <a href="/" className="mt-14 text-red-600 text-xl underline">
                Forgot Password?
              </a>
            </form>
          </div>
          <img className="sideImage" src={sideImage} alt="SideImage" />
          <a
            href="/registration"
            className="newUserRegister mt-12 text-xl underline"
          >
            New User? Register
          </a>
        </div>
      )}
    </>
  );
}

export default Login;

// http://localhost:3001/api/users/login
