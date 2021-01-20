import React from "react";

const Footer = ({ dark }) => {
  return (
    <footer className={`${dark ? "darkest" : "light"}`}>
      <div className="container">
        <p>
          &copy;{" "}
          <a href="" alt="">
            Dimas Abimanyu 2021
          </a>{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
