import React, { Component } from 'react';
import  image1  from '../assets/img/slider/image1.png';
import  bannerImage  from '../assets/img/slider/bannerImage.jpg'
import { Link } from 'react-router-dom'


// Components
//  import Navbar from '../components/Navbar/Navbar';
//  import HeroBanner from '../components/HeroBanner/HeroBanner';
//  import Footer from '../components/Footer/Footer';

 class Home extends Component {
  render() {
    return (
      <div>
       
      {/* Main Menu Area */}
      <div className="mainmenu-area">
        <div className="container">
          <div className="row align-items-lg-center">
            <div className="col-lg-11 col-md-11 col-6">
              <nav className="navbar navbar-expand-lg main-nav">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
                  <i className="fas fa-bars" />
                </button>
                <div className="collapse navbar-collapse" id="mainNav">
                  {/* Site Menus */}
                  <ul className="navbar-nav">
                    <li className="nav-item ">
                      <a className="nav-link active" href="#home">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#about">About</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#services">Services</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#pricing">Pricing</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#portfolio">Portfolio</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#testimonial">Testimonial</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#team">Team</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#faqs">Faqs</a>
                    </li>
                    <li className="nav-item dropdown ">
                      <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                        Blog
                      </a> 
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="blog.html">Blog</a>
                        <a className="dropdown-item" href="single-post.html">Single Blog</a>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#contact">Contact</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            <div className="col-lg-1 col-md-1 col-6 text-right">
              <div className="search-icon" id="searchTrigger">
                <img src="assets/img/icon/search.png" alt="" />
              </div>
            </div>
            <div className="searchbar">
              <form>
                <input type="text" placeholder="Search..." />
                <button type="submit"><i className="fas fa-search" /></button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Main menu Area End */}
            {/* Hero Slider Section */}
            <section className="hero-banner" id="heroSlideActive">
                <div className="single-banner-wrap">
                  <div className="single-banner" style={{ backgroundImage:`url(${bannerImage})` }}>
                    <div className="container">
                      <div className="row align-items-center">
                        <div className="col-lg-7">
                          <div className="banner-text fs-16 lh-28">
                            <h1 className="fs-45 lh-60 m-b-45" data-animation="fadeInUp" data-delay=".4s">Take on any challenge of <br />the Gullfoss <span className="theme-color">Business World</span></h1>
                            <p data-animation="fadeInUp" data-delay=".6s">There are many variations passa thges Various versions When you need a kickst no time for coding for your website have evolved over years sometimes.</p>
                            <div className="slider-btns m-t-65">
                              {/* <Link href="#" className="boxed-btn m-r-30" data-animation="fadeInUp" data-delay=".8s">VIEW MORE</Link>
                              <Link href="#" className="boxed-btn boxed-btn-white" data-animation="fadeInUp" data-delay=".8s">GET STARTED</Link> */}
                            </div>
                          </div>
                        </div>
                        <div className="banner-img">
                          <img src={image1} alt="image1" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
          </section>
          <footer>
             {/* Footer copyriht wrap */}
        <div className="footer-copyright">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 cl-12">
                <Link to="#">Terms of use | Privacy Environmental Policy</Link>
              </div>
              <div className="col-lg-6 cl-12">
                <p className="text-right">Copyright © 2019 Gullfoss by Onyedikachi Erugo. All Rights Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      </div>
    )
  }
}

export default Home;