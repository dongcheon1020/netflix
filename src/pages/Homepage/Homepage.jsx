import React from "react";
import Banner from "./components/Banner/Banner";
import PopularMovieSlide from "./components/PopularMovieSlide/PopularMovieSlide";

// 1. 배너 => popuar 영화를 들고와서 첫번째 아이템 보여주기
// 2. popuar movie
// 3. top rated movie
// 4. upcoming movie

const Homepage = () => {
  return (
    <div className="page">
      <Banner />
      <PopularMovieSlide />
    </div>
  );
};

export default Homepage;
