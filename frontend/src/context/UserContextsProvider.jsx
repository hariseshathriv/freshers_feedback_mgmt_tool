import React, { useState } from "react";
import UserContexts from "./UserContexts";

const UserContextsProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const setUserContext = (userData) => {
    setUser(userData);
  };
  return (
    <UserContexts.Provider value={{ user, setUserContext }}>
      {children}
    </UserContexts.Provider>
  );
};

export default UserContextsProvider;
