import feedBackData from "../feedbackData.js";
import Feedback from "./Feedback.jsx";
import EditModal from "./EditModal.jsx";
import commentContext from "../../../../context/commentContext.js";
import { useState, useContext } from "react";

const FeedBackMenu = ({ mentee, menteeInfo }) => {
  const { comment, setComment } = useContext(commentContext);
  let commentData = [];
  if (comment !== null && comment.status === 400) {
    alert(comment.message);
  } else if (comment !== null && comment.status === 200) {
    commentData = comment.data;
  } else {
    console.log(comment);
  }
  const [feedBackList, setFeedBackList] = useState(feedBackData); //useState(commentData);  useState(feedBackData) //put in this state variable on mentee click
  const [modal, modalToogle] = useState(false);
  const [modalPayload, setModalPayload] = useState();

  const handleSave = async (data) => {
    const formData = {
      mentee_id: menteeInfo[0].id,
      comment: data.comment,
    };

    try {
      const apiUrl = "http://localhost:3001/api/users/comments/";
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();
      console.log(responseData);
      if (responseData.status === 400) {
        alert(responseData.data);
      } else {
        setFeedBackList(responseData.data);
      }
    } catch (error) {
      console.error("Error:", error);
    }

    let updated = false;
    const updateList = feedBackList.map(({ id, week, comment }) => {
      const weekNo = week;
      if (weekNo == data.weekNo) {
        updated = true;
        return { id, weekNo, comment: data.comment };
      }
      return { id, weekNo, comment };
    });
    if (!updated) {
      updateList.push({
        ...data,
        id: updateList[updateList.length - 1].id + 1,
      });
    }
    setFeedBackList(updateList);
  };
  const handleModal = (id) => {
    setModalPayload(() => {
      let [feedback] = feedBackList.filter((item) => {
        return item.weekNo == id;
      });
      if (!feedback) {
        feedback = { weekNo: "", comment: "" };
      }
      return feedback;
    });
    modalToogle(!modal);
  };
  return mentee ? (
    <>
      <div className="flex flex-col gap-3 ml-3 mt-8 mr-3 py-3 bg-white">
        <div className="flex justify-center mr-3">
          <span className="text-3xl text-purple-800 ml-auto">
            Mentee, {menteeInfo[0].name}
          </span>
          <button
            //onClick={() => handleModal()}
            className="bg-purple-700  hover:bg-purple-900 rounded border border-solid font-bold text-black px-4 ml-auto"
          >
            ADD COMMENT
          </button>
        </div>
        {feedBackList.map((item) => {
          return (
            <Feedback //two components, right and left
              handleModal={handleModal}
              setFeedBackList={setFeedBackList}
              key={item.id}
              {...item}
            />
          );
        })}
        {modal ? (
          <EditModal //pops up when we click add comment
            modalPayload={modalPayload}
            handleModal={handleModal}
            handleSave={handleSave}
          />
        ) : (
          <></>
        )}
      </div>
    </>
  ) : (
    <h1 className="text-black text-3xl flex justify-center mt-10">
      Choose a Mentee to review
    </h1>
  );
};
export default FeedBackMenu;
