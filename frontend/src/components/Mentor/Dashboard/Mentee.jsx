const Mentee = ({ id, name, setMentee, mentee }) => {
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
  };
  return (
    <>
      <h1>
        Mentee Name: {name} Mentee Id: {id}
      </h1>
      {/* <button className={style} onClick={handleSubmit}>
        {name}
      </button> */}
    </>
  );
};
export default Mentee;
