import React, { useState, createContext } from "react";

export const TextInputContext = createContext();

export const TextInputProvider = (props) => {
  const [text, setText] = useState("");

  return (
    <TextInputContext.Provider value={[text, setText]}>
      {props.children}
    </TextInputContext.Provider>
  );
};
