import editImage from "../../../../images/editImage2.png";
import deleteImage from "../../../../images/deleteImage.png";
const Feedback = ({ id, week, comment, setFeedBackList, handleModal }) => {
  const editClickHandle = () => {
    console.log("week " + week + " id " + id + " comment " + comment);
    handleModal(id);
  };

  //Delete Feedback
  const handleDelete = (id) => {
    console.log("delete");
    setFeedBackList((prev) => {
      return prev.filter((item) => {
        return id != item.id;
      });
    });
  };
  return (
    <div className=" bg-hex-pink rounded-md px-3 mt-6 ml-3 mr-3 py-3 grid grid-cols-12 gap-3">
      <div className="col-span-1 bg-hex-lightgrey text-l font-bold rounded-md px-3 py-2">
        Week {week}
      </div>
      <div className="col-span-9 bg-white rounded-md px-3 py-2">{comment}</div>
      <button
        className="col-span-1 text-hex-darkpink bg-hex-lightgrey pb-16 font-bold rounded-md max-h-10 min-h-10 min-w-30 w-30 hover:text-hex-lightgrey hover:bg-white hover:border-solid hover:border-purple-800"
        onClick={editClickHandle}
      >
        <img className=" w-18 h-16 " src={editImage} alt="Edit" />
      </button>
      <button
        className="col-span-1 bg-hex-lightgrey text-white font-bold pb-16 rounded-md max-h-10 min-h-10 min-w-30 w-30 hover:bg-white hover:text-red-500"
        onClick={() => handleDelete(id)}
      >
        <img className="w-18 h-16 " src={deleteImage} alt="Delete" />
      </button>
    </div>
  );
};
export default Feedback;
