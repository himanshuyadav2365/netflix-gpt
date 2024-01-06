import React from "react";
import { useSelector } from "react-redux";
import useMoviesData from "../hooks/useMoviesData";
import MovieTitle from "./MovieTitle";
import Trailer from "./Trailer";

const Primary = () => {
  useMoviesData();
  const movieList = useSelector((store) => store.movieSlice?.movieList);

  if (!movieList) return;

  const movie = movieList?.results[6];
  const { original_title, overview, id } = movie;

  return (
    <div>
      <MovieTitle movieTitle={original_title} overview={overview} />
      <Trailer movieId={id} />
    </div>
  );
};

export default Primary;
