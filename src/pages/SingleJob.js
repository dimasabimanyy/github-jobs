import React, { useState, useEffect } from "react";
import axios from "axios";

const SingleJob = ({ match }) => {
  const [job, setJob] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions/${match.params.id}.json?markdown=true`
      )
      .then((res) => {
        setJob(res.data);
        setLoading(false);
      })
      .catch((e) => setError(true));
  }, []);

  console.log(job);

  console.log(job);
  return (
    <section className="single-job">
      {error ? (
        <h1>Error</h1>
      ) : loading ? (
        <h1>Loading</h1>
      ) : (
        <div className="single-job-top">
          <h1>{job.company}</h1>
        </div>
      )}
    </section>
  );
};

export default SingleJob;
