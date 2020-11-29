
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/navbar/index";
import About from "./pages/about";
import Portfolio from "./pages/portfolio"
import Contact from "./pages/contact";

function App() {
  return (
   
      <Router>
      <div>
        <NavBar />
        <Route exact path ="/" component={About}/>
        <Route exact path ="/home" component={About}/>
        <Route exact path ="/portfolio" component ={Portfolio}/>
        <Route exact path ="/contact" component ={Contact}/>
      </div>
    </Router>


    
    
  );
}

export default App;
