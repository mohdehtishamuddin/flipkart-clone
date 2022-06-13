import React from "react";
import './style.css';

function Header(){
    return(
<header>
       <div className="header-left">
           <span href="#">Flipkart</span>
           <div className="header-left-p">
            <p><span href="#">Explore</span> <span>Plus<i className="fas fa-plus"></i></span></p>
           </div>
       </div>
       <div className="header-center">
        <input className="header-center-input" type="text" placeholder=" Search for products,Brands and more"/><i className="fas fa-search"></i>
          </div>
          <div className="header-right">
            <span className="active" href="#">Login</span>&nbsp;&nbsp;
            <span href="#">more<i className="fas fa-sort-down"></i></span>
            <span href="#"><i className="fas fa-shopping-cart"></i>cart</span>
          </div>
     </header>
    );
}
export default Header;