import { Button } from "@material-ui/core";
import React from "react";
import { Link, useLocation } from "react-router-dom";



function NavBar() {

   function click(){
       
      
    }

    const location = useLocation();

  return (
    <div>
      <nav id="main-menu">
          
        <ul className="nav-bar">


          <li className="nav-item">
          <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          About
        </Link>
          </li>

        
          
          <li>
            <Button color="secondary" className="nav-button" onClick={click}>
              Portfolio
            </Button>
          </li>
          <li>
            <Button color="secondary" className="nav-button" onClick={click}>
              Contact Me
            </Button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar