import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./AppLayout.style.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AppLayout = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const searchByKeyword = (e) => {
    e.preventDefault();
    //url 바꾸기
    navigate(`/movies?q=${keyword}`);
    setKeyword("");
  };
  const logoImg = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="3.72em"
      viewBox="0 0 512 138"
    >
      <path
        fill="#db202c"
        d="M340.657 0v100.203c12.36.575 24.687 1.27 36.98 2.09v21.245a1822.444 1822.444 0 0 0-58.542-2.959V0zM512 .012l-28.077 65.094l28.07 72.438l-.031.013a1789.409 1789.409 0 0 0-24.576-3.323l-15.763-40.656l-15.913 36.882a1815.88 1815.88 0 0 0-22.662-2.36l27.371-63.43L435.352.013h23.325l14.035 36.184L488.318.012zM245.093 119.526V.011h60.19v21.436h-38.628v27.78h29.227v21.245h-29.227v49.05zM164.58 21.448V.01h66.69v21.437h-22.565v98.66c-7.197.19-14.386.412-21.56.683V21.448zM90.868 126.966V.014h59.89v21.435h-38.331v29.036c8.806-.113 21.327-.24 29.117-.222V71.51c-9.751-.12-20.758.134-29.117.217v32.164a1848.195 1848.195 0 0 1 38.331-2.62v21.247a1815.638 1815.638 0 0 0-59.89 4.45M48.571 77.854L48.57.01h21.562v128.96c-7.882.81-15.75 1.673-23.603 2.584L21.56 59.824v74.802a1834.87 1834.87 0 0 0-21.561 2.936V.012H20.49zm346.854 46.965V.012h21.563V126.6c-7.179-.64-14.364-1.23-21.563-1.78"
      />
    </svg>
  );

  const searchImg = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 24 24">
      <path
        fill="#db202c"
        d="m19.485 20.154l-6.262-6.262q-.75.639-1.725.989q-.975.35-1.96.35q-2.402 0-4.066-1.663q-1.664-1.664-1.664-4.065T5.47 5.436q1.663-1.667 4.064-1.667q2.402 0 4.068 1.664q1.666 1.664 1.666 4.067q0 1.042-.369 2.017q-.37.975-.97 1.668l6.262 6.261zM9.538 14.23q1.99 0 3.361-1.37q1.37-1.37 1.37-3.361q0-1.99-1.37-3.36q-1.37-1.37-3.36-1.37q-1.99 0-3.361 1.37q-1.37 1.37-1.37 3.36q0 1.99 1.37 3.36q1.37 1.37 3.36 1.37"
      />
    </svg>
  );

  return (
    <div>
      <nav className="applayout-navbar">
        <ul className="applayout-list">
          <li className="logo">{logoImg()}</li>
          <li className="applayout-list-item">
            <Link to="/">Home</Link>
          </li>
          <li className="applayout-list-item">
            <Link to="/movies">Movies</Link>
          </li>
        </ul>
        <form className="applayout-search-form" onSubmit={searchByKeyword}>
          <input
            className="applayout-search-input"
            type="text"
            placeholder="Search"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <button className="applayout-search-bt" type="submit">
            {searchImg()}
          </button>
        </form>
      </nav>
      <Outlet />
    </div>
  );
};

export default AppLayout;
