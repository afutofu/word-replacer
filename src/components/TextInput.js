import { useContext } from "react";

import { WordFilterContext } from "../contexts/WordFilterContext";
import { TextContext } from "../contexts/TextContext";

const TextInput = () => {
  const [wordFilter] = useContext(WordFilterContext);
  const [text, setText] = useContext(TextContext).text;
  // eslint-disable-next-line no-unused-vars
  const [replacedText, setReplacedText] = useContext(TextContext).replacedText;

  const replaceWords = () => {
    // Locate line breaks and separate string into paragraphs
    let paragraphs = text.split("\n");

    paragraphs = paragraphs.map((text) => {
      let tempReplacedText = text.replace(/\s+/g, " "); // Gets rid of extra whitespaces (more than one space) between words
      let textAsList = tempReplacedText.split(" "); // Split each word as a string in a list

      // Start filtering each word in the list
      textAsList = textAsList.map((word) => {
        let isFiltered = false;
        let from = "";
        let to = "";

        wordFilter.forEach((filter) => {
          const tempWord = word.replace(/(\.|,|\?|!)+$/, ""); // Remove trailing special-characters.

          // If the "cleaned" word is the filtered word, exit the loop and save the word and its replacement
          if (tempWord === filter.from) {
            isFiltered = true;
            from = filter.from;
            to = filter.to;
            return;
          }
        });

        // If the word is part of the filter, replace it
        if (isFiltered) {
          return word.replace(from, to);
        }

        // Else keep the word as is
        return word;
      });

      // Once each word in the list is filtered, join them into a string separated by a space
      return textAsList.join(" ");
    });

    // Set replaced text as the joining of paragraph strings separated by new lines
    setReplacedText(paragraphs.join("\n"));
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
