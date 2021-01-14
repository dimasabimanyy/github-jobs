import React, { useState } from "react";
import useFetchJobs from "./useFetchJobs";
import Job from "./Job";
import JobsPagination from "./JobsPagination";
import SearchForm from "./SearchForm";
import Header from "./Header";

const Home = () => {
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
      <Header />
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
};

export default Home;
