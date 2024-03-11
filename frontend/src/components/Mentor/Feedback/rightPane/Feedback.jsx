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
    <div className=" bg-gray-200 rounded-md px-3 mt-6 ml-3 mr-3 py-3 grid grid-cols-12 gap-3">
      <div className="col-span-1 text-l font-bold rounded-md px-3 py-2">
        Week {week}
      </div>
      <div className="col-span-9 bg-white rounded-md px-3 py-2">{comment}</div>
      <button
        className="col-span-1 text-white bg-purple-800 font-bold rounded-md px-3 py-2 max-h-10 min-h-10 min-w-30 w-30 hover:text-purple-800 hover:bg-white hover:border-solid hover:border-purple-800"
        onClick={editClickHandle}
      >
        Edit
      </button>
      <button
        className="col-span-1 bg-red-500 text-white font-bold rounded-md pl-2 pr-2 py-2 max-h-10 min-h-10 min-w-30 w-30 hover:bg-white hover:text-red-500"
        onClick={() => handleDelete(id)}
      >
        Delete
      </button>
    </div>
  );
};
export default Feedback;
