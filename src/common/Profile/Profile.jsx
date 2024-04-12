import React from "react";
import "./Profile.style.css";

const Profile = ({ name, character, profile }) => {
  return (
    <div className="frofile-card">
      <img
        className="profile"
        src={`https://media.themoviedb.org/t/p/w276_and_h350_face${profile}`}
      />
      <span>{name}</span>
      <p>{character}</p>
    </div>
  );
};

export default Profile;
