import React from 'react';
import '../src/assets/css/custom.css';
import '../src/assets/css/responsive-1.0.css';
import '../src/assets/css/helper.css';
import '../src/assets/css/magnific-popup.css';
import '../src/assets/css/slick-1.9.0.css';
import '../src/assets/css/all.min.css';
import '../src/assets/css/animate.min.css';
import '../src/assets/css/bootstrap-4.3.min.css'
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
// import Home from './pages/Home'
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';



function App() {
  return (
    <Router>
      <Switch>
        {/* <Route exact path="/">
          <Home />
        </Route> */}
        <Route exact path="/">
          <Login />
        </Route>
        <Route  exact path="/signup">
          <Signup />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
