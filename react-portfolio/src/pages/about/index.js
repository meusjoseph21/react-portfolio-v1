import { Grid, Button } from "@material-ui/core";
import React from "react";
import Avatar from '@material-ui/core/Avatar'
import { makeStyles } from '@material-ui/core/styles';
import joey from './static/images/avatar/profile.jpg'
import {useLocation} from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
       
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },

    color: {
        color: '#F2F2F2'
    }
  }));
  


function About() {

    const location = useLocation()

  
      const classes = useStyles();

  return (
    <section className="fade-in" >
      <Grid container spacing={3}>
        <Grid item xs={4}></Grid>
        <Grid item xs={4} className="about" >
        
        <Avatar src={joey} alt="Joseph Meus" className={classes.large}></Avatar>

        <h1 className="colorChange">Joseph Meus</h1>
          <p className="colorChange">Joseph is a Full-Stack Web Developer with experience in multiple front end and back end applications. His drive for learning and being able to create every day has allowed him to develop new skills every day. He strives to create responsive intuitive applications that give users an exploratory experience.  </p>


          <Button variant="contained" color="primary" href="/contact">Say What's Up</Button>
            
      
         
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
    </section>
  );
}

export default About;
