import React, { useState, createContext } from "react";

export const TextContext = createContext();

export const TextProvider = (props) => {
  const [text, setText] = useState("");
  const [replacedText, setReplacedText] = useState("");

  return (
    <TextContext.Provider
      value={{
        text: [text, setText],
        replacedText: [replacedText, setReplacedText],
      }}
    >
      {props.children}
    </TextContext.Provider>
  );
};
