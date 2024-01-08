import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { options } from "../utils/constants";
import { addMovies } from "../utils/movieSlice";

const useMoviesData = () => {
  const dispatch = useDispatch();

  const popularMovies=useSelector(store=>store.movieSlice.movieList)
  const getPopularMovies = async () => {
    const responsePr = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    );
    const response = await responsePr.json();
    dispatch(addMovies(response));
  };

  useEffect(() => {
    if(!popularMovies) getPopularMovies();
  },[]);
};

export default useMoviesData;
