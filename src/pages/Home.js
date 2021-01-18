import React, { useState } from "react";
import useFetchJobs from "../components/useFetchJobs";
import Job from "../components/Job";
import JobsPagination from "../components/JobsPagination";
import SearchForm from "../components/SearchForm";

export default function Home() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page);

  function handleParamChange(e) {
    const param = e.target.name;
    const value = e.target.value;
    setPage(1);
    setParams((prevParams) => {
      return { ...prevParams, [param]: value };
    });
  }

  return (
    <div>
      <div className="container">
        <SearchForm params={params} onParamChange={handleParamChange} />
      </div>
      <section className="jobs-wrapper container">
        {loading && <h1>Loading...</h1>}
        {error && <h1>Error, Try refreshing...</h1>}
        <div className="jobs-items">
          {jobs.map((job) => {
            return <Job key={job.id} job={job} />;
          })}
        </div>
      </section>
      <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
    </div>
  );
}
