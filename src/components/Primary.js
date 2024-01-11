import React from "react";
import { useSelector } from "react-redux";
import useMoviesData from "../hooks/useMoviesData";
import MovieTitle from "./MovieTitle";
import Trailer from "./Trailer";

const Primary = () => {
  useMoviesData();
  const movieList = useSelector((store) => store.movieSlice?.movieList);

  if (!movieList) return;

  const movie = movieList?.results[5];
  const { original_title, overview, id } = movie;

  return (
    <div className="pt-[35%] md:pt-0 bg-black">
      <MovieTitle movieTitle={original_title} overview={overview} />
      <Trailer movieId={id} moviePage={false} />
    </div>
  );
};

export default Primary;
