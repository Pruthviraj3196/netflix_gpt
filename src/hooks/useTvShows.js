import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addTvShows } from "../utils/moviesSlice";


const useTvShows = () => {

    const dispatch = useDispatch();

    const getTvShows = async () => {
      const data = await fetch('https://api.themoviedb.org/3/tv/airing_today?page=1', API_OPTIONS)
      const json = await data.json();
      dispatch(addTvShows(json.results));
    };
  
    useEffect(() => {
        getTvShows()
    },[]);

};

export default useTvShows;
