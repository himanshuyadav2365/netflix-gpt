import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { options } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const nowPlayingMovies=useSelector(store=>store.movieSlice.movieList)
  const getnowPlayingMovies = async () => {
    const responsePr = await fetch(
      "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
      options
    );
    const response = await responsePr.json();
    dispatch(addNowPlayingMovies(response));
  };

  useEffect(() => {
    if(!nowPlayingMovies) getnowPlayingMovies();
  },[]);
};

export default useNowPlayingMovies;
