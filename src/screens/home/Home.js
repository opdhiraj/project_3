import React from "react";
import Header from "../../common/header/Header";
import FilterForm from "./FilterForm";
import "./home.css";
import Releasedmovies from "./Releasedmovies";
import Upcommingmovies from "./Upcommingmovies";
// import {Route, Switch} from "react-router-dom"
// import Details from "../details/Details";


class Home extends React.Component{
    render(){
        return(
            <>
            
           

               <Header/>
               <div className="Upcomingmovies">
                    <span>Upcoming Movies</span>
                   < Upcommingmovies/>
                </div>

              <div className="flexcontainer">
                 <div className="left">
                 <Releasedmovies/>
                 </div>
                 <div className="right">
                < FilterForm/> 
                 </div>
                 
               </div>   
       

               </>
            
        )
    }
}
export  default Home;