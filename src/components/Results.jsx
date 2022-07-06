import React, { useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';

import {useResultContext } from '../context/ResultContextProvider'
import { Loading } from './Loading';


export const Results = () => {
  const { results, isLoading, getResults, searchTerm } = useResultContext();
  // const location = useLocation();

  // console.log(results);
  // if(isLoading) return <Loading />;

  // console.log(location.pathname);

  // switch (location.pathname) {
  //   case '/search':
  //     return 'SEARCH';
  
  //   default:
  //     return 'ERROR';
  // }
  return (
    <div>
      <Loading />
    </div>
  )
  
}
