import { Button } from "@material-ui/core"
import { useHistory, useParams } from "react-router-dom";
import YouTube from "react-youtube";
import Header from "../../common/header/Header"
import { findMovieById } from "../../common/moviesData";
import"./details.css";


const Details = () => {
const history = useHistory();

  const id=useParams().id;

   function handleBackToHome(){
     history.push("/");
   }
  
  const movie=findMovieById(id);

 

  return (  <div className="mainContainer">
                      <div>
                      <Button className="button" color="secondary" variant="contained">Book</Button> 
                          <Header/>
                         
                              </div>
                              <Button onClick={handleBackToHome} variant="outlined"> {"< Back to Home"} </Button >

                              <div className="grid-container">
                   <div className="left">
    
                                 <img src={movie.poster_url} alt={movie.title} style={{height:"250px"}} />
              
                   </div>


                   <div className="middle">
                   <span><h2>{movie.title} </h2></span>
                   <div>
                   <span style={{fontWeight:"bold"}}> Genres :{movie.genres}</span> <br/>
                   <span style={{fontWeight:"bold"}}>Duration :{movie.duration}</span> <br/>
                   <span style={{fontWeight:"bold"}}> Release Date : {movie.release_date.split("T")[0]} </span> <br/>
                   <span style={{fontWeight:"bold"}}>Critics Rating : {movie.critics_rating}</span> <br/>
                    <span style={{fontWeight:"bold"}}>Storyline :{movie.storyline}</span> <br/>
                   </div>

                   <div>
                 <span><h3>Trailer </h3></span>
                 

                   <YouTube videoId={movie.trailer_url}   />         


                   </div>
                   



                   </div>

                   
                   <div className="right">
                   <div><h3>Rate this movie:</h3></div>
                    <div>
                  {movie.artists.map(artist =>
                 <img className="artistImage" src={artist.profile_url}/>
                
                  )}
                   </div>
                   </div>



                </div>

          

  </div>

  );
}
 
export default Details;