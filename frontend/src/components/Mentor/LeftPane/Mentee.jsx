const Mentee = ({id,name,setMentee,mentee}) =>{
    const style = `w-3/4 border border-solid border-black rounded-md text-2xl hover:bg-purple-800 hover:text-white ${
      (mentee === id)? "bg-purple-800 text-white" : "bg-white"
    }`;
    // console.log(mentee+" "+id +" "+style);
    return <>
        <button className={style} onClick={()=>id==mentee?setMentee(null):setMentee(id)}>
            {name}
        </button>    
    </>
}
export default Mentee;