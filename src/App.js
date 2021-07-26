import React from 'react';
import Renderer from "./Renderer"
import NavBar from "./NavBar"
import About from "./About"
import KanjiGame from "./KanjiGame"
import Search from "./Search"
import Score from "./Score"
import ShowListYojis from "./ShowListYojis"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

  function App() {


    // use "exact" on Router to show homepage (Route path "/" only) 
    

  return(
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={KanjiGame} />
        <Route path="/kanjigame" component={Renderer} />
        <Route path="/search" component={Search} />
        <Route path="/list" component={ShowListYojis} />
        <Route path="/about" component={About} />
        </Switch>
    </Router>
  );
}

export default App;