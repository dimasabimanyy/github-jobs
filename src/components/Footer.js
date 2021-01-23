import React from "react";

const Footer = ({ dark }) => {
  return (
    <footer className={`${dark ? "darkest" : "light"}`}>
      <div className="container">
        <p>
          &copy;{" "}
          <a
            href="https://github.com/dimasabimanyy/github-jobs"
            alt="Github Repo "
          >
            Dimas Abimanyu 2021
          </a>{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
