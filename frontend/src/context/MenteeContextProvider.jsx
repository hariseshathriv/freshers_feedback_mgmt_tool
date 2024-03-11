import React, { useState } from "react";
import MenteeContext from "./MenteeContext";

const MenteeContextProvider = ({ children }) => {
  let [menteeContext, setMenteeContext] = useState(null);

  return (
    <MenteeContext.Provider value={{ menteeContext, setMenteeContext }}>
      {children}
    </MenteeContext.Provider>
  );
};

export default MenteeContextProvider;
