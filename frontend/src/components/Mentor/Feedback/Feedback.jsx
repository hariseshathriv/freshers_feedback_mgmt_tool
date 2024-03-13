import { useState, useContext, useEffect } from "react";
import Mentees from "./LeftPane/Mentees";
import FeedBackMenu from "./rightPane/FeedBackMenu";
import UserContext from "../../../context/UserContexts";
import MenteesContext from "../../../context/MenteesContext";
const Feedback = () => {
  const { user } = useContext(UserContext);
  let { mentees, setMentees } = useContext(MenteesContext);
  useEffect(() => {
    const getmentees = async () => {
      // console.log("feedback user is: ");
      // console.log(user);
      try {
        const apiUrl = "http://localhost:3001/api/users/get-mentees/" + user.id;
        const response = await fetch(apiUrl, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        await setMentees(Object.values(data.mentees));
        //console.log("Mentees are: ");
        //console.log(data.mentees);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    getmentees();
  }, []);

  // const [mentees, setMentees] = useState(user.data.mentees);
  const [mentee, setMentee] = useState(null);
  return (
    <div className="flex h-screen">
      <div className="w-1/5 bg-white">
        <Mentees mentees={mentees} mentee={mentee} setMentee={setMentee} />
      </div>
      <div className="w-4/5 bg-white">
        <FeedBackMenu
          mentee={mentee}
          menteeInfo={mentees.filter((item) => {
            return item.id == mentee;
          })}
        />
      </div>
    </div>
  );
};

export default Feedback;
