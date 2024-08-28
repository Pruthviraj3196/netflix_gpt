import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addUpcomingMovies } from "../utils/moviesSlice";


const useUpcomingMovie = () => {

    const dispatch = useDispatch();

    const getUpcomingMoovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS)
      const json = await data.json();
      dispatch(addUpcomingMovies(json.results));
    };
  
    useEffect(() => {
        getUpcomingMoovies()
    },[]);

};

export default useUpcomingMovie;
