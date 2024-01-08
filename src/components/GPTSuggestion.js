import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTSuggestion = () => {
  const movieTitles = useSelector((store) => store.gptSlice.gptMovieTitle);
  const gptMovies = useSelector((store) => store.gptSlice.gptMovies);
  return (
    <div className="bg-black absolute text-white w-full bg-opacity-80">
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
