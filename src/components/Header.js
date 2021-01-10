import React from "react";
import SearchForm from "./SearchForm";

const Header = () => {
  return (
    <header>
      <div className="header container">
        <nav>
          <a href="/" alt="github jobs" className="logo">
            devjobs
          </a>
          <div className="dark-mode">Dark</div>
        </nav>
        <SearchForm />
      </div>
    </header>
  );
};

export default Header;
