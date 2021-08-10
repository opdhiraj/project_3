import React from 'react';
// import ImageList from '@material-ui/core/ImageList';
// import ImageListItem from '@material-ui/core/ImageListItem';
// import ImageListItemBar from '@material-ui/core/ImageListItemBar';

 import { Link } from 'react-router-dom';
import { moviesData } from '../../common/moviesData';


export default function Releasedsmovies( ) {
 
  return (
    moviesData.map((item) => 
  <div key={item.id}>
    <Link to={`/details/${item.id}`}>
    <img src={item.poster_url} alt={item.title} />

    </Link>
    <span>{item.title} </span>
  </div>

     
    )
     
  );
}
