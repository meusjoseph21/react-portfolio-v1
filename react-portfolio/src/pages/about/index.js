import { Grid } from "@material-ui/core";
import {Card} from '@material-ui/core';
import React from "react";


function About() {
  return (
    <section className="about">
      <Grid container spacing={3}>
        <Grid item xs={4}></Grid>
        <Grid item xs={4} className="about">
        <Card className="card">

        <h1>Joseph Meus</h1>
          <p>Joseph is a Full-Stack Web Developer</p>
            
        </Card>
         
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
    </section>
  );
}

export default About;
