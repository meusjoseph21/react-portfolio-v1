import "./App.css";
import {  Grid} from '@material-ui/core'
import NavBar from './components/navbar/index'

import React from "react";



function App() {

  
  
  return (
    <div className="App">

      <NavBar />

      
      <section className="about">
        <Grid container spacing={3}>
        <Grid item xs ={4}></Grid>
        <Grid item xs={4} className="about">
        <h1>Joseph Meus</h1>
        <p>Joseph is a Full-Stack Web Developer</p>
        </Grid>
        <Grid item xs={4}></Grid>


        </Grid>
        
      </section>
    
      
    </div>
  );
}

export default App;
