import { useEffect, useState } from "react";
import { options } from "../utils/constants";


const useMovieData=(movieId)=>{

    const [movie,setMovie]=useState(null)

    const getMovieVideo=()=>{
        fetch(
            "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",
            options
            )
            .then((response) => response.json())
            .then((response) => {
            const video=response.results.filter((video)=>video.name==="Official Trailer");
            let result=video[0]?video[0]:response.results[0]
               setMovie(result)
            })
            .catch((err) => console.error(err));
        }

        useEffect(()=>{
           getMovieVideo()
        },[])

        return movie

}

export default useMovieData