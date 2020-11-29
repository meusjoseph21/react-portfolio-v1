import React from "react";

import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button'
import MealMatcher from './images/card1.jpg'
import Random from './images/random.jpg'
import Weather from './images/weather2.jpg'
import Burger from './images/example1.jpg'
import Hotel from './images/hotel.jpg'
import Stats from './images/stats.jpg'

const styling = {
    margin: {
        marginTop: 100
    },
    h1: {
      textAlign: 'center'

    }
}

function portfolio() {
  return (

    <div id="portfolio" >
        
        <Grid container spacing={2} style={styling.margin}>
      <Grid item xs={2}></Grid>
        <Grid item xs={3} className="left w3-animate-left">
          <div>
            <h1 className="center colorChange">Meal Matcher</h1>
            <img src={MealMatcher} alt="mealmatcher" className="resize"></img>
            <p className="center colorChange">Meal Matcher is a recipe book that searches for recipes from the MealDB recipe API based off of the ingredients a user searches. Users can then save and remove recipes from their recipe book.</p>
            <Button href="https://jessicaano92.github.io/meal_matcher_javascript_ajax/" target = "_blank" color="primary">Deployed Site</Button>
            <Button href="https://github.com/jessicaano92/meal_matcher_javascript_ajax" target = "_blank" color="primary">Repository</Button>
          </div>
        </Grid>
        <Grid item xs={3} className="top w3-animate-top">
        <div>
            <h1 className="center colorChange">Random Password Generator</h1>
            <img src={Random} alt="randompassword" className="resize"></img>
            <p className="center colorChange">The Random Password Generator uses a variety of options including uppercase, lowercase, numbers, and special characters to create a password between 8 and 128 characters. Users are prompted to decide what they would like to include and exclude in their password.</p>
            <Button href="https://meusjoseph21.github.io/random-password-gen-03/" target = "_blank"  color="primary">Deployed Site</Button>
            <Button href="https://github.com/jessicaano92/meal_matcher_javascript_ajax" target = "_blank"  color="primary">Repository</Button>
          </div>
          
        </Grid>
        <Grid item xs={3} className="right w3-animate-right">
        <div>
            <h1 className="center colorChange">Weather Dashboard</h1>
            <img src={Weather} alt="weather" className="resize"></img>
            <p className="center colorChange">The Weather Dashboard is a weather application that uses the open weather API to allow users to search any location that is valid within the API to obtain current weather conditions as well as a five day forecast for that location. Users can also save locations to their dashboard to reference later.</p>
            <Button href="https://meusjoseph21.github.io/weather-dashboard-06/" target = "_blank"  color="primary">Deployed Site</Button>
            <Button href="https://github.com/meusjoseph21/weather-dashboard-06" target = "_blank"  color="primary">Repository</Button>
          </div>
        </Grid>
        </Grid>
      <Grid container spacing={2}>
      <Grid item xs={2}></Grid>
        <Grid item xs={3} className="left w3-animate-left">
        <div>
            <h1 className="center colorChange">Express Handlebars</h1>
            <img src={Burger} alt="burger" className="resize"></img>
            <p className="center colorChange">The Express Handlebars application is a burger application that uses handlebars, express, and mysql. It is an example of a full stack developed application.</p>
            <Button href="https://polar-shore-82853.herokuapp.com/" target = "_blank"  color="primary">Deployed Site</Button>
            <Button href="https://github.com/meusjoseph21/express-burgers-handlebars" target = "_blank"  color="primary">Repository</Button>
          </div>
        </Grid>
        <Grid item xs={3} className="bottom w3-animate-bottom">
        <div>
            <h1 className="center colorChange">Hotel Motel</h1>
            <img src={Hotel} alt="hotelmotel" className="resize"></img>
            <p className="center colorChange">Hotel Motel is a property management applications designed specifically for smaller boutique style hotels. This application allows hotel employees to create reservations easily all with a couple clicks of their mouse.</p>
            <Button href="https://hotelmotel.herokuapp.com/" target = "_blank"  color="primary">Deployed Site</Button>
            <Button href="https://github.com/ryanwit/hotel_motel" target = "_blank"  color="primary">Repository</Button>
          </div>
        </Grid>
        <Grid item xs={3} className="w3-animate-right">
        <div>
            <h1 className="center colorChange">Fitness Tracker</h1>
            <img src={Stats} alt="stats" className="resize"></img>
            <p className="center colorChange">The Fitness Tracker application allows users to track their workouts and see an overview of their workout history.</p>
            <Button href="https://whispering-tundra-57532.herokuapp.com/?id=5fb445ff2b1c55001769b0ca" target = "_blank" color="primary">Deployed Site</Button>
            <Button href="https://github.com/meusjoseph21/workouttracker-mongoose" target = "_blank"  color="primary">Repository</Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default portfolio;
