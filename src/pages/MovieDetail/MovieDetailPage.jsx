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
import { responsive } from "../../constants/reponesive";
import { useRecommendationsMoviesQuery } from "../../hooks/useRecommended";
import { useMovieVideoQuery } from "../../hooks/useMovieVideo";
import YouTube from "react-youtube";
import { useSelector, useDispatch } from "react-redux";
import { movieVideo } from "../../redux/reducer";

const MovieDetailPage = () => {
  const videoOn = useSelector((state) => state.review.videoOn);
  const dispatch = useDispatch();

  const movieVideoOn = () => {
    dispatch(movieVideo(true));
  };

  const { id } = useParams();
  const { data, isLoading, isError, error } = useMovieDetailQuery({ id });
  const {
    data: credit,
    isLoading: creditIS,
    isError: creditIE,
    error: creditEr,
  } = useDetailCreditsQuery({ id });
  const {
    data: reviewData,
    isLoading: reviewIS,
    isError: reviewIE,
    error: reviewEr,
  } = useReviewQuery({ id });
  const {
    data: recData,
    isLoading: recIS,
    isError: recIE,
    error: recEr,
  } = useRecommendationsMoviesQuery({ id });
  const cast = credit?.cast;
  const topCredits = () => {
    const filteredCast = cast?.filter((cast) => cast.order <= 3);

    return filteredCast?.map((item, index) => (
      <span key={index}>{item.name}</span>
    ));
  };
  const {
    data: videoData,
    isLoading: videoIS,
    isError: videoIE,
    error: videoEr,
  } = useMovieVideoQuery({ id });
  const videoKey = videoData?.results[0].key;

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

  if (isLoading || creditIS || reviewIS || recIS || videoIS) {
    return <div>Loading</div>;
  }
  if (isError || creditIE || reviewIE || recIE || videoIE) {
    return (
      <div>
        {error?.message ||
          creditEr?.message ||
          reviewEr?.message ||
          recEr?.message ||
          videoEr?.message}
      </div>
    );
  }

  return (
    <div className="page">
      {videoOn === true ? (
        videoData ? (
          <div className="video-pop">
            <button
              onClick={() => dispatch(movieVideo(false))}
              className="video-close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <path
                  fill="rgba(255, 255, 255, 0.55)"
                  d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2m5.4 21L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4z"
                />
              </svg>
            </button>
            <YouTube
              videoId={videoKey} //동영상 주소
              iframeClassName="video-box"
              opts={{
                playerVars: {
                  autoplay: 1, //자동 재생 여부
                  modestbranding: 1, //컨트롤 바에 유튜브 로고 표시 여부
                  loop: 1, //반복 재생
                  playlist: videoKey, //반복 재생으로 재생할 플레이 리스트
                },
              }}
              onReady={(e) => {
                e.target.mute(); //소리 끔
              }}
            />
          </div>
        ) : (
          ""
        )
      ) : (
        ""
      )}

      <div
        className="movie-veiw"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${data.backdrop_path})`,
        }}
      >
        <h2 className="detail-title">{data.original_title}</h2>

        <div className="movie-text">
          <div className="movie-text-box">
            <button onClick={() => movieVideoOn()} className="detail-play-bt">
              재생
            </button>
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
            <div key={index}>
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
        {reviewData ? <Review data={reviewData} /> : <div>리뷰없음</div>}
      </div>

      <div>
        <MovieSlider
          title="추천 콘텐츠"
          movies={recData.results}
          responsive={responsive}
        />
      </div>
    </div>
  );
};

export default MovieDetailPage;
