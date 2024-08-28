import React from 'react'
import Header from "./Header"
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopReated from '../hooks/useTopReated';
import useUpcomingMovie from '../hooks/useUpcomingMovie';
import useTvShows from '../hooks/useTvShows';



const Browse = () => {

 useNowPlayingMovies();
 usePopularMovies();
 useTopReated();
 useUpcomingMovie();
 useTvShows();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse
