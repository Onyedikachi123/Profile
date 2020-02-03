import React, { Component } from 'react';
import fire from './config/Fire';
import './assets/css/custom.css'

// Pages
import Home from './pages/Home';
import Login from './pages/Login/Login';


class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {},
    }
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if(user){
        this.state({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }
  render() {
    return (
      <div>
    { this.state.user ? (<Home />) : (<Login />)}
      </div>
    )
  }
}

export default Main;
