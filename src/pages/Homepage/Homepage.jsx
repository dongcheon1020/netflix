import React from "react";
import Banner from "./components/Banner/Banner";
import PopularMovieSlide from "./components/PopularMovieSlide/PopularMovieSlide";
import TopRatedMoviesSlide from "./components/TopRatedMoviesSlide/TopRatedMoviesSlide";
import UpComingMoviesSlide from "./components/UpcomingMoviesSlide/UpComingMoviesSlide";

const Homepage = () => {
  return (
    <div className="page">
      <Banner />
      <PopularMovieSlide />
      <TopRatedMoviesSlide />
      <UpComingMoviesSlide />
    </div>
  );
};

export default Homepage;
