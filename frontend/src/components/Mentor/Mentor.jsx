import {useState, useContext} from 'react'
import Mentees from "./LeftPane/Mentees";
import FeedBackMenu from './rightPane/FeedBackMenu';
import UserContext from '../../context/UserContext';

const Mentor = () => {
    const {user} = useContext(UserContext);
    const [mentees,setMentees] = useState(user.data.mentees);
    const [mentee, setMentee] = useState(null);
    return (
        <div className="flex h-screen">
        <div className="w-1/5 bg-black">
            <Mentees mentees={mentees} mentee={mentee} setMentee={setMentee} />
        </div>
        <div className="w-4/5 bg-zinc-900">
            <FeedBackMenu mentee={mentee} menteeInfo={mentees.filter((item)=>{return item.id==mentee})}/>
        </div>
        </div>
    );
};

export default Mentor;