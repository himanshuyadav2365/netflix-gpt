import React from "react";

const MovieCard = ({ posterPath }) => {
  if(!posterPath) return null
  return (
    <div className="w-48 mx-2  cursor-pointer">
      <img
        className="rounded-lg"
        alt="movie_card"
        src={"https://image.tmdb.org/t/p/w500/" + posterPath}
      />
    </div>
  );
};

export default MovieCard;
