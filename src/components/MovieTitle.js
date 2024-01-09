import React from "react";

const MovieTitle = ({ movieTitle, overview }) => {
    
  return (
    <div className=" py-8 md:py-48 px-6 md:px-12 w-1/2 absolute text-white bg-gradident-to-r from-black">
      <h1 className="text-md md:text-6xl font-bold py-4">{movieTitle}</h1>
      <p className="hidden md:block py-4 text-lg">{overview}</p>
      <div className="flex">
        <button className="text-black  py-1 md:py-4 px-3 md:px-12 md:p-4  text-md md:text-xl hover:bg-opacity-70 cursor-pointer rounded-lg bg-white">▶️ Play</button>
        <button className=" hidden md:block py-1 md:py-4 px-3 md:px-12 mx-2 text-xl bg-opacity rounded-lg bg-gray-700 bg-opacity-50 cursor-pointer">More Info</button>
      </div>
    </div>
  );
};

export default MovieTitle;
