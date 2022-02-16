import { useState, useContext } from "react";

import { WordFilterContext } from "../contexts/WordFilterContext";

const FilterList = () => {
  const [wordFilterList, setWordFilterList] = useContext(WordFilterContext);
  const [hoverItem, setHoverItem] = useState(null);

  const setFirstWordFilter = (firstWordFilterIndex, value) => {
    const newWordFilterList = wordFilterList.map((filter, i) => {
      if (i === firstWordFilterIndex) {
        filter.from = value;
      }
      return filter;
    });
    setWordFilterList(newWordFilterList);
  };

  const setSecondWordFilter = (secondWordFilterIndex, value) => {
    const newWordFilterList = wordFilterList.map((filter, i) => {
      if (i === secondWordFilterIndex) {
        filter.to = value;
      }
      return filter;
    });
    setWordFilterList(newWordFilterList);
  };

  const deleteWordFilter = (deletedWordFilterIndex) => {
    if (wordFilterList.length <= 1) {
      return;
    }

    const newWordFilterList = [];

    for (let i = 0; i < wordFilterList.length; i++) {
      if (i !== deletedWordFilterIndex) {
        newWordFilterList.push(wordFilterList[i]);
      }
    }
    setWordFilterList(newWordFilterList);
  };

  return (
    <>
      <div id="filter-list-descriptions">
        <p>Input words to be replaced and their replacement</p>
        <p>Click on the arrow to delete a filter</p>
      </div>
      <ul id="filter-list">
        {wordFilterList.map((filter, i) => {
          return (
            <li key={i} className="list-item">
              <input
                className="first-input"
                onChange={(e) => setFirstWordFilter(i, e.target.value)}
                value={filter.from}
              />
              <div
                className="icon-container"
                onMouseEnter={() => setHoverItem(i)}
                onMouseLeave={() => setHoverItem(null)}
              >
                {i === hoverItem ? (
                  <i
                    className="fas fa-times delete-icon"
                    onClick={() => deleteWordFilter(i)}
                  ></i>
                ) : (
                  <i className="fa fa-arrow-right"></i>
                )}
              </div>
              <input
                className="second-input"
                onChange={(e) => setSecondWordFilter(i, e.target.value)}
                value={filter.to}
              />
            </li>
          );
        })}
        <i
          id="add-filter-list-item-icon"
          className="fa fa-plus"
          onClick={() =>
            setWordFilterList([...wordFilterList, { from: "", to: "" }])
          }
        ></i>
      </ul>
    </>
  );
};

export default FilterList;
