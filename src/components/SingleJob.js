import React, { useState, useEffect } from "react";

const SingleJob = ({ id }) => {
  const [singleJob, setSingleJob] = useState({});

  useEffect(() => {
    const getData = fetch(
      `https://jobs.github.com/positions/${id}.json?markdown=true`
    )
      .then((res) => res.json())
      .then((data) => setSingleJob(data) && console.log(data));

    getData();
  }, []);

  return <div></div>;
};

export default SingleJob;
