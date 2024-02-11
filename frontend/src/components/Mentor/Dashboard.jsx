import Navbar from '../Navbar'
import UserInfo from './UserInfo'
import Mentor from './Mentor'
import Data from "./data";
const Dashboard = () =>{
    return (
        <>
        <Mentor data={Data}/>
        </>
    );
}
export default Dashboard;