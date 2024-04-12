import React from "react";
import "./MovieDetailPage.style.css";
import { useParams } from "react-router-dom";
import { useMovieDetailQuery } from "../../hooks/useMovieDetail";
import { useDetailCreditsQuery } from "../../hooks/useDetailCredits";
import MovieSlider from "../../common/MovieSlider/MovieSlider";
import Carousel from "react-multi-carousel";
import Profile from "../../common/Profile/Profile";
import { profilesive } from "../../constants/profilesive";
import { useReviewQuery } from "../../hooks/useReview";
import Review from "../../common/Review/Review";

const MovieDetailPage = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useMovieDetailQuery({ id });
  const { data: credit } = useDetailCreditsQuery({ id });
  const { data: reviewData } = useReviewQuery({ id });

  const cast = credit?.cast;
  const topCredits = () => {
    const filteredCast = cast?.filter((cast) => cast.order <= 3);

    return filteredCast?.map((item, index) => (
      <span key={index}>{item.name}</span>
    ));
  };

  const directing = () => {
    const crew = credit?.crew;
    const filteredCast = crew?.filter((crew) => crew.department == "Directing");
    return filteredCast?.map((item, index) => (
      <span key={index}>{item.name}</span>
    ));
  };

  function convertMinutesToHours(minutes) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}시간 ${remainingMinutes}분`;
  }

  if (isLoading) {
    return <div>Loading</div>;
  }
  if (isError) {
    return <div>{error.message}</div>;
  }
  return (
    <div className="page">
      <div
        className="movie-veiw"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${data.backdrop_path})`,
        }}
      >
        <h2 className="detail-title">{data.original_title}</h2>

        <div className="movie-text">
          <div className="movie-text-box">
            <button className="detail-play-bt">재생</button>
            <div className="detail-overview">
              <div className="detiale-discription">{data.overview}</div>
              <div className="textsubbox">
                <ul className="genre-list">
                  <li>{data.release_date}</li>
                  <li>{convertMinutesToHours(data?.runtime)}</li>
                  {data.genres.map((item, index) => (
                    <li className="genre" key={index}>
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="detial-add">
              <div className="credits">출연 {topCredits()}</div>
              <div className="credits">감독 {directing()}</div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          marginTop: "50px",
        }}
        className="slider-container"
      >
        <h3 className="slider-title">출연진</h3>
        <Carousel
          infinite={true}
          centerMode={true}
          itemClass="movie-slider p-1"
          containerClass="carousel-container"
          responsive={profilesive}
          autoPlay={true}
          autoPlaySpeed={5000}
          customTransition="all 1s ease"
        >
          {cast?.map((item, index) => (
            <div>
              <Profile
                name={item.name}
                character={item.character}
                profile={item.profile_path}
              />
            </div>
          ))}
        </Carousel>
      </div>
      <div
        style={{
          padding: "30px 0",
          backgroundColor: "rgba(0, 0, 0, 0.3)",
        }}
      >
        <Review data={reviewData} />
      </div>
    </div>
  );
};

export default MovieDetailPage;
