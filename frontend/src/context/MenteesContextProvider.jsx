import React, { useState } from "react";
import MenteesContext from "./MenteesContext";

const MenteesContextProvider = ({ children }) => {
  let [mentees, setMentees] = useState(null);

  return (
    <MenteesContext.Provider value={{ mentees, setMentees }}>
      {children}
    </MenteesContext.Provider>
  );
};

export default MenteesContextProvider;
