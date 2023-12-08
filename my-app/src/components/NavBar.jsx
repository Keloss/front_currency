import React from "react";
import {NavLink} from "react-router-dom"
import '../assets/styles/global.css'
const NavBar = () => {
    return (
        <>
        <div className="mainNav">
            
            <NavLink to = "/auth">Log in</NavLink>

            <NavLink to = "/">Table</NavLink>
            
            <NavLink to = "/convert">Convert</NavLink>
            
        </div>
        </>
    );
}
export default NavBar