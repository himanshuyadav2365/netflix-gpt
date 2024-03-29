import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { options } from "../utils/constants";
import { addTrailer } from "../utils/movieSlice";

const useTrailerData=(movieId)=>{

    const dispatch=useDispatch()
    const trailerVideo=useSelector(store=>store.movieSlice.trailerVideo)

    const getMovieVideos=()=>{
        fetch(
            "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",
            options
            )
            .then((response) => response.json())
            .then((response) => {
            const video=response.results.filter((video)=>video.name==="Official Trailer");
            let result=video[0]?video[0]:response.results[0]
                dispatch(addTrailer(result))
            })
            .catch((err) => console.error(err));
        }

        useEffect(()=>{
            !trailerVideo && 
            getMovieVideos()
        },[])
    
}

export default useTrailerData