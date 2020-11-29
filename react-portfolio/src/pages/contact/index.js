import React from "react";
import { Grid } from "@material-ui/core/";
import {GoMarkGithub} from 'react-icons/go'
import {AiOutlineFacebook} from 'react-icons/ai'
import {SiGmail} from 'react-icons/si'

function Contact() {
  return (
    <div className="contact" id="contactMe">
      <Grid container spacing={3}>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <div className="move">
            <h1>Enter Your Information</h1>
            <form>
              <label for="fname">First name:</label>
              <input type="text" id="fname" name="fname"></input><br></br>
              <label for="lname">Last name:</label>
              <input type="text" id="lname" name="lname"></input>
            </form>
          </div>
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
    </div>
  );
}

export default Contact;
