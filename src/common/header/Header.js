import React from "react";
import "./Header.css";
import Logo from "./Logo.js";




class Header extends React.Component{
    render(){
        return(
            <div className="header">
               
         <Logo/>
            </div>
        )
    }
}

export default Header;