import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { addGPTMovie } from "../utils/GptSlice";
import openai from "../utils/openai";

const GPTSearch = () => {
  const inputref = useRef("");
  const dispatch=useDispatch()

  const handleSubmit = async () => {
    console.log(inputref.current.value);

    const gptQuery =
      "Act as an movie recommendation system and suggest some movies for query  : " +
      inputref.current.value +
      ". Only give me name of 5 movies, comma seprated like the example result given ahead. Example Result : Gadar, Sam Bahadur, Animal, Sholay, Don";

    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    const result = chatCompletion.choices[0].message.content.split(", ");
    console.log(result);

    const gptMoviePR=result.map( (movie)=>{
        return fetch(
        `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
        options
        )
        .then((response) => response.json())
        .then((response) => response);
    })

    const gptMovie= await Promise.all(gptMoviePR)
    console.log(gptMovie)
    dispatch(addGPTMovie(gptMovie))
  };

  return (
    <div className="text-white absolute font-bold py-[20%] mx-auto flex justify-center	w-full rounded-lg">
      <input
        ref={inputref}
        className="w-[35%] rounded-l-lg h-10 text-black px-2 mx-1"
        placeholder="What would you like to watch today "
      />
      <button className="bg-red-700 px-8 rounded-r-lg" onClick={handleSubmit}>
        Search
      </button>
    </div>
  );
};

export default GPTSearch;
