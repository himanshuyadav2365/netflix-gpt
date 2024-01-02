import React from "react";

const MovieTitle = ({ movieTitle, overview }) => {
    
  return (
    <div className="py-48 px-12 w-1/3 absolute text-white bg-gradident-to-r from-black">
      <h1 className="text-6xl font-bold py-4">{movieTitle}</h1>
      <p className="py-4 text-lg">{overview}</p>
      <div className="flex">
        <button className="text-black p-4 px-12 mx-2 text-xl hover:bg-opacity-70 cursor-pointer rounded-lg bg-white">▶️ Play</button>
        <button className=" p-4 px-12 mx-2 text-xl bg-opacity rounded-lg bg-gray-700 bg-opacity-50 cursor-pointer">More Info</button>
      </div>
    </div>
  );
};

export default MovieTitle;
