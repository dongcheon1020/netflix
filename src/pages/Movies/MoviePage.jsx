import React from "react";
import { useSearchMovieQuery } from "../../hooks/useSearchMovie";
import { useSearchParams } from "react-router-dom";
import "./MoviePage.style.css";
import MovieCard from "../../common/MovieCard/MovieCard";

// 경로 2가지
// nav바에서 클릭해서 온 경우 => popularMovie보여주기
// keyword를 입력해서 온 경우 => keyword와 관련된 데이터

const MoviePage = () => {
  const [query, setQuery] = useSearchParams();

  const keyword = query.get("q");

  const { data, isLoading, isError, error } = useSearchMovieQuery({ keyword });

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
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
