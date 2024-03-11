import {useState} from 'react'
import Mentees from "./LeftPane/Mentees";
import FeedBackMenu from './rightPane/FeedBackMenu';
import useUserStatus from '../../../context/UserContext';

const Feedback = () => {
    const { menteeDetails } = useUserStatus();
    const [mentee, setMentee] = useState(null);
    return (
        <div className="flex h-screen">
        <div className="w-1/5">
            <Mentees mentees={menteeDetails} mentee={mentee} setMentee={setMentee} />
        </div>
        <div className="w-4/5">
            <FeedBackMenu mentee={mentee} menteeInfo={menteeDetails.filter((item)=>{return item.id==mentee})}/>
        </div>
        </div>
    );
};

export default Feedback;