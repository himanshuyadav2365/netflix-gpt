import React from "react";
import { useSelector } from "react-redux";
import useMoviesData from "../hooks/useMoviesData";
import MovieTitle from "./MovieTitle";
import Trailer from "./Trailer";

const Primary = () => {
  useMoviesData();
  const movieList = useSelector((store) => store.movieSlice.movieList);
  const movie = movieList?.results[0];
  const movieTitle = movie?.original_title;
  const overview = movie?.overview;
  const movieId = movie?.id;

  return (
    <div>
      <MovieTitle movieTitle={movieTitle} overview={overview} />
      <Trailer movieId={movieId} />
    </div>
  );
};

export default Primary;
