import React from "react";

function JobsPagination({ page, setPage, hasNextPage, dark }) {
  function adjustPage(amount) {
    setPage((prevPage) => prevPage + amount);
  }

  return (
    <div className={`pagination ${dark ? "dark" : "light"}`}>
      {page !== 1 && (
        <div onClick={() => adjustPage(-1)}>
          <i class="fas fa-angle-double-left"></i>
        </div>
      )}
      {page !== 1 && <div onClick={() => setPage(1)}>1</div>}
      {page > 2 && <div onClick={() => adjustPage(-1)}>{page - 1}</div>}
      <div active className="pagination-active">
        {page}
      </div>
      {hasNextPage && <div onClick={() => adjustPage(1)}>{page + 1}</div>}
      {hasNextPage && (
        <div onClick={() => adjustPage(1)} className="pagination-next">
          <i class="fas fa-angle-double-right"></i>
        </div>
      )}
    </div>
  );
}

export default JobsPagination;
