import React from "react";

const Header = ({ dark, modeChanger }) => {
  return (
    <header>
      <div className="header">
        <nav>
          <a
            href="/"
            alt="github jobs"
            className={`logo ${dark ? "darkest" : "light"}`}
          >
            devjobs
          </a>
          <div className="dark-mode">
            <i className={`fas fa-sun ${dark ? "" : "shine"}`}></i>
            <div className={`toggle ${dark ? "dark" : "light"}`}>
              <input type="checkbox" id="toggle-slide" onClick={modeChanger} />
              <label htmlFor="toggle-slide"></label>
            </div>
            <i className={`fas fa-moon moon ${dark ? "shine" : ""}`}></i>
          </div>
        </nav>
        <div className="header-wrapper">
          <h1>Search Live Jobs</h1>
          <h5>Finding your new job just got easier</h5>
        </div>
      </div>
    </header>
  );
};

export default Header;
