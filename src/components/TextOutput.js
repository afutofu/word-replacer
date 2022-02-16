import { useContext } from "react";

import { TextContext } from "../contexts/TextContext";

const TextOutput = () => {
  const [replacedText] = useContext(TextContext).replacedText;

  return (
    <div id="text-textarea">
      <h3>Replaced Text</h3>
      <textarea readOnly={true} value={replacedText}></textarea>
    </div>
  );
};

export default TextOutput;
