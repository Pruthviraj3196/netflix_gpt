import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addPopularMovies } from "../utils/moviesSlice";


const usePopularMovies = () => {

    const dispatch = useDispatch();

    const getPopularMoovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=2', API_OPTIONS)
      const json = await data.json();
      dispatch(addPopularMovies(json.results));
    };
  
    useEffect(() => {
        getPopularMoovies()
    },[]);

};

export default usePopularMovies;
