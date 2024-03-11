// import { useState } from "react";
// const EditModal = ({ handleModal, modalPayload, handleSave }) => {
//   const [weekFeedBack, setFeedBack] = useState(modalPayload);
//   const validation = () => {
//     if (weekFeedBack.comment !== "") {
//       handleSave(weekFeedBack);
//       handleModal();
//     } else {
//       console.log("save Not ok");
//     }
//   };
//   return (
//     <div className="fixed inset-0 bg-transparent">
//       <div className="fixed bg-stone-800 text-black h-1/2 w-1/2 px-4 flex flex-col gap-2 pt-2 top-1/4 left-1/4 inset-0 z-99">
//         <div className="flex justify-between">
//           <span className="text-xl">Comment</span>
//           <button
//             className="px-2 font-bold hover:bg-white hover:text-black rounded border-white border-2"
//             onClick={() => handleModal()}
//           >
//             X
//           </button>
//         </div>
//         <textarea
//           className="w-full h-3/4 resize-y outline-none rounded-lg text-black text-xl px-3 py-3"
//           defaultValue={(weekFeedBack && weekFeedBack.comment) || ""}
//           onChange={(e) => {
//             setFeedBack((prev) => {
//               return { ...prev, comment: e.target.value };
//             });
//           }}
//           placeholder="Write your comments ..."
//           required={true}
//         ></textarea>
//         <div className="flex justify-end">
//           <button
//             className="bg-green-600 text-xl font-bold px-2 py-1 rounded hover:text-green-600 hover:bg-white"
//             onClick={validation}
//           >
//             Save
//           </button>
//           <button
//             className="bg-orange-400 text-xl font-bold px-2 ml-4 py-1 rounded hover:text-orange-400 hover:bg-white"
//             onClick={() => handleModal()}
//           >
//             Cancel
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default EditModal;

import { useState } from "react";
const EditModal = ({ handleModal, modalPayload, handleSave, statusEdit }) => {
  if (statusEdit == true) {
    //console.log("Edit button brought me here");
  } else {
    //console.log("Add Commnet button brought me here");
  }

  const [weekFeedBack, setFeedBack] = useState(modalPayload);
  console.log("weekFeedBack: " + JSON.stringify(weekFeedBack));
  const validation = () => {
    if (!(weekFeedBack.weekNo == "" || weekFeedBack.comment == "")) {
      if (statusEdit) {
        //edit wali api
      } else {
        //add comment wali api
      }
      handleSave(weekFeedBack);
      handleModal(-1);
    } else {
      console.log("save Not ok");
    }
  };
  return (
    <div className="fixed inset-0 bg-transparent">
      <div className="fixed bg-stone-800 text-white h-1/2 w-1/2 px-4 flex flex-col gap-2 pt-2 top-1/4 left-1/4 inset-0 z-99">
        <div className="flex justify-between">
          <span className="text-xl">Comment</span>
          <button
            className="px-2 font-bold hover:bg-white hover:text-black rounded border-white border-2"
            onClick={() => handleModal(-1)}
          >
            X
          </button>
        </div>
        <input
          className="w-1/4 px-2 text-black"
          defaultValue={(weekFeedBack && weekFeedBack.weekNo) || ""}
          onChange={(e) => {
            setFeedBack((prev) => {
              return { ...prev, weekNo: e.target.value };
            });
          }}
          min={1}
          max={52}
          type="number"
          placeholder="Week"
        />
        <textarea
          className="w-full h-3/4 resize-y outline-none rounded-lg text-black text-xl px-3 py-3"
          placeholder="Start typing your comment here! "
          defaultValue={(weekFeedBack && weekFeedBack.comment) || ""}
          onChange={(e) => {
            setFeedBack((prev) => {
              return { ...prev, comment: e.target.value };
            });
          }}
        ></textarea>
        <div className="flex justify-end">
          <button
            className="bg-green-600 text-xl font-bold px-2 py-1 rounded hover:text-green-600 hover:bg-white"
            onClick={validation}
          >
            Save
          </button>
          <button
            className="bg-orange-400 text-xl font-bold px-2 ml-4 py-1 rounded hover:text-orange-400 hover:bg-white"
            onClick={() => handleModal(-1)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
export default EditModal;
