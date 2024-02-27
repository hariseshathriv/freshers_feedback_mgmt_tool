import React, { useState } from "react";
import logo from "../images/logo2.jpeg";
import logo2 from "../images/jmanLogo3.png";
import sideImage from "../images/registerSideRight.avif";
import registerationImageButton from "../images/registrationImageButton.png";

function MentorRegistration() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
    dob: "",
    designation: "",
    gender: "",
    mobile_no: "",
  });

  const [apiResponse, setApiResponse] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:3001/api/users/registration",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();
      setApiResponse(data.message);
      alert("Registration is successful");
      // console.log(data);
      window.location.href = "http://localhost:5173/";
    } catch (error) {
      console.error("Error:", error);
      setApiResponse("An error occurred. Please try again.");
    }
  };
  const [typePassword, setTypePassword] = useState("password");
  const [typeConfirmPassword, setConfirmTypePassword] = useState("password");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setConfirmShowPassword] = useState(true);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setConfirmShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    handleInputChange();
  };

  return (
    <div className="mentorBox">
      <img className="jmanLogo" src={logo2} alt="jmanImage" />
      <h1 className="text-3xl navHeading regHeading mb-10">
        Freshers Feedback Management Tool
      </h1>

      <div className="mentor">
        <h2 className="text-3xl mentorHeading">MENTOR REGISTRATION</h2>
        <form class="mentorForm">
          <div class="mb-2  mentorDiv">
            <label for="email" className="text-xl mentorLabel">
              Email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              className="mentorInput"
              required
              onChange={handleInputChange}
            />
          </div>
          <div class="mb-2  mentorDiv">
            <label for="name" className="text-xl mentorLabel">
              Name
            </label>
            <input
              name="name"
              type="text"
              className="mentorInput"
              required
              onChange={handleInputChange}
            />
          </div>
          <div class="mb-2  mentorDiv">
            <label for="designation" className="text-xl mentorLabel">
              Designation
            </label>
            <input
              name="designation"
              type="text"
              className="mentorInput"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-2  mentorDiv">
            <label for="gender" className="  text-xl mentorLabel">
              Gender
            </label>
            <span className="mentorDivGender">
              <label>
                <input type="radio" name="gender" value="Male" /> Male
              </label>
              <label>
                <input type="radio" name="gender" value="Female" /> Female
              </label>
              <label>
                <input type="radio" name="gender" value="Other" /> Other
              </label>
            </span>
          </div>
          <div class="mb-2  mentorDiv">
            <label for="name" className="text-xl mentorLabel">
              D.O.B
            </label>
            <input
              name="dob"
              type="date"
              className="mentorInput"
              required
              onChange={handleInputChange}
            />
          </div>
          <div class="mb-2  mentorDiv">
            <label for="password" className="text-xl mentorLabel">
              Password
            </label>
            <span>
              <input
                name="password"
                type={typePassword}
                className="mentorInputPassword"
                value={password}
                required
                onChange={handlePassword}
              />
              <span
                class="show-password-icon"
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
          <div class="mb-2  mentorDiv">
            <label for="password" className="text-xl mentorLabel">
              Confirm Password
            </label>
            <span>
              <input
                name="confirm_password"
                type={typeConfirmPassword}
                className="mentorInputPassword"
                value={confirmpassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <span
                class="show-password-icon"
                onClick={() => {
                  if (typeConfirmPassword === "password")
                    setConfirmTypePassword((prev) => "text");
                  else setConfirmTypePassword((prev) => "password");
                  toggleConfirmPasswordVisibility();
                }}
              >
                {showConfirmPassword ? "👀" : "👁️"}
              </span>
            </span>
          </div>
          <div class="mb-2  mentorDiv">
            <label for="name" className="text-xl mentorLabel">
              Mobile No.
            </label>
            <input
              name="mobile_no"
              type="tel"
              className="mentorInput"
              required
              onChange={handleInputChange}
            />
          </div>
          <button
            type="submit"
            className="text-2xl mentorBtn"
            onClick={handleSubmit}
          >
            Register
            <img
              className="loginImageButton"
              src={registerationImageButton}
              alt=""
            />
          </button>
        </form>
      </div>
      <img className="sideImage" src={sideImage} alt="SideImage" />
    </div>
  );
}

export default MentorRegistration;
