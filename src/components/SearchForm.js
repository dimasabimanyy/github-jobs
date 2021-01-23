import React from "react";

function SearchForm({ params, onParamChange, dark }) {
  return (
    <div id="search-form" className="wrapper">
      <form className={`search-form ${dark ? "dark" : "light"}`}>
        <div className={`form-control form-input ${dark ? "dark" : "light"}`}>
          <i className="fas fa-search"></i>
          <input
            placeholder="Filter by title, companies, expertise..."
            className={`search-input ${dark ? "dark" : "light"}`}
            onChange={onParamChange}
            value={params.description}
            type="text"
            name="description"
          />
        </div>
        <div className={`form-control form-input ${dark ? "dark" : "light"}`}>
          <i className="fas fa-map-marker-alt"></i>
          <input
            className={`search-input ${dark ? "dark" : "light"}`}
            type="text"
            name="location"
            placeholder="Filter by location..."
            onChange={onParamChange}
            value={params.location}
          />
        </div>
        <div className={`form-control ${dark ? "dark" : "light"}`}>
          <div className="full-time-check">
            <input
              onChange={onParamChange}
              value={params.full_time}
              name="full_time"
              id="full-time"
              label="Only Full Time"
              type="checkbox"
              className={`${dark ? "dark" : "light"}`}
            />
          </div>
          <span className="full-time">Full Time Only</span>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
