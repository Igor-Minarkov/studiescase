import React from "react";
import "./Filter.css";

function Filters({ onClickAll, all, onClick, filters }) {
  return (
    <div>
      <form className="Filter-form">
        <ul className="filter-ul">
          <li onClick={onClickAll}>
            <input
              type="checkbox"
              checked={all}
              className="hidden-checkbox"
            />
            <label htmlFor="all">All</label>
          </li>
          {filters.map((filter, i) => (
            <li key={i} data-index={i} onClick={onClick}>
              <input
                id={filter.name}
                type="checkbox"
                checked={filter.status}
                className="hidden-checkbox"
              />
              <label htmlFor={filter.name}>{filter.name}</label>
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default Filters;
