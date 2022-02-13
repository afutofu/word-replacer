import { useState } from "react";

const FilterList = () => {
  const [list, setList] = useState([{}, {}, {}]);

  return (
    <>
      <p id="filter-list-title">
        Input words to be replaced and their replacement
      </p>
      <ul id="filter-list">
        {list.map((filter) => {
          return (
            <li className="list-item">
              <input className="first-input"></input>
              <i className="fa fa-arrow-right"></i>
              <input className="second-input"></input>
            </li>
          );
        })}
        <i id="add-filter-list-item-icon" className="fa fa-plus"></i>
      </ul>
    </>
  );
};

export default FilterList;
