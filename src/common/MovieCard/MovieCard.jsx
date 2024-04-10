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
    <div className="movie-card">
      <img
        style={{
          width: "100%",
          borderRadius: "16px",
        }}
        src={`https://media.themoviedb.org/t/p/w500_and_h282_face/${movie.poster_path}`}
        alt=""
      />
      <h4 className="title">{movie.title}</h4>

      {/* <ul className="genre">
          {showGenre(movie.genre_ids).map((id, index) => (
            <li className="genre-item" key={index}>
              {id}
            </li>
          ))}
        </ul> */}
      <ul className="popularcontent">
        <li>평점: {movie.vote_average}</li>
        <li>인기: {movie.popularity}</li>
      </ul>
    </div>
  );
};

export default MovieCard;
