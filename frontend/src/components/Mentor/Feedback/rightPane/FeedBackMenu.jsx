//import feedBackData from "../feedbackData.js";
import Feedback from "./Feedback.jsx";
import EditModal from "./EditModal.jsx";
import { useState, useEffect, useContext, useRef } from "react";
import commentContext from "../../../../context/commentContext";
import MenteeContext from "../../../../context/MenteeContext";

const FeedBackMenu = ({ mentee, menteeInfo }) => {
  const { comment, setCommentContext } = useContext(commentContext);
  const [feedBackList, setFeedBackList] = useState(comment);
  const { menteeContext } = useContext(MenteeContext);
  let [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const initialRender = useRef(false);
  useEffect(() => {
    if (!initialRender.current) {
      initialRender.current = true;
    } else {
      setIsLoading(true);
      async function fetchData() {
        try {
          const apiUrl =
            "http://localhost:3001/api/users/get-comments/" + menteeContext;
          const response = await fetch(apiUrl, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
          const data = await response.json();
          setIsLoading(false);
          setCommentContext(Object.values(data.data));
          setFeedBackList(Object.values(data.data));
        } catch (error) {
          //console.error("Error:", error);
          setFeedBackList([]);
        }
      }
      fetchData();
    }
  }, [menteeContext, count]);

  const [modal, modalToogle] = useState(false);
  const [modalPayload, setModalPayload] = useState();

  const handleSave = (data) => {
    setCount((prev) => prev + 1);
    //console.log(data);
    let updated = false;
    const updateList = feedBackList.map(({ id, weekNo, comment }) => {
      if (weekNo == data.weekNo) {
        updated = true;
        return { id, weekNo, comment: data.comment };
      }
      return { id, weekNo, comment };
    });
    if (!updated) {
      updateList.push({
        ...data,
        id: updateList[updateList.length - 1] + 1,
      });
    }
    setFeedBackList(updateList);
  };
  const [statusEdit, setStatusEdit] = useState(false);
  const [commentID, setCommentID] = useState();
  const handleModal = (id, commentId = -1) => {
    if (commentId != -1) setCommentID(commentId);
    setCount((prev) => prev + 1);
    if (id == -1) {
      modalToogle(!modal);
      return;
    }
    if (id == -2) setStatusEdit(false);
    else setStatusEdit(true);
    setModalPayload(() => {
      let [feedback] = feedBackList.filter((item) => {
        if (item.id == id) {
          //console.log("item is: " + JSON.stringify(item));
          return { weekNo: item.weekNo, comment: item.comment };
        }
      });
      // console.log(
      //   "feedback " +
      //     JSON.stringify(feedback) +
      //     "feedback.weekNo: " +
      //     feedback.weekNo
      // );
      let lastWeek = feedback ? feedback.week : "0"; //feedback has week property and not weekNo
      //console.log(lastWeek + " is last week ");
      if (feedBackList.length > 0 && id == -2)
        lastWeek = feedBackList.length + 1;
      let feedBackComment = feedback ? feedback.comment : "";
      // if (feedback) {
      feedback = { weekNo: lastWeek, comment: feedBackComment };
      //}
      return feedback;
    });
    modalToogle(!modal);
  };
  return mentee ? (
    <>
      {isLoading ? (
        <div className="loader-container">
          {/* Loader here */}
          <div className="loader"></div>
        </div>
      ) : (
        <div className="flex flex-col gap-3 ml-3 mt-8 mr-3 py-3 bg-white">
          <div className="flex justify-center mr-3">
            {/* <span className="text-3xl ml-auto">
            Mentee: <span className="text-hex-blue">{menteeInfo[0].name}</span>
          </span> */}
            <button
              onClick={() => handleModal(-2)} // -2 because we don't want it to just turn toggle off instead take week and comment from the user
              className="bg-green-600 rounded border pt-2 pb-2 border-solid font-bold text-white px-4 ml-auto"
            >
              ADD COMMENT
            </button>
          </div>
          {feedBackList.map((item) => {
            return (
              <Feedback
                handleModal={handleModal}
                setFeedBackList={setFeedBackList}
                key={item.id}
                {...item}
              />
            );
          })}
          {modal ? (
            <EditModal
              modalPayload={modalPayload}
              handleModal={handleModal}
              handleSave={handleSave}
              statusEdit={statusEdit}
              commentId={commentID}
            />
          ) : (
            <></>
          )}
        </div>
      )}
    </>
  ) : (
    <h1 className="text-black text-3xl flex justify-center mt-10">
      Choose a Mentee to review
    </h1>
  );
};
export default FeedBackMenu;
