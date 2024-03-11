import { useContext } from "react";
import useCommentContext from "../../../../context/commentContext";


const Mentee = ({ id, name, setMentee, mentee }) => {
  const { comment, setCommentContext } = useContext(commentContext);
  const style = `w-3/4 border border-solid border-black rounded-md text-2xl hover:bg-purple-800 hover:text-black ${
    mentee === id ? "bg-purple-800 text-black" : "bg-white"
  }`;
  // console.log(mentee+" "+id +" "+style);
  const handleSubmit = async () => {
    if (id === mentee) {
      setMentee(null);
    } else {
      setMentee(id);
    }

    try {
      const apiUrl = "http://localhost:3001/api/users/get-comments/" + 1;
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setCommentContext(data);
    } catch (error) {
      console.error("Error:", error);
    }
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
