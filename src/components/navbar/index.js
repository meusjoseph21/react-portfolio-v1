import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import Resume from "./assets/resources/resume.pdf";
import { Button, Menu, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {Grid} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  margin: {
    marginLeft: 100,
  },
}));

function NavBar() {
  const classes = useStyles();
  const location = useLocation();

  return (
    <div>
      <Grid container>
      <nav id="main-menu" item xs={12}>
        <ul className="nav-bar">
          <Button
            className={classes.margin}
            color="primary"
            variant="contained"
          >
            <a className="resumeButton" href={Resume} target="_blank">
              Resume
            </a>
          </Button>

          <li className="nav-item">
            <Link
              smooth
              to="/home"
              className={
                location.pathname === "/home" ? "nav-link active" : "nav-link"
              }
            >
              About
            </Link>
          </li>

          <li className="nav-item">
            <Link
              smooth
              to="/portfolio"
              className={
                location.pathname === "/portfolio"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Portfolio
            </Link>
          </li>

          <li className="nav-item">
            <Link
              smooth
              to="/contact"
              className={
                location.pathname === "/contact"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      </Grid>
      
      
      
      
      
      
      
     
      
    </div>
  );
}

export default NavBar;
