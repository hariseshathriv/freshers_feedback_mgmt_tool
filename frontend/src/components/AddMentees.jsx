import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function AddMentees() {
  //const {user} = useContext(UserContext);

  const [formData, setFormData] = useState({
    email: "",
    name: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log(user.data.id);
    try {
      const response = await fetch("http://localhost:3001/api/users/mentees", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      alert("Mentee Added is successful");
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <div className="">
        <label htmlFor="email" className="text-xl loginLabel">
          Email
        </label>
        <input
          name="email"
          type="email"
          id="email"
          required
          className="loginInput"
          onChange={handleInputChange}
        />
        <label htmlFor="email" className="text-xl loginLabel">
          Name
        </label>
        <input
          name="name"
          type="text"
          id="name"
          required
          className="loginInput"
          onChange={handleInputChange}
        />

        <button
          type="submit"
          className="text-2xl loginBtn"
          onClick={handleSubmit}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default AddMentees;
