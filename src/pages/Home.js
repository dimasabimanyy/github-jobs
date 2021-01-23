import React, { useState, useEffect } from "react";
import "../styles/App.css";
import "../styles/Home.css";
import "../styles/Responsive.css";
import useFetchJobs from "../components/useFetchJobs";
import Job from "../components/Job";
import JobsPagination from "../components/JobsPagination";
import SearchForm from "../components/SearchForm";
import Header from "../components/Header";
import Footer from "../components/Footer.js";
import loader from "../images/loader.svg";

export default function Home() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page);
  const [dark, setDark] = useState(getInitialMode());

  function handleParamChange(e) {
    const param = e.target.name;
    const value = e.target.value;
    setPage(1);
    setParams((prevParams) => {
      return { ...prevParams, [param]: value };
    });
  }

  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(dark));
  }, [dark]);

  function getInitialMode() {
    const isReturningUser = "dark" in localStorage;
    const savedMode = JSON.parse(localStorage.getItem("dark"));
    const userPrefersDark = getPrefColorScheme();
    if (isReturningUser) {
      // if mode was saved -> dark / light
      return savedMode;
    } else if (userPrefersDark) {
      // if  preferred color scheme is darak -> dark
      return true;
    } else {
      // otherwises -> light
      return false;
    }
  }

  function getPrefColorScheme() {
    if (!window.matchMedia) return;
    return window.matchMedia("(prefers-color-scheme:dark)").matches;
  }

  const modeChanger = () => {
    if (dark === true) {
      setDark(false);
    } else {
      setDark(true);
    }
  };

  return (
    <div className={dark ? "app darkest" : "app light"}>
      <Header dark={dark} modeChanger={modeChanger} />
      <SearchForm
        params={params}
        onParamChange={handleParamChange}
        dark={dark}
      />
      <section className="jobs-wrapper wrapper">
        {loading ? (
          <div className="loading">
            <img src={loader} alt="Loading.." />
          </div>
        ) : error ? (
          <div className="error">
            <h1>Error</h1>
          </div>
        ) : (
          <div>
            <div className="jobs-items">
              {jobs.length === 0 ? (
                <h1 className={`no-jobs ${dark ? "dark" : "light"}`}>
                  No Jobs Found
                </h1>
              ) : (
                jobs.map((job) => {
                  return <Job key={job.id} job={job} dark={dark} />;
                })
              )}
            </div>
            <div className="pagination-bottom">
              <JobsPagination
                page={page}
                setPage={setPage}
                hasNextPage={hasNextPage}
                dark={dark}
              />
            </div>
          </div>
        )}
      </section>
      <Footer dark={dark} />
    </div>
  );
}
