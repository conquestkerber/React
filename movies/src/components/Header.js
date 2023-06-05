import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="" className="left-header">
        TMDB
      </Link>
      <div className="right-header">
        <Link to="/watched">Watched</Link>
        <Link to="/watchList">Watch List</Link>
        <Link to="/add">Add</Link>
      </div>
    </div>
  );
};

export default Header;
