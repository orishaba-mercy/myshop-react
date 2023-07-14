// import React from "react";
// import './style.css'
// // import { Link } from "react-router-dom";
// // import Products from "./Products";


// const NavBar =()=>{
//     return(
//         <div className="nav">
//             <ul>
//                 <a href="/login">Login</a>
//                 <a href="/products">Products</a>
//                 <a href="">Add Products</a>
                
            
//             </ul>
//         </div>
//     )
// }
// export default NavBar;
import React from "react";
import { Link } from "react-router-dom";
import './style.css';

const NavBar = () => {
  return (
    <div className="nav">
      <ul>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/add-products">Add Products</Link></li>
      </ul>
    </div>
  );
}

export default NavBar;
