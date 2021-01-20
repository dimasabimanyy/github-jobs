import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import ReactMarkdown from "react-markdown";
import Footer from "../components/Footer";
import loader from "../images/loader.svg";

const SingleJob = ({ match, location }) => {
  const [job, setJob] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [dark, setDark] = useState(location.state.dark);

  useEffect(() => {
    axios
      .get(`/positions/${match.params.id}.json?markdown=true`)
      .then((res) => {
        setJob(res.data);
        setLoading(false);
      })
      .catch((e) => setError(true) && console.log(error));
  }, []);

  const modeChanger = () => {
    if (dark === true) {
      setDark(false);
    } else {
      setDark(true);
    }
  };

  return (
    <section id="single-job" className={`app ${dark ? "darkest" : "light"}`}>
      <Header dark={dark} modeChanger={modeChanger} />
      {error ? (
        <div className="container">
          <h1>Error</h1>
        </div>
      ) : loading ? (
        <div className="loading container">
          <img src={loader} alt="Loading..." />
        </div>
      ) : (
        <div className={`single-job container`}>
          <div className={`sj-heading ${dark ? "dark" : "light"}`}>
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

          <main className={`sj-main-content ${dark ? "dark" : "light"}`}>
            <div className="sj-top-content">
              <div>
                <p className="sj-date">
                  <i class="far fa-calendar"></i>{" "}
                  {new Date(job.created_at).toLocaleDateString()}
                </p>
                <h1>{job.title}</h1>
                <h5>{job.location}</h5>
              </div>
              <div className="sj-apply-now">
                <a href="" alt="">
                  Apply Now
                </a>
              </div>
            </div>
            <div
              className={`sj-description markdown markdown-white ${
                dark ? "dark" : "light"
              }`}
            >
              <ReactMarkdown source={job.description} />
            </div>
          </main>

          <main className="sj-main-content sj-apply">
            <h5>How to Apply</h5>
            <div className="markdown markdown-blue">
              <ReactMarkdown source={job.how_to_apply} />
            </div>
          </main>
        </div>
      )}
      <Footer dark={dark} />
    </section>
  );
};

export default SingleJob;
