import React from "react";
import placeholderLogo from "../images/placeholder.png";
import { Link } from "react-router-dom";

function Job({ job, dark }) {
  return (
    <Link to={`/job/${job.id}`}>
      <div className={`job ${dark ? "dark" : "light"}`}>
        <div className="job-top-info">
          <div className="job-logo">
            {job.company_logo ? (
              <img
                className="job-logo-exist"
                height="50"
                alt={job.company}
                src={job.company_logo}
              />
            ) : (
              <img
                className="job-logo-noexist"
                height="50"
                alt={job.company}
                src={placeholderLogo}
              />
            )}
          </div>
          <div className="job-heading">
            <h1>{job.title}</h1>
            <div className="job-sub-title">
              <p className="job-company">
                <i className="fas fa-building"></i>
                {job.company}
              </p>
              <p className="job-location">
                <i className="fas fa-map-marker-alt"></i>
                {job.location}
              </p>
            </div>
          </div>
        </div>
        <div className={`job-side-info ${dark ? "dark" : "light"}`}>
          <p className="job-type">{job.type}</p>
          <p className="job-date">
            <i class="far fa-calendar"></i>{" "}
            {new Date(job.created_at).toLocaleDateString()}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default Job;
