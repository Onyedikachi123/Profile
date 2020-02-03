import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Signup.css';

 class Register extends Component {
  render() {
      
    return (
      <div className="joinOuterContainer">
        
          <div className="joinInnerContainer">
            <h1 className="heading">Register</h1>
            <div><input placeholder="Email" className="joinInput" type="email" /></div>
            <div><input placeholder="Home Adress" className="joinInput mt-20" type="text" /></div>
            <div><input placeholder="Password" className="joinInput mt-20" type="password"/></div>
            <div><input placeholder="Phone Number" className="joinInput mt-20" type="number"/></div>
            <div className="row">
              <div className="col">
                <h6 className="mt-20 text-white">Date of Birth</h6>
                <div className="input-group">
                  <div className="col-third">
                    <input type="text" placeholder="DD" />
                  </div>
                  <div className="col-third">
                    <input type="text" placeholder="MM" />
                  </div>
                  <div className="col-third">
                    <input type="text" placeholder="YYYY" />
                  </div>
                </div>
              </div>
             </div>
            <Link>
              <button className="button mt-20" type="submit" onClick={this.signup}>Sign up</button>
            </Link>
            <p className="buttonText">Already a member? <Link to="/Login">Login</Link></p>
          </div>
    </div>
  
    )
  }
}

export default Register;