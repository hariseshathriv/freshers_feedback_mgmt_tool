import {useState, useContext} from 'react'
import Mentees from "./LeftPane/Mentees";
import FeedBackMenu from './rightPane/FeedBackMenu';
import UserContext from '../../../context/UserContext';

const Feedback = () => {
    const {user} = useContext(UserContext);
    const [mentees,setMentees] = useState(user.data.mentees);
    const [mentee, setMentee] = useState(null);
    return (
        <div className="flex h-screen">
        <div className="w-1/5">
            <Mentees mentees={mentees} mentee={mentee} setMentee={setMentee} />
        </div>
        <div className="w-4/5">
            <FeedBackMenu mentee={mentee} menteeInfo={mentees.filter((item)=>{return item.id==mentee})}/>
        </div>
        </div>
    );
};

export default Feedback;