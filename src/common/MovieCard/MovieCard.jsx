import React from "react";
import "./MovieCard.stayle.css";
import { useMovieGenreQuery } from "../../hooks/useMoiveDenre";

const MovieCard = ({ movie }) => {
  const { data: genreData } = useMovieGenreQuery();

  const showGenre = (genreIdList) => {
    if (!genreData) return [];
    const genreNameList = genreIdList.map((id) => {
      const genreObj = genreData.find((genre) => genre.id === id);
      return genreObj.name;
    });

    return genreNameList;
  };
  return (
    <div
      style={{
        backgroundImage:
          "url(" +
          `https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster_path}` +
          ")",
      }}
      className="movie-card"
    >
      <div className="overlay">
        <h1>{movie.title}</h1>
        <ul className="genre">
          {showGenre(movie.genre_ids).map((id, index) => (
            <li className="genre-item" key={index}>
              {id}
            </li>
          ))}
        </ul>
        <div>{movie.vote_averge}</div>
        <div>{movie.popularity}</div>
        <div>{movie.adult ? "over18" : "under18"}</div>
      </div>
    </div>
  );
};

export default MovieCard;
