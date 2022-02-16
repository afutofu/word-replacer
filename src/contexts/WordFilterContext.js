import React, { useState, createContext } from "react";

export const WordFilterContext = createContext();

export const WordFilterProvider = (props) => {
  const [wordFilterList, setWordFilterList] = useState([
    { from: "", to: "" },
    { from: "", to: "" },
  ]);

  return (
    <WordFilterContext.Provider value={[wordFilterList, setWordFilterList]}>
      {props.children}
    </WordFilterContext.Provider>
  );
};
