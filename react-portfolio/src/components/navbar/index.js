
import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import {useLocation} from 'react-router-dom'



function NavBar() {


const location = useLocation()

  return (
    <div>
      <nav id="main-menu">
          
        <ul className="nav-bar">


          <li className="nav-item">
          <Link smooth to="/home" className={location.pathname === "/home" ? "nav-link active" : "nav-link"}>
          About
        </Link>
          </li>

        
          <li className="nav-item">
          <Link smooth to="/portfolio" className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
          Portfolio
        </Link>
          </li>

        </ul>
      </nav>
    </div>
  );
}

export default NavBar