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
                dispatch(addTrailer(video[0]))
            })
            .catch((err) => console.error(err));
        }

        useEffect(()=>{
            trailerVideo && getMovieVideos()
        },[])
    
}

export default useTrailerData