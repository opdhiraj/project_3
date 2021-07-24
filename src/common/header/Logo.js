import React from "react";
import logo from "../../assets/logo.svg";
import "./logo.css";

class Logo extends React.Component{
    render(){
        return(
            <img src ={logo} alt="logoimage" id="logoimage"/>
        )
    }
}

export default Logo;