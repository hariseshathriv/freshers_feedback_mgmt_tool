// import feedBackData from "../feedbackData.js";
// import Feedback from "./Feedback.jsx";
// import EditModal from "./EditModal.jsx";
// import commentContext from "../../../../context/commentContext.js";
// import { useState, useContext } from "react";

// const FeedBackMenu = ({ mentee, menteeInfo }) => {
//   const { comment, setComment } = useContext(commentContext);
//   let commentData = [];
//   if (comment !== null && comment.status === 400) {
//     alert(comment.message);
//   } else if (comment !== null && comment.status === 200) {
//     commentData = comment.data;
//   } else {
//     console.log(comment);
//   }
//   const [feedBackList, setFeedBackList] = useState(feedBackData); //useState(commentData);  useState(feedBackData) //put in this state variable on mentee click
//   const [modal, modalToogle] = useState(false);
//   const [modalPayload, setModalPayload] = useState();

//   const handleSave = async (data) => {
//     const formData = {
//       mentee_id: menteeInfo[0].id,
//       comment: data.comment,
//     };

//     try {
//       const apiUrl = "http://localhost:3001/api/users/comments/";
//       const response = await fetch(apiUrl, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       const responseData = await response.json();
//       console.log(responseData);
//       if (responseData.status === 400) {
//         alert(responseData.data);
//       } else {
//         setFeedBackList(responseData.data);
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }

//     let updated = false;
//     const updateList = feedBackList.map(({ id, week, comment }) => {
//       const weekNo = week;
//       if (weekNo == data.weekNo) {
//         updated = true;
//         return { id, weekNo, comment: data.comment };
//       }
//       return { id, weekNo, comment };
//     });
//     if (!updated) {
//       updateList.push({
//         ...data,
//         id: updateList[updateList.length - 1].id + 1,
//       });
//     }
//     setFeedBackList(updateList);
//   };
//   const handleModal = (id) => {
//     setModalPayload(() => {
//       let [feedback] = feedBackList.filter((item) => {
//         return item.weekNo == id;
//       });
//       if (!feedback) {
//         feedback = { weekNo: "", comment: "" };
//       }
//       return feedback;
//     });
//     modalToogle(!modal);
//   };
//   return mentee ? (
//     <>
//       <div className="flex flex-col gap-3 ml-3 mt-8 mr-3 py-3 bg-white">
//         <div className="flex justify-center mr-3">
//           <span className="text-3xl text-purple-800 ml-auto">
//             Mentee, {menteeInfo[0].name}
//           </span>
//           <button
//             //onClick={() => handleModal()}
//             className="bg-purple-700  hover:bg-purple-900 rounded border border-solid font-bold text-black px-4 ml-auto"
//           >
//             ADD COMMENT
//           </button>
//         </div>
//         {feedBackList.map((item) => {
//           return (
//             <Feedback //two components, right and left
//               handleModal={handleModal}
//               setFeedBackList={setFeedBackList}
//               key={item.id}
//               {...item}
//             />
//           );
//         })}
//         {modal ? (
//           <EditModal //pops up when we click add comment
//             modalPayload={modalPayload}
//             handleModal={handleModal}
//             handleSave={handleSave}
//           />
//         ) : (
//           <></>
//         )}
//       </div>
//     </>
//   ) : (
//     <h1 className="text-black text-3xl flex justify-center mt-10">
//       Choose a Mentee to review
//     </h1>
//   );
// };
// export default FeedBackMenu;

import feedBackData from "../feedbackData.js";
import Feedback from "./Feedback.jsx";
import EditModal from "./EditModal.jsx";
import { useState, useEffect, useContext, useRef } from "react";
import commentContext from "../../../../context/commentContext";
import MenteeContext from "../../../../context/MenteeContext";

const FeedBackMenu = ({ mentee, menteeInfo }) => {
  const { comment, setCommentContext } = useContext(commentContext);
  const [feedBackList, setFeedBackList] = useState(comment);
  const { menteeContext } = useContext(MenteeContext);
  let count = 0;
  const initialRender = useRef(false);
  useEffect(() => {
    if (!initialRender.current) {
      initialRender.current = true;
    } else {
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
          setCommentContext(Object.values(data.data));
          setFeedBackList(Object.values(data.data));
        } catch (error) {
          console.error("Error:", error);
        }
      }
      fetchData();
    }
  }, [menteeContext, count]);

  const [modal, modalToogle] = useState(false);
  const [modalPayload, setModalPayload] = useState();

  const handleSave = (data) => {
    count++;
    console.log(data);
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
  const handleModal = (id = null) => {
    count++;
    if (id == -1) {
      modalToogle(!modal);
      return;
    }
    if (id == -2) setStatusEdit(false);
    else setStatusEdit(true);
    ModalPayloadModalPayload;
    setModalPayload(() => {
      let [feedback] = feedBackList.filter((item) => {
        return item.weekNo == id;
      });
      let lastWeek = 0;
      if (feedBackList.length > 0 && id == null)
        lastWeek = feedBackList.length + 1;
      if (feedback) {
        feedback = { weekNo: lastWeek, comment: "" };
      }
      return feedback;
    });
    modalToogle(!modal);
  };
  return mentee ? (
    <>
      <div className="flex flex-col gap-3 ml-3 mt-8 mr-3 py-3 bg-white">
        <div className="flex justify-center mr-3">
          <span className="text-3xl ml-auto">Mentee: {menteeInfo[0].name}</span>
          <button
            onClick={() => handleModal(-2)} // -2 because we don't want it to just turn toggle off instead take week and comment from the user
            className="bg-green-600 rounded border border-solid font-bold text-white px-4 ml-auto"
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
