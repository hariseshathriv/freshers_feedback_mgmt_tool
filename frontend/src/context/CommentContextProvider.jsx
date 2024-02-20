import React, { useState } from "react";
import commentContext from "./commentContext";

const CommentContextProvider = ({ children }) => {
  const [comment, setComment] = useState(null);
  const setCommentContext = (commentData) => {
    setComment(commentData);
  };
  return (
    <commentContext.Provider value={{ comment, setCommentContext }}>
      {children}
    </commentContext.Provider>
  );
};

export default CommentContextProvider;
