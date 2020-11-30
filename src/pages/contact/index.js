import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core/";
import {FaGithub} from "react-icons/fa"
import {AiOutlineFacebook} from "react-icons/ai"
import {SiGmail} from "react-icons/si"
import {AiFillLinkedin} from "react-icons/ai"
import {FaSpotify} from "react-icons/fa"
import {GrInstagram} from "react-icons/gr"
import Typing from "react-typing-animation";

const useStyles = makeStyles((theme) => ({
  marginIcons: {
    marginLeft: 150,
    marginTop: 40,
    textAlign: "center"
  },

  center: {
    textAlign: "center",
    color: 'white'
  }
}));

function Contact() {
  const classes = useStyles();
  return (
    <div className="contact" id="contactMe">
      <Grid container spacing={3}>
        <Grid item xs={1}></Grid>
        <Grid item xs={10}>
          <div className="move">
            <Typing>
              <h1 className={classes.center}>
                <span>Get In Touch on Social Media</span>
              </h1>
            </Typing>
            
             
                <a className={classes.marginIcons}href="https://github.com/meusjoseph21" target="_blank">
                  <FaGithub color="white" size="60" />
                </a>
                <a className={classes.marginIcons} href="https://www.facebook.com/jmeus1" target="_blank">
                  <AiOutlineFacebook color="white" size="60" />
                </a>
                <a className={classes.marginIcons} href="mailto:meusjoseph21@gmail.com" target="_blank">
                  <SiGmail color="white" size="60" />
                </a>
              
             
              <a  className={classes.marginIcons}href="https://www.linkedin.com/in/joseph-meus-4b8b071b4/" target="_blank">
                  <AiFillLinkedin color="white" size="60" />
                </a>
                <a  className={classes.marginIcons}href="https://open.spotify.com/user/j.meus?si=R2H2FCzzQkaMdb40Q42dJA" target="_blank">
                  <FaSpotify color="white" size="60" />
                </a>
                <a className={classes.marginIcons} href="https://www.instagram.com/josmuse/?hl=en" target="_blank">
                  <GrInstagram color="white" size="60" />
                </a>
              
            
          </div>
        </Grid>
        <Grid item xs={1}></Grid>
       
      </Grid>
    </div>
  );
}

export default Contact;
