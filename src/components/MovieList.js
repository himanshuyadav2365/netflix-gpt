import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({title,movies}) => {
    
  return (
    <div className=" px-2 md:px-6 ">
        <h1 className="text-white text-lg md:text-3xl py-4 mx-4">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
            {movies?.map(movie=>{
                return <MovieCard key={movie.id} posterPath={movie.poster_path} id={movie.id}/>
            })}
          
        </div>
      </div>
    </div>
  );
};

export default MovieList;
