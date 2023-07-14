import React from "react";
import './style.css'
// import { Link } from "react-router-dom";
// import Products from "./Products";


const NavBar =()=>{
    return(
        <div className="nav">
            <ul>
                <a href="/login">Login</a>
                <a href="/products">Products</a>
                {/* <a href="add-products">Add Products</a> */}
                
            
            </ul>
        </div>
    )
}
export default NavBar;

