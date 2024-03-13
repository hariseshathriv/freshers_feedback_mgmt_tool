import editImage from "../../../../images/editImage2.png";
import deleteImage from "../../../../images/deleteImage.png";
import { useState } from "react";
const Feedback = ({ id, week, comment, setFeedBackList, handleModal }) => {
  const [isLoading, setIsLoading] = useState(false);
  const editClickHandle = () => {
    //console.log("week " + week + " id " + id + " comment " + comment);
    handleModal(id, id);
  };

  //Delete Feedback
  const handleDelete = async () => {
    // console.log("delete");
    // setFeedBackList((prev) => {
    //   return prev.filter((item) => {
    //     return id != item.id;
    //   });
    // });
    setIsLoading(true);
    const formData = {
      id: id,
    };

    try {
      const apiUrl = "http://localhost:3001/api/users/comments/";
      const response = await fetch(apiUrl, {
        method: "DELETE",
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
        setFeedBackList((prev) => {
          if (prev.length == 1) return [];
          else return prev;
        });
        //alert("Comment Deleted Successfully.");
        setIsLoading(false);
        //setFeedBackList(responseData.data);
      }
    } catch (error) {
      console.error("Error:", error);
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading ? (
        <div className="loader-container">
          {/* Loader here */}
          <div className="loader"></div>
        </div>
      ) : (
        <div className=" bg-slate-400 rounded-md px-3 mt-6 ml-3 mr-3 py-3 grid grid-cols-12 gap-3">
          <div className="col-span-1 bg-hex-lightgrey text-l rounded-md px-3 py-2">
            Week {week}
          </div>
          <div className="col-span-9 bg-white rounded-md px-3 py-2">
            {comment}
          </div>
          <button
            className="col-span-1 text-hex-darkpink bg-hex-lightgrey pb-16 font-bold rounded-md max-h-10 min-h-10 min-w-30 w-30 hover:text-hex-lightgrey hover:bg-white hover:border-solid hover:border-purple-800"
            onClick={editClickHandle}
          >
            <img className=" w-10 h-10 ml-4 mt-3" src={editImage} alt="Edit" />
          </button>
          <button
            className="col-span-1 bg-hex-lightgrey text-white font-bold pb-16 rounded-md max-h-10 min-h-10 min-w-30 w-30 hover:bg-white hover:text-red-500"
            onClick={() => handleDelete()}
          >
            <img
              className="w-10 h-10 mt-3 ml-3"
              src={deleteImage}
              alt="Delete"
            />
          </button>
        </div>
      )}
    </>
  );
};
export default Feedback;
