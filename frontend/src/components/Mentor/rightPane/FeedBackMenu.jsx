import feedBackData from '../feedbackData.js'
import Feedback from './Feedback.jsx'
import EditModal from './EditModal.jsx'
import {useState} from 'react'
const FeedBackMenu = ({mentee,menteeInfo}) =>{
  const [feedBackList,setFeedBackList] = useState(feedBackData);
  const [modal,modalToogle] = useState(false);
  const [modalPayload,setModalPayload] = useState()
  const handleSave = (data) =>{
    // console.log(data);
    let updated = false;
    const updateList = feedBackList.map(({id,weekNo,comment})=>{
        if(weekNo == data.weekNo){
          updated = true
          return {id,weekNo,comment:data.comment}
        }
        return {id,weekNo,comment}
    })
    if(!updated){
      updateList.push({...data,id:updateList[updateList.length-1].id+1});
    }
    setFeedBackList(updateList);
  }
  const handleModal = (id) =>{
    setModalPayload(()=>{
      let [feedback] = feedBackList.filter((item)=>{
        return item.weekNo==id;
      })
      if(!feedback){
        feedback={weekNo:"",comment:""}
      }
      return feedback;
    })
    modalToogle(!modal)
  }
  return mentee ? (
    <>
      <div className="flex flex-col gap-3 ml-3 mt-8 mr-3 py-3 bg-white">
        <div className="flex justify-center mr-3">
          <span className="text-3xl ml-auto">Mentee, {menteeInfo[0].name}</span>
          <button
            onClick={()=>handleModal()}
            className="bg-green-600 rounded border border-solid font-bold text-white px-4 ml-auto"
          >
            ADD COMMENT
          </button>
        </div>
        {feedBackList.map((item) => {
          return (
            <Feedback handleModal={handleModal}
              setFeedBackList={setFeedBackList}
              key={item.id}
              {...item}
            />
          );
        })}
        {modal?<EditModal modalPayload={modalPayload} handleModal={handleModal} handleSave={handleSave}/>:<></>}
        
      </div>
    </>
  ) : (
    <h1 className="text-white text-7xl flex justify-center mt-10">
      Choose a Mentee to review
    </h1>
  );
}
export default FeedBackMenu;