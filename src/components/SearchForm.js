import React from "react";

function SearchForm({ params, onParamChange, dark }) {
  return (
    <>
      <form className={`search-form ${dark ? "dark" : "light"}`}>
        <div className={`form-control form-input ${dark ? "dark" : "light"}`}>
          <i className="fas fa-search"></i>
          <input
            placeholder="Filter by title, companies, expertise..."
            onChange={onParamChange}
            value={params.description}
            name="description"
            type="text"
            className={`search-input ${dark ? "dark" : "light"}`}
          />
        </div>
        <div className={`form-control form-input ${dark ? "dark" : "light"}`}>
          <i className="fas fa-map-marker-alt"></i>
          <input
            type="text"
            name="location"
            placeholder="Filter by location..."
            onChange={onParamChange}
            value={params.location}
            className={`search-input ${dark ? "dark" : "light"}`}
          />
        </div>
        <div className={`form-control ${dark ? "dark" : "light"}`}>
          <div className="full-time-check">
            <input
              onChange={onParamChange}
              value={params.full_time}
              name="full_time"
              id="full_time"
              label="Only Full Time"
              type="checkbox"
              className={`${dark ? "dark" : "light"}`}
            />
          </div>
          <span className="full-time">Full Time Only</span>
          <button type="submit" className="btn btn-blue">
            Search
          </button>
        </div>
      </form>
    </>
  );
}

export default SearchForm;
