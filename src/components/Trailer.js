import { useSelector } from "react-redux";
import useTrailerData from "../hooks/useTrailerData";

const Trailer = ({movieId,movieKey,moviePage}) => {


    useTrailerData(movieId)
    const trailer=useSelector(store=>store.movieSlice.trailerVideo)
    const trailerKey=moviePage?movieKey:trailer?.key

  return (
    <div >
      <iframe className="w-full h-full aspect-video"
        src={"https://www.youtube.com/embed/"+trailerKey+"?autoplay=1&mute=1&loop=1&rel=0&showinfo=0&color=white&iv_load_policy=3&playlist="+trailerKey}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default Trailer;
