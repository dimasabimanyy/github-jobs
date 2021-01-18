import React, { useState } from "react";

const Header = () => {
  const [dark, setDark] = useState(false);
  const [light, setLight] = useState(false);
  const [slide, setSlide] = useState(false);

  const darkMode = () => {
    if (slide === false) {
      setSlide(true);
      setDark(true);
      setLight(false);
    } else {
      setSlide(false);
      setLight(true);
      setDark(false);
    }
    console.log("click");
  };

  return (
    <header>
      <div className="header container">
        <nav>
          <a href="/" alt="github jobs" className="logo">
            devjobs
          </a>
          <div className="dark-mode">
            <i className="fas fa-sun"></i>
            <div class="toggle">
              <input type="checkbox" id="toggle-slide" />
              <label for="toggle-slide"></label>
            </div>
            <i className="fas fa-moon"></i>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
