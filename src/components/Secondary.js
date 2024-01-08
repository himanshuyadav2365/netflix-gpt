import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const Secondary = () => {
  const movies = useSelector((store) => store.movieSlice.movieList);
  console.log(movies);
  return (
    movies && (
      <div className="bg-black pb-32">
        <div className="-mt-52 relative z-20">
          <MovieList title="Popular Movies" movies={movies?.results} />
          <MovieList movies={movies?.results} title="Now Playing" />
          <MovieList movies={movies?.results} title="Trending Movies" />
          <MovieList movies={movies?.results} title="Upcoming Movies" />
        </div>
      </div>
    )
  );
};

export default Secondary;
