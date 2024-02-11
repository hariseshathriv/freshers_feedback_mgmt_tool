import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import image from "./Image/jmanAdmin.png";

const AdminPage = ({ AdminData }) => {
  const mentors = [
    "Niteshjsjsdjjdsjdsjkdsjdsjkjkjksdjkjkdsjkds ",
    "Rahul",
    "Rohit",
    "Pahal",
    "Johith",
    "Sudheer",
    "Vergab",
    "Abhay",
    "Mihir",
    "Leo",
    "Hari",
    "Naveen",
    "Doss",
    "Modi",
    "Narendra",
    "Nitesh",
    "Rahul",
    "Rohit",
    "Pahal",
    "Johith",
    "Sudheer",
    "Vergab",
    "Abhay",
    "Mihir",
    "Leo",
    "Hari",
    "Naveen",
    "Doss",
    "Modi",
    "Narendra",
  ];

  const [mentorsName, setMentorsName] = useState([]);
  const [filteredMentorsName, setFilteredMentorsName] = useState([]);
  const [searchMentor, setSearchMentor] = useState("");
  const [showMentor, setShowMentor] = useState(false);

  const handleMentorSearch = (tempText) => {
    console.log("Search", searchMentor);
    if (searchMentor === "") setFilteredMentorsName(mentorsName);
    tempText = tempText.toLowerCase();
    let filtered = mentorsName.filter((mentor) => {
      if (mentor.toLowerCase().includes(tempText)) return true;
      return false;
    });
    setFilteredMentorsName(filtered);
  };

  useEffect(() => {
    mentors.sort();
    setMentorsName(mentors);
    setFilteredMentorsName(mentors);
  }, []);
  return (
    <>
    <div className="flex flex-col h-full w-3/12 bg-[#13064f] left-0">
      <div className="z-50 w-full flex rounded-xl p-1 bg-[#13064f] top-0 px-2">
        <div className="w-10/12 rounded-sm flex">
          <input
            type="text"
            placeholder="Search Mentor"
            className="w-full bg-[#220d81] transparent text-2xl p-1 pl-2 text-left outline-none text-white"
            value={searchMentor}
            onChange={(e) => {
              setSearchMentor(e.target.value);
              handleMentorSearch(e.target.value);
            }}
          />
        </div>
        <div className="bg-gray-800 flex w-2/12">
          <FaSearch className="w-full p-1 self-center text-white text-2xl" />
        </div>
      </div>
      <div className="w-full overflow-y-auto bg-[#13064f] ">
        <div className="w-full left-0 flex flex-col divide-y-[0.5px] divide-solid divide-[#2e51f0] items-center">
          {filteredMentorsName.length &&
            filteredMentorsName.map((mentor, index) => (
              <Link
                to={`/adminDashboard/${mentor}`}
                className="w-11/12 m-1 p-2 pb-1 text-left text-2xl text-gray-200 text-ellipsis overflow-x-hidden "
              >
                {mentor}
              </Link>
            ))}
        </div>
      </div>
    </div>
    {/* {path.split("/").length==2 && <img src={image}/>} */}
    </>
  );
};

export default AdminPage;
