import React from "react";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Zoom from '@material-ui/core/Zoom'

const styling = {
    margin: {
        marginTop: 200,
        height: 400,
        
        
      
    }
}

function portfolio() {
  return (

    <div >
        
        <Grid container spacing={2} style={styling.margin}>
      <Grid item xs={2}></Grid>
        <Grid item xs={3} className="left w3-animate-left">
          <Card style={styling}>
            <h1>Title</h1>
            <p>Description</p>
            <p>links</p>
          </Card>
        </Grid>
        <Grid item xs={3} className="top w3-animate-top">
          <Card>
            <h1>Title</h1>
            <p>Description</p>
            <p>links</p>
          </Card>
        </Grid>
        <Grid item xs={3} className="right w3-animate-right">
          <Card>
            <h1>Title</h1>
            <p>Description</p>
            <p>links</p>
          </Card>
        </Grid>
        </Grid>
      <Grid container spacing={2} style={styling.margin}>
      <Grid item xs={2}></Grid>
        <Grid item xs={3} className="left w3-animate-left">
          <Card>
            <h1>Title</h1>
            <p>Description</p>
            <p>links</p>
          </Card>
        </Grid>
        <Grid item xs={3} className="bottom w3-animate-bottom">
          <Card>
            <h1>Title</h1>
            <p>Description</p>
            <p>links</p>
          </Card>
        </Grid>
        <Grid item xs={3} className="w3-animate-right">
          <Card>
            <h1>Title</h1>
            <p>Description</p>
            <p>links</p>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default portfolio;
