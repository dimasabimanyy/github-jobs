import React, { useState } from "react";
import useFetchJobs from "../components/useFetchJobs";
import Job from "../components/Job";
import JobsPagination from "../components/JobsPagination";
import SearchForm from "../components/SearchForm";
import Header from "../components/Header";

export default function Home() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page);
  const [dark, setDark] = useState(false);

  function handleParamChange(e) {
    const param = e.target.name;
    const value = e.target.value;
    setPage(1);
    setParams((prevParams) => {
      return { ...prevParams, [param]: value };
    });
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
      <main className="main-content container">
        <SearchForm
          params={params}
          onParamChange={handleParamChange}
          dark={dark}
        />
        <section className="jobs-wrapper container">
          {loading ? (
            <div className="loading">
              <h1>Loading...</h1>
            </div>
          ) : error ? (
            <div className="error">
              <h1>Error</h1>
            </div>
          ) : (
            <div>
              <div className="jobs-items">
                {jobs.map((job) => {
                  return <Job key={job.id} job={job} dark={dark} />;
                })}
              </div>
              <div className="pagination-bottom">
                <JobsPagination
                  page={page}
                  setPage={setPage}
                  hasNextPage={hasNextPage}
                />
              </div>
            </div>
          )}
          {/* {loading && <h1>Loading...</h1>}
          {error && <h1>Error, Try refreshing...</h1>} */}
        </section>
      </main>
    </div>
  );
}
