import React from "react";
import "./Profile.style.css";

const Profile = ({ name, character, profile }) => {
  return (
    <div className="frofile-card">
      {profile ? (
        <img
          className="profile"
          src={`https://media.themoviedb.org/t/p/w276_and_h350_face${profile}`}
        />
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="126px"
          viewBox="0 0 16 16"
        >
          <g fill="white">
            <path
              fill="rgba(255, 255, 255, 0.55)"
              d="M11 6a3 3 0 1 1-6 0a3 3 0 0 1 6 0"
            />
            <path
              fill="rgba(255, 255, 255, 0.55)"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
            />
          </g>
        </svg>
      )}

      <span>{name}</span>
      <p>{character}</p>
    </div>
  );
};

export default Profile;
