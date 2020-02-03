import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Login.css';

 class Login extends Component {
   constructor(props) {
     super(props);
      this.state = {
        email: '',
        password: '',
      }
   }

   handChange(e) {
     this.setState({ [e.target.name]: e.target.value })
   }
  render() {
      
    return (
      <div className="joinOuterContainer">
          <div className="joinInnerContainer">
            <h1 className="heading">Login</h1>
            <div><input value={this.state.email} onChange={this.handChange}placeholder="email" className="joinInput" type="email" /></div>
            <div><input value={this.state.password} onChange={this.handChange} placeholder="Password" className="joinInput mt-20" type="password" /></div>
            <Link>
              <button className="button mt-20" type="submit" onClick={this.login}>Login</button>
            </Link>
            <p className="buttonText">Not yet a member? <Link to="/Signup">Sign up</Link></p>
          </div>
    </div>
    )
  }
}

export default Login;