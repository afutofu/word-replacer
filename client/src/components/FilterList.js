import { useContext } from "react";

import { WordFilterContext } from "../contexts/WordFilterContext";

const FilterList = () => {
  const [wordFilterList, setWordFilterList] = useContext(WordFilterContext);

  return (
    <>
      <p id="filter-list-title">
        Input words to be replaced and their replacement
      </p>
      <ul id="filter-list">
        {wordFilterList.map((filter) => {
          return (
            <li className="list-item">
              <input className="first-input"></input>
              <i className="fa fa-arrow-right"></i>
              <input className="second-input"></input>
            </li>
          );
        })}
        <i
          id="add-filter-list-item-icon"
          className="fa fa-plus"
          onClick={() =>
            setWordFilterList([...wordFilterList, { replace: "", with: "" }])
          }
        ></i>
      </ul>
    </>
  );
};

export default FilterList;
