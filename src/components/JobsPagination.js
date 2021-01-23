import React from "react";

function JobsPagination({ page, setPage, hasNextPage }) {
  function adjustPage(amount) {
    setPage((prevPage) => prevPage + amount);
  }

  return (
    <div>
      {page !== 1 && (
        <div onClick={() => adjustPage(-1)}>
          <h1>Prev</h1>
        </div>
      )}
      {page !== 1 && <div onClick={() => setPage(1)}>1</div>}
      {page > 2 && <div></div>}
      {page > 2 && <div onClick={() => adjustPage(-1)}>{page - 1}</div>}
      <div active>{page}</div>
      {hasNextPage && <div onClick={() => adjustPage(1)}>{page + 1}</div>}
      {hasNextPage && (
        <div onClick={() => adjustPage(1)}>
          <h1>Next</h1>
        </div>
      )}
    </div>
  );
}

export default JobsPagination;
