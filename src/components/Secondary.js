import React from "react";
import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MovieList from "./MovieList";

const Secondary = () => {
  useNowPlayingMovies()
  const movies = useSelector((store) => store.movieSlice.movieList);
  const nowPlaying = useSelector((store) => store.movieSlice.nowPlaying);
  return (
    movies && (
      <div className="bg-black pb-32">
        <div className=" mt=0 md:-mt-52 relative z-20">
          <MovieList title="Popular Movies" movies={movies?.results} />
          <MovieList movies={nowPlaying?.results} title="Popular TV Series" />
          <MovieList movies={movies?.results} title="Trending Movies" />
          <MovieList movies={nowPlaying?.results} title="Upcoming Movies" />
        </div>
      </div>
    )
  );
};

export default Secondary;
