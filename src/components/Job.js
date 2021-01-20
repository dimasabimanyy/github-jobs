import React from "react";
import placeholderLogo from "../images/placeholder.png";
import { Link } from "react-router-dom";

function Job({ job, dark }) {
  return (
    <Link to={`/job/${job.id}`}>
      <div className={`job ${dark ? "dark" : ""}`}>
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
    // <Card className="mb-3">
    //   <Card.Body>
    //     <div className="d-flex justify-content-between">
    //       <div>
    //         <Card.Title>
    //           {job.title} -{" "}
    //           <span className="text-muted font-weight-light">
    //             {job.company}
    //           </span>
    //         </Card.Title>
    //         <Card.Subtitle className="text-muted mb-2">
    //           {new Date(job.created_at).toLocaleDateString()}
    //         </Card.Subtitle>
    //         <Badge variant="secondary" className="mr-2">
    //           {job.type}
    //         </Badge>
    //         <Badge variant="secondary">{job.location}</Badge>
    //         <div style={{ wordBreak: "break-all" }}>
    //           <ReactMarkdown source={job.how_to_apply} />
    //         </div>
    //       </div>
    //       <img
    //         className="d-sm-none d-md-block"
    //         height="50"
    //         alt={job.company}
    //         src={job.company_logo}
    //       />
    //     </div>
    //     <Card.Text>
    //       <Button
    //         variant="primary"
    //         onClick={() => setOpen((prevOpen) => !prevOpen)}
    //       >
    //         {open ? "Hide Details" : "View Details"}
    //       </Button>
    //     </Card.Text>
    //     <Collapse in={open}>
    //       <div className="mt-4">
    //         <ReactMarkdown source={job.description} />
    //       </div>
    //     </Collapse>
    //   </Card.Body>
    // </Card>
  );
}

export default Job;
