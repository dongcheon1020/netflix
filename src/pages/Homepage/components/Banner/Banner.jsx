import React from "react";
import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies";
import "./Banner.style.css";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  const { data, isLoading, isError, error } = usePopularMoviesQuery();
  console.log(data);
  if (isLoading) {
    <h1>loading...</h1>;
  }
  if (isError) {
    <h1>{error.message}</h1>;
  }
  return (
    <div
      style={{
        backgroundImage:
          "url(" +
          `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${data?.results[0].poster_path}` +
          ")",
      }}
      className="banner"
    >
      <div className="text-white banner-text-area">
        <h2 className="banner-title">{data?.results[0].title}</h2>
        <p>{data?.results[0].overview}</p>
        <button
          onClick={() => navigate(`/movies/${data?.results[0].id}`)}
          className="play-bt"
        >
          재생
        </button>
      </div>
    </div>
  );
};

export default Banner;
