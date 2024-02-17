const Mentee = ({id,name,setMentee,mentee}) =>{
    const style = `w-3/4 border border-solid border-black rounded-md text-2xl hover:bg-purple-800 hover:text-white ${
      (mentee === id)? "bg-purple-800 text-white" : "bg-white"
    }`;
    // console.log(mentee+" "+id +" "+style);
    const handleSubmit = async() => {

        if(id === mentee){
            setMentee(null);
        } else{
            setMentee(id);
        }

        try {
            const apiUrl = "http://localhost:3001/api/users/get-comments/"+id;
            const response = await fetch(apiUrl, {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            });
      
            const data = await response.json();
            console.log(data);
          } catch (error) {
            console.error("Error:", error);
          }
    }
    return <>
        <button className={style} onClick={handleSubmit}>
            {name}
        </button>    
    </>
}
export default Mentee;