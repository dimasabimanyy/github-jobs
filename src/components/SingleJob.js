import React from "react";

const SingleJob = (props) => {
  const { singleJob } = props.location.state;

  console.log(singleJob);

  return <div></div>;
};

export default SingleJob;
