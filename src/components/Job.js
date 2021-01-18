import React, { useState } from "react";
// import ReactMarkdown from "react-markdown";
import placeholderLogo from "../images/placeholder.png";
import { Link } from "react-router-dom";

function Job({ job }) {
  // const [open, setOpen] = useState(false);
  const [singleJob, setSingleJob] = useState({ name: job.company });
  return (
    <div className="job">
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
      <div className="job-date">
        {new Date(job.created_at).toLocaleDateString()}{" "}
        <i className="fas fa-circle"></i> {job.type}
      </div>
      <h1 className="job-title">{job.title}</h1>
      <p className="job-company">{job.company}</p>
      <p className="job-location">{job.location}</p>
      <Link to={`/job/${job.id}`}>Apply Job</Link>
    </div>
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
