// import AddMentees from '../../AddMentees';
import { useState, useContext, useEffect } from "react";
import Mentees from "./Mentees";
import UserContexts from "../../../context/UserContexts.js";
import MenteesContext from "../../../context/MenteesContext";
import feedback from "../Feedback/feedbackData.js";
import useUserStatus from '../../../context/UserContext.js'

const Dashboard = () => {
  // const [showMentee , setShowMentee] = useState(false);
  const {menteeDetails} = useUserStatus();

  const { user } = useContext(UserContexts); // user is the res's data not the res

  let { mentees, setMentees } = useContext(MenteesContext);
  // let [mentees, setMentees] = useState(null);

  const [mentee, setMentee] = useState(null);
  mentees = mentees ?? feedback; //if no no mentees then it won't crash

  useEffect(() => {
    setMentees(menteeDetails);
    // const getmentees = async () => {
    //   try {
    //     const apiUrl = "http://localhost:3001/api/users/get-mentees/" + user.id;
    //     const response = await fetch(apiUrl, {
    //       method: "GET",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     });
    //     const data = await response.json();
    //     // console.log("Hello GUys",menteeDetails,typeof menteeDetails);
    //     // console.log(data.mentees);
    //     // console.log(typeof data.mentees);
    //   } catch (error) {
    //     console.error("Error:", error);
    //   }
    // };

    // getmentees();
  },[]);

  return (
    <>
      <div className="flex h-screen">
        <div className="w-1/5">
          <Mentees mentees={mentees} mentee={mentee} setMentee={setMentee} />
        </div>
      </div>

      {/* <button className='text-purple-800 bg-transparent mt-4 ml-4 w-40 h-14 border border-solid border-black hover:bg-purple-800 hover:text-black active:bg-black font-bold uppercase text-xm px-3 py-1 rounded outline-none focus:outline-none mr-3 mb-1 ease-linear transition-all duration-150'
            onClick={() => setShowMentee(!showMentee)}>Add mentee </button>
            {showMentee && <AddMentees />} */}
    </>
  );
};
export default Dashboard;
