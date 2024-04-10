import React, { useState } from "react";
import { useSearchMovieQuery } from "../../hooks/useSearchMovie";
import { useSearchParams } from "react-router-dom";
import "./MoviePage.style.css";
import MovieCard from "../../common/MovieCard/MovieCard";
import ReactPaginate from "react-paginate";
import "bootstrap/dist/css/bootstrap.min.css";
// 경로 2가지
// nav바에서 클릭해서 온 경우 => popularMovie보여주기
// keyword를 입력해서 온 경우 => keyword와 관련된 데이터

const MoviePage = () => {
  const [query, setQuery] = useSearchParams();
  const [page, setPage] = useState(1);
  const keyword = query.get("q");

  const { data, isLoading, isError, error } = useSearchMovieQuery({
    keyword,
    page,
  });
  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
  };
  if (isLoading) {
    return <h1>Loading</h1>;
  }
  if (isError) {
    return <div>{error.message}</div>;
  }
  return (
    <div className="page">
      <div
        style={{
          display: "flex",
        }}
      >
        <div
          style={{
            width: "100%",
          }}
        >
          필터
        </div>
        <div
          style={{
            width: "100%",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "20px",
            }}
          >
            {data?.results.map((movie, index) => (
              <div key={index}>
                <MovieCard movie={movie} />
              </div>
            ))}
          </div>
          <ReactPaginate
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={data?.total_pages}
            previousLabel="< previous"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
            forcePage={page - 1}
          />
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
