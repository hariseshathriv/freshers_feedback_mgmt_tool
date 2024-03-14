import React,{useState , useEffect , useContext} from 'react'
import AddMenteeDashBoard from './AddMenteeDashBoard';
import TopBar from './TopBar';

const AdminDashBoard = ({title}) => {
  const [dateRanges, setDateRanges] = useState([]);
  const [showMenteeBox, setShowMenteeBox] = useState(false);

  const compareDates = (date)=>{
    const today = new Date();
    if(date.getYear() != today.getYear()) return date.getYear()<today.getYear()?-1:1;
    if(date.getMonth() != today.getMonth()) return date.getMonth()<today.getMonth()?-1:1;
    if(date.getDate() != today.getDate()) return date.getDate()<today.getDate()?-1:1;
    return 0;
  }

  useEffect(()=>{
      const firstDate = new Date("2024-02-12");
      let data=[]
      let startDate = new Date(firstDate);
      for(;compareDates(startDate)<1;startDate.setDate(startDate.getDate()+7)){
        const endDate = new Date(startDate);
        endDate.setDate(endDate.getDate()+6);
        const status = compareDates(endDate)<0;
        const ranges = {
          startDate : startDate.toISOString().substring(0,10),
          endDate : endDate.toISOString().substring(0,10),
          status: status
        }
        data.push(ranges);
      }
      setDateRanges(data);
  },[])
  return (
    <div className='flex-grow'>
      <TopBar title={"Dashboard"}/>
      <div className='px-12 py-4 mt-2'>
        <div className='flex py-10 justify-end'>
          <span className='inline-flex bg-hex-blue p-2 text-hex-lightgrey cursor-pointer' onClick={()=>setShowMenteeBox(true)}>Add Mentee</span>
        </div>
        <div className='bg-[#19105B] p-2 text-[#F2F1F6] text-lg'>Feedbacks</div>
        <table className='w-full border-none text-left text-[#19105B]'>
          <thead className='bg-[#D1CFDE]'>
            <tr>
              <th className='w-10/12 p-2 pl-2'>Date Range</th>
              <th className='w-2/12 p-2 pl-2'>Status</th>
            </tr>
          </thead>
          {
            dateRanges.map((date,index)=>(
              <tr className='bg-[#F2F1F6] border-b border-[#D1CFDE]' key={index}>
                <td className='p-2 pl-2'>{date.startDate} - {date.endDate}</td>
                <td className='p-2 pl-2'>
                  <div className={`rounded-lg p-1 px-2 inline-flex ${date.status?"bg-[#0dff09b8]":"bg-[#FF095C]"}`}>
                    {
                      date.status ? "Completed":"Not Completed"
                    }
                  </div>
                </td>
              </tr>
            ))
          }
        </table>
      </div>
      {
        showMenteeBox &&
          <AddMenteeDashBoard onClose={()=>setShowMenteeBox(false)} />
      }
    </div>
  )
}

export default AdminDashBoard