import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTSuggestion = () => {
  const movieTitles = useSelector((store) => store.gptSlice.gptMovieTitle);
  const gptMovies = useSelector((store) => store.gptSlice.gptMovies);
  return (
    <div className="bg-black  text-white w-[95%] mx-8 p-8 bg-opacity-90">
      {movieTitles.map((movie, index) => (
        <MovieList
          key={movie}
          title={movie}
          movies={gptMovies[index]?.results}
        />
      ))}
    </div>
  );
};

export default GPTSuggestion;
