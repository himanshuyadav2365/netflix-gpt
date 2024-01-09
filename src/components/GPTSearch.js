import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { options } from "../utils/constants";
import { addGPTMovie, setLoading } from "../utils/GptSlice";
import { lang } from "../utils/langConstants";
import openai from "../utils/openai";

const GPTSearch = () => {
  const inputref = useRef("");
  const dispatch=useDispatch()
  const preferredlanguage=useSelector(store=>store.userSlice.preferredlanguage)
  const loading=useSelector(store=>store.gptSlice.loading)

  const handleSubmit = async () => {

    dispatch(setLoading(true))

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
    dispatch(addGPTMovie({movies:gptMovie,title:result}))
    dispatch(setLoading(false))
  };

  return (
    <div className="text-white pt-[40%] md:pt-[10%] mx-1 flex justify-center	w-full rounded-lg ">
      <input
        ref={inputref}
        className=" w-full md:w-1/2 rounded-l-lg h-10 text-black px-2 mx-1 my-2"
        placeholder={lang[preferredlanguage].gptSearchPlaceholder}
      />
      <button className="bg-red-700 px-8 rounded-r-lg my-2" onClick={handleSubmit}>{loading?lang[preferredlanguage].loading:lang[preferredlanguage].search}
       {/* {lang[preferredlanguage].search} */}
      </button>
    </div>
  );
};

export default GPTSearch;
