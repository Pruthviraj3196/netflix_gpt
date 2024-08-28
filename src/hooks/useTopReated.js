import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addTopReatedMovies } from "../utils/moviesSlice";


const useTopReated = () => {

    const dispatch = useDispatch();

    const getTopReated = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS)
      const json = await data.json();
      dispatch(addTopReatedMovies(json.results));
    };
  
    useEffect(() => {
        getTopReated()
    },[]);

};

export default useTopReated;
