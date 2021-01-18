import React, { useState } from "react";

const JobModal = ({ openModal, changeModal }) => {
  return (
    <div
      className={`${openModal ? "open-modal" : ""} job-detail`}
      id="job-detail"
    >
      <div className="apply-job">
        <h1>Testing Modal</h1>
        <p>Lorem</p>
        <button onClick={changeModal}>Close</button>
      </div>
    </div>
  );
};

export default JobModal;
