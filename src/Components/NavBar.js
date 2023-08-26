import React from "react";


// write the code for the nav bar where it will be rendered with the 
// element containing the logo, search bar, favourets logo and user log with balck background

const NavBar = () => {
    return (
       <nav className="nav" id="nav" >
        <div className="nav-wrapper">
            <a href="#!" className="brand-logo">Logo</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <input type="search" placeholder="Search Books..." >

            </ul>
            <a href="#" className="favorite"></a>
        </div>
       </nav>