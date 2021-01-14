import React, { useState } from "react";
import useFetchJobs from "./components/useFetchJobs";
import Job from "./components/Job";
import JobsPagination from "./components/JobsPagination";
import SearchForm from "./components/SearchForm";
import Header from "./components/Header";

export default function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page);
  const [openModal, setOpenModal] = useState(false);

  function handleParamChange(e) {
    const param = e.target.name;
    const value = e.target.value;
    setPage(1);
    setParams((prevParams) => {
      return { ...prevParams, [param]: value };
    });
  }

  const changeModal = () => {
    if (openModal === false) {
      setOpenModal(true);
    } else {
      setOpenModal(false);
    }
  };

  return (
    <div>
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
      <Header />
      <div className="container">
        <SearchForm params={params} onParamChange={handleParamChange} />
      </div>
      <section className="jobs-wrapper container">
        {loading && <h1>Loading...</h1>}
        {error && <h1>Error, Try refreshing...</h1>}
        <div className="jobs-items">
          {jobs.map((job) => {
            return <Job key={job.id} job={job} changeModal={changeModal} />;
          })}
        </div>
      </section>
      <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
    </div>
  );
}
