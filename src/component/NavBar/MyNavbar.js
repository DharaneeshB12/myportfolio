import React, { useState } from "react";
import "./mynavbar.css";

function MyNavbar() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav>
      <a href="#About" id="logo">
        <span>Portfolio</span>
      </a>
      <ul id="navbar" className={clicked ? "menu" : "navbar"}>
        <a href="#About" className="icon">
          <li className="navbar_li" onClick={() => setClicked(false)}>
            About
          </li>
        </a>

        <a href="#Skills" className="icon">
          <li className="navbar_li" onClick={() => setClicked(false)}>
            Skills
          </li>
        </a>

        {/* <a href="#Projects" className="icon">
          <li className="navbar_li" onClick={() => setClicked(false)}>
            Projects
          </li>
        </a> */}

        <a href="#Contact" className="icon">
          <li className="navbar_li" onClick={() => setClicked(false)}>
            Contact
          </li>
        </a>
      </ul>
      <div id="mobile" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
    </nav>
  );
}

export default MyNavbar;
