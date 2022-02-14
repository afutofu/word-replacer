import { useContext } from "react";

import { WordFilterContext } from "../contexts/WordFilterContext";
import { TextContext } from "../contexts/TextContext";

const TextInput = () => {
  const [wordFilter] = useContext(WordFilterContext);
  const [text, setText] = useContext(TextContext).text;
  // eslint-disable-next-line no-unused-vars
  const [replacedText, setReplacedText] = useContext(TextContext).replacedText;

  const replaceWords = () => {
    // Gets rid of extra whitespaces (more than one space) between words
    let tempReplacedText = text.replace(/\s+/g, " ");
    let textAsList = tempReplacedText.split(" ");

    textAsList = textAsList.map((word) => {
      let isFiltered = false;
      let from = "";
      let to = "";
      wordFilter.forEach((filter) => {
        const tempWord = word.replace(/\.|,|\?|!+$/, ""); // Remove trailing special-characters.

        if (tempWord === filter.from) {
          isFiltered = true;
          from = filter.from;
          to = filter.to;
          return;
        }
      });

      if (isFiltered) {
        return word.replace(from, to);
      }

      return word;
    });

    tempReplacedText = textAsList.join(" ");

    setReplacedText(tempReplacedText);
  };

  return (
    <div id="text-textarea">
      <h3>Enter Text</h3>
      <textarea
        onChange={(e) => setText(e.target.value)}
        value={text}
      ></textarea>
      <button onClick={replaceWords}>Replace!</button>
    </div>
  );
};

export default TextInput;
