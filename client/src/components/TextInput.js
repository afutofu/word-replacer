import { useContext } from "react";

import { TextInputContext } from "../contexts/TextInputContext";

const TextInput = () => {
  const [text, setText] = useContext(TextInputContext);

  return (
    <div id="text-input">
      <h3>Enter Text</h3>
      <textarea onChange={setText}>{text}</textarea>
      <button>Replace!</button>
    </div>
  );
};

export default TextInput;
