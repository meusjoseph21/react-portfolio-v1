import { Button } from "@material-ui/core";
import React from "react";



function NavBar() {

   function click(){
        console.log("Ive been clicked")
    }


  return (
    <div>
      <nav id="main-menu">
          
        <ul className="nav-bar">
          <li>
            <Button color="secondary" className="nav-button" onClick={click}>
              About
            </Button>
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