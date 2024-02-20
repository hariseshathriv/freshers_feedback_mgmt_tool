import {useState} from 'react';
const EditModal = ({handleModal,modalPayload,handleSave}) =>{
    const [weekFeedBack,setFeedBack] = useState(modalPayload)
    const validation = () =>{
      if (!(weekFeedBack.weekNo == "" || weekFeedBack.comment=="")) {
        handleSave(weekFeedBack);
        handleModal();
      }
      else{
        console.log("save Not ok");
      }
    }
    return (
      <div className="fixed inset-0 bg-transparent">
        <div className="fixed bg-stone-800 text-white h-1/2 w-1/2 px-4 flex flex-col gap-2 pt-2 top-1/4 left-1/4 inset-0 z-99">
          <div className="flex justify-between">
            <span className="text-xl">Comment</span>
            <button
              className="px-2 font-bold hover:bg-white hover:text-black rounded border-white border-2"
              onClick={() => handleModal()}
            >
              X
            </button>
          </div>
          <textarea
            className="w-full h-3/4 resize-y outline-none rounded-lg text-black text-xl px-3 py-3"
            defaultValue={
              (weekFeedBack && weekFeedBack.comment) || ""
            }
            onChange={(e) => {
              setFeedBack((prev) => {
                return { ...prev, comment: e.target.value };
              });
            }}
            placeholder='Write your comments ...'
          ></textarea>
          <div className="flex justify-end">
            <button className="bg-green-600 text-xl font-bold px-2 py-1 rounded hover:text-green-600 hover:bg-white" onClick={validation}
            >
              Save
            </button>
            <button
              className="bg-orange-400 text-xl font-bold px-2 ml-4 py-1 rounded hover:text-orange-400 hover:bg-white"
              onClick={() => handleModal()}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
}
export default EditModal