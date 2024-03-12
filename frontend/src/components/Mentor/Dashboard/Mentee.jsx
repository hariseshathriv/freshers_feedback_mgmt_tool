const Mentee = ({ id, name, setMentee, mentee }) => {
  const style = `w-3/4 border border-solid border-black rounded-md text-2xl hover:bg-purple-800 hover:text-black ${
    mentee === id ? "bg-hex-blue text-black" : "bg-white"
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
      <h1 className="text-xl text-hex-blue">
        Mentee Name: <span className="text-xl text-hex-darkpink">{name}</span>
        <p>
          Mentee Id: <span className="text-xl text-hex-darkpink">{id}</span>
        </p>
      </h1>
      {/* <button className={style} onClick={handleSubmit}>
        {name}
      </button> */}
    </>
  );
};
export default Mentee;
