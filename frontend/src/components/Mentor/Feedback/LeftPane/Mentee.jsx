import { useContext } from "react";
import commentContext from "../../../../context/commentContext";
import MenteeContext from "../../../../context/MenteeContext";

const Mentee = ({ id, name, setMentee, mentee }) => {
  const { comment, setCommentContext } = useContext(commentContext);
  const { setMenteeContext } = useContext(MenteeContext);
  const style = `w-4/4 text-hex-lightgrey border border-solid border-black rounded-md pt-1 pb-1 text-2xl hover:bg-hex-lightgrey hover:text-black ${
    mentee === id ? "bg-hex-darkpink" : "bg-hex-blue"
  }`;
  // console.log(mentee+" "+id +" "+style);
  const handleSubmit = () => {
    if (id === mentee) {
      setMentee(null);
      setMenteeContext(null);
    } else {
      setMentee(id);
      setMenteeContext(id);
    }

    // try {
    //   const apiUrl = "http://localhost:3001/api/users/get-comments/" + 1;
    //   const response = await fetch(apiUrl, {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   });
    //   const data = await response.json();
    //   setCommentContext(data);
    // } catch (error) {
    //   console.error("Error:", error);
    // }
  };
  return (
    <>
      <button className={style} onClick={handleSubmit}>
        {name}
      </button>
    </>
  );
};
export default Mentee;
