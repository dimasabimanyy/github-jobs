import React from "react";

function SearchForm({ params, onParamChange }) {
  return (
    <>
      <form className="search-form">
        <div className="form-control form-input">
          <i class="fas fa-search"></i>
          <input
            type="text"
            name="description"
            placeholder="Filter by title, companies, expertise..."
          />
        </div>
        <div className="form-control form-input">
          <i class="fas fa-map-marker-alt"></i>
          <input
            type="text"
            name="description"
            placeholder="Filter by location..."
          />
        </div>
        <div className="form-control">
          <div className="full-time-check">
            <input type="checkbox" name="full time" />
          </div>
          <span>Full Time Only</span>
          <button type="submit" className="btn btn-blue">
            Search
          </button>
        </div>
      </form>
    </>
    // <Form className="mb-4">
    //   <Form.Row className="align-items-end">
    //     <Form.Group as={Col}>
    //       <Form.Label>Description</Form.Label>
    //       <Form.Control
    //         onChange={onParamChange}
    //         value={params.description}
    //         name="description"
    //         type="text"
    //       />
    //     </Form.Group>
    //     <Form.Group as={Col}>
    //       <Form.Label>Location</Form.Label>
    //       <Form.Control
    //         onChange={onParamChange}
    //         value={params.location}
    //         name="location"
    //         type="text"
    //       />
    //     </Form.Group>
    //     <Form.Group as={Col} xs="auto" className="ml-2">
    //       <Form.Check
    //         onChange={onParamChange}
    //         value={params.full_time}
    //         name="full_time"
    //         id="full_time"
    //         label="Only Full Time"
    //         type="checkbox"
    //         className="mb-2"
    //       />
    //     </Form.Group>
    //   </Form.Row>
    // </Form>
  );
}

export default SearchForm;
