const Feedback = ({id,weekNo,comment,setFeedBackList,handleModal}) =>{
  //Delete Feedback
  const handleDelete = (id) =>{
    console.log("delete")
    setFeedBackList((prev)=>{
      return prev.filter((item)=>{
        return id!=item.id;
      })
    })
  }
    return (
      <div className="bg-violet-400 rounded-md px-3 ml-3 mr-3 py-3 grid grid-cols-12 gap-3">
        <div className="col-span-1 text-l font-bold uppercase rounded-md px-3 py-2">
          Week {weekNo}
        </div>
        <div className="col-span-9 bg-white rounded-md px-3 py-2">
          {comment}
        </div>
        <button className="col-span-1 bg-blue-500 text-white font-bold rounded-md px-3 py-2 max-h-10 min-h-10 min-w-30 w-30 hover:bg-white hover:text-blue-500 hover:border-solid hover:border-blue-500 hover:border-4" onClick={()=>handleModal(id)}>
          Edit
        </button>
        <button className="col-span-1 bg-red-800 text-white font-bold rounded-md px-3 py-2 max-h-10 min-h-10 min-w-30 w-30" onClick={()=>handleDelete(id)}>
          Delete
        </button>
      </div>
    );
}
export default Feedback;