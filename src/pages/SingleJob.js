import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import ReactMarkdown from "react-markdown";

const SingleJob = ({ match }) => {
  const [job, setJob] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`/positions/${match.params.id}.json?markdown=true`)
      .then((res) => {
        setJob(res.data);
        setLoading(false);
      })
      .catch((e) => setError(true) && console.log(error));
  }, []);

  console.log(job);

  return (
    <section id="single-job" className="app">
      <Header />
      {error ? (
        <h1>Error</h1>
      ) : loading ? (
        <h1>Loading</h1>
      ) : (
        <div className="single-job container">
          <div className="sj-heading">
            <div className="sj-heading-left">
              <div className="sj-logo">
                <img src={job.company_logo} alt={job.company} />
              </div>
              <h1>{job.company}</h1>
            </div>

            <a href={job.company_url} className="sj-website">
              Company Site
            </a>
          </div>

          <main className="sj-main-content">
            <div className="sj-top-content">
              <div>
                <p className="sj-date">
                  <i class="far fa-calendar"></i>{" "}
                  {new Date(job.created_at).toLocaleDateString()}
                </p>
                <h1>{job.title}</h1>
                <h5>{job.location}</h5>
              </div>
              <div>
                <a href="" alt="">
                  Apply Now
                </a>
              </div>
            </div>
            <div className="sj-description markdown">
              <ReactMarkdown source={job.description} />
            </div>
          </main>

          <main className="sj-main-content sj-apply">
            <h5>How to Apply</h5>
            <div className="markdown">
              <ReactMarkdown source={job.how_to_apply} />
            </div>
          </main>
        </div>
      )}
      <div id="sj-bottom">
        <div className="container sj-bottom">
          <h1>{job.company}</h1>
          <div>
            <a href="" alt="">
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleJob;
