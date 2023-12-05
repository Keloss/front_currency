import React from "react";
import '../assets/styles/global.css'
const NavBar = () => {
    return (
        <>
        <div className="mainNav">
            <div>
                <a href = "/auth">Log in</a>
            </div>
            <p></p>
            <div>
                <a href = "/">Table</a>
            </div>
            <p></p>
            <div>
                <a href = "/convert">Convert</a>
            </div>
        </div>
        </>
    );
}
export default NavBar