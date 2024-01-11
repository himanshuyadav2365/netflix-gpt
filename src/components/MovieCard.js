import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ posterPath ,id}) => {
  if(!posterPath) return null
  return (
    <div className=" w-36 md:w-48 mx-2  cursor-pointer">
      <Link to={`/movie/${id}`}>
      <img
        className="rounded-lg"
        alt="movie_card"
        src={"https://image.tmdb.org/t/p/w500/" + posterPath}
      />
      </Link>
    </div>
  );
};

export default MovieCard;
