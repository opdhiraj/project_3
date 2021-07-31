import React from 'react';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
 import moviesData from '../../common/moviesData';


export default function Releasedsmovies() {
  

  return (
    <div >
      <ImageList rowHeight={350} cols={4} >
       
        {moviesData.map((item) => (
          <ImageListItem key={item.id}>
            <img src={item.poster_url} alt={item.title} />
            <ImageListItemBar
              title={item.title}
              subtitle={<span>Release Date: {item.release_date}</span>}
             
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
