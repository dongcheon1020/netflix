import React from "react";
import { useUpcomingMovieQuery } from "../../../../hooks/useUpcomingMovies";
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";
import { responsive } from "../../../../constants/reponesive";

const UpComingMoviesSlide = () => {
  const { data, isLoading, isError, error } = useUpcomingMovieQuery();
  if (isLoading) {
    return <div>isLoading</div>;
  }
  if (isError) {
    return <div>{error.message}</div>;
  }
  return (
    <div>
      <MovieSlider
        title="Upcoming Movies"
        movies={data.results}
        responsive={responsive}
      />
    </div>
  );
};

export default UpComingMoviesSlide;
