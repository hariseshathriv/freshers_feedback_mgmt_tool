import Mentee from './Mentee'
const Mentees = ({mentees,mentee,setMentee}) =>{
    return <div className="flex flex-col gap-3 py-10 px-5">
        <div className="text-white text-3xl">Choose Mentees</div>
        {
            mentees.map((item)=>{
                return <Mentee key={item.id}  {...item} mentee={mentee} setMentee={setMentee}/>
            })
        }
    </div>
}
export default Mentees;