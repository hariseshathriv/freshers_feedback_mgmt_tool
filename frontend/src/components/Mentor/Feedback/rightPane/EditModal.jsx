import { useState, useContext } from "react";
import MenteeContext from "../../../../context/MenteeContext";

const EditModal = ({
  handleModal,
  modalPayload,
  handleSave,
  statusEdit,
  commentId,
}) => {
  if (statusEdit == true) {
    //console.log("Edit button brought me here");
  } else {
    //console.log("Add Commnet button brought me here");
  }

  const [weekFeedBack, setFeedBack] = useState(modalPayload);
  const { menteeContext } = useContext(MenteeContext);

  const commentEdit = async () => {
    const formData = {
      comment: weekFeedBack.comment,
      id: commentId,
    };

    try {
      const apiUrl = "http://localhost:3001/api/users/comments/";
      const response = await fetch(apiUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();
      //console.log(responseData);
      if (responseData.status === 400) {
        //alert(responseData.data);
      } else {
        //alert("Comment Updated Successfully.");
        //setFeedBackList(responseData.data);
      }
    } catch (error) {
      //console.error("Error:", error);
    }
  };

  const commentAdd = async () => {
    const formData = {
      mentee_id: menteeContext,
      comment: weekFeedBack.comment,
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
      //console.log(responseData);
      if (responseData.status === 400) {
        alert(responseData.data);
      } else {
        //alert("Comment Added Successfully.");
        //setFeedBackList(responseData.data);
      }
    } catch (error) {
      //console.error("Error:", error);
    }
  };

  //console.log("weekFeedBack: " + JSON.stringify(weekFeedBack));
  const validation = () => {
    if (!(weekFeedBack.weekNo == "" || weekFeedBack.comment == "")) {
      if (statusEdit) {
        //edit wali api
        commentEdit();
      } else {
        //add comment wali api
        commentAdd();
      }
      //handleSave(weekFeedBack);
      handleModal(-1);
    } else {
      console.log("Save Not Ok");
    }
  };
  return (
    <div className="fixed inset-0 bg-transparent">
      <div className="fixed bg-hex-darkgrey text-white h-1/2 w-1/2 px-4 flex flex-col gap-2 pt-2 top-1/4 left-1/4 inset-0 z-99">
        <div className="flex justify-between">
          <span className="text-xl">Comment</span>
          <button
            className="px-2 font-bold bg-white !text-black hover:bg-red-600 hover:!text-white rounded border-white border-2"
            onClick={() => handleModal(-1)}
          >
            X
          </button>
        </div>
        {/* <input
          className="w-1/4 px-2 text-black"
          defaultValue={(weekFeedBack && weekFeedBack.weekNo) || ""}
          onChange={(e) => {
            setFeedBack((prev) => {
              return { ...prev, weekNo: e.target.value };
            });
          }}
          min={1}
          max={52}
          type="number"
          placeholder="Week"
        /> */}
        <textarea
          className="w-full h-3/4 resize-y outline-none rounded-lg text-black text-xl px-3 py-3"
          placeholder="Start typing your comment here! "
          defaultValue={(weekFeedBack && weekFeedBack.comment) || ""}
          onChange={(e) => {
            setFeedBack((prev) => {
              return { ...prev, comment: e.target.value };
            });
          }}
        ></textarea>
        <div className="flex justify-end">
          <button
            className="bg-green-600 text-xl font-bold px-2 py-1 mb-2 rounded hover:text-green-600 hover:bg-white"
            onClick={validation}
          >
            Save
          </button>
          <button
            className="bg-orange-400 text-xl font-bold px-2 ml-4 py-1 mb-2 rounded hover:text-orange-400 hover:bg-white"
            onClick={() => handleModal(-1)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
export default EditModal;
