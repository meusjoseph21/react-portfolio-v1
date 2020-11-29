import { Grid, Button } from "@material-ui/core";
import React from "react";
import Avatar from '@material-ui/core/Avatar'
import { makeStyles } from '@material-ui/core/styles';
import joey from './static/images/avatar/profile.jpg'

import {SiJavascript} from 'react-icons/si'
import {DiCss3} from 'react-icons/di'
import {IoLogoHtml5} from 'react-icons/io'
import {IoLogoNodejs} from 'react-icons/io'
import {SiPostman} from 'react-icons/si'
import {GrMysql} from "react-icons/gr"
import {BsBootstrap} from 'react-icons/bs'
import {DiMaterializecss} from 'react-icons/di'
import {DiNpm} from "react-icons/di"
import {SiAdobe} from 'react-icons/si'


const useStyles = makeStyles((theme) => ({
       
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },

    spacing: {
        marginRight:65
    },

    marginIcons: {
        marginTop: 250,
       

    }
  }));
  


function About() {


  
      const classes = useStyles();

  return (
    <section className="top" id="about">
      <Grid container spacing={3} className="fade-in">
        <Grid item xs={4}></Grid>
        <Grid item xs={4} className="about" >
        
        <Avatar src={joey} alt="Joseph Meus" className={classes.large}></Avatar>

        <h1 className="colorChange">Joseph Meus</h1>
          <p className="colorChange">Joseph is a Full-Stack Web Developer with experience in multiple front end and back end applications. His drive for learning and being able to create every day has allowed him to develop new skills every day. He strives to create responsive intuitive applications that give users an exploratory experience.  </p>


          <Button variant="contained" color="primary" href="/contact">Say What's Up</Button>

         
            
      
         
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
      <Grid container spacing={3} className={classes.marginIcons}>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
            <div className="bottom w3-animate-bottom">
            <SiJavascript color="white" size="45" className={classes.spacing}></SiJavascript>
            <DiCss3 color="white" size='45' className={classes.spacing}></DiCss3>
            <IoLogoHtml5 color="white" size="45" className={classes.spacing}></IoLogoHtml5>
            <IoLogoNodejs color="white" size="45" className={classes.spacing}></IoLogoNodejs>
            <SiPostman color="white" size="45" className={classes.spacing}></SiPostman>
            <GrMysql color="white" size="45" className={classes.spacing}></GrMysql>    
            <BsBootstrap color="white" size="45" className={classes.spacing}></BsBootstrap> 
            <DiMaterializecss color="white" size="45" className={classes.spacing}></DiMaterializecss>
            <DiNpm color="white" size="45" className={classes.spacing}></DiNpm>
            <SiAdobe color ="white" size ="45" className={classes.spacing}></SiAdobe>


            </div>
           
            
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </section>
  );
}

export default About;
