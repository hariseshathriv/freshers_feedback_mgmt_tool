import { useState, useContext, useEffect } from "react";
import Mentees from "./LeftPane/Mentees";
import FeedBackMenu from "./rightPane/FeedBackMenu";
import UserContext from "../../../context/UserContext";
import MenteesContext from "../../../context/MenteesContext";
import commentContext from "../../../context/commentContext";
import feedback from "./feedbackData.js";

const Feedback = () => {
  const { comment, setCommentContext } = useContext(commentContext);
  const { user } = useContext(UserContext);
  let { mentees, setMentees } = useContext(MenteesContext);

  const [mentee, setMentee] = useState(null);
  mentees = mentees ?? feedback; //if no no mentees then it won't crash

  useEffect(() => {
    const getmentees = async () => {
      try {
        const apiUrl =
          "http://localhost:3001/api/users/get-mentees/" + user.data.id;
        const response = await fetch(apiUrl, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setMentees(data.mentees);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    getmentees();
  }, []);

  let menteeInfo;
  if (mentee != "undefined" || mentee != "null")
    menteeInfo = () => {
      mentees?.filter((item) => {
        return item.id == mentee;
      });
    };
  else {
    menteeInfo = {};
  }

  return (
    <div className="flex h-screen">
      <div className="w-1/5">
        <Mentees mentees={mentees} mentee={mentee} setMentee={setMentee} />
      </div>
      <div className="w-4/5">
        <FeedBackMenu mentee={mentee} menteeInfo={menteeInfo} />
      </div>
    </div>
  );
};

export default Feedback;
