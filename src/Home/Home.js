import "./Home.css";

import React from "react";
import Helmet from "react-helmet";

const Home = () => (
  <div>  
    <Helmet>
      <title> Dragon Ball Z Little Fighter 2</title>
    </Helmet>
    <h1 className="text-white">DBZ LF2</h1>
    <div className="relative mb-10">
      <img 
        src={require('../images/dbzlf2-logo-horizontal.png')}
        className="hidden sm:block"
        alt="dbz lf2 logo for larger screens"
      />
      <img 
        src={require('../images/dbzlf2-logo.png')}
        className="block sm:hidden"
        alt="dbz lf2 logo for smaller screens"
      />
      <p className="version-label text-white text-right -mt-5 mr-2 sm:-mt-3 lg:-mt-8 lg:mr-10"> Ver 0.2.8 </p>
    </div>
    
    <div className="text-center mt-24" >
      <div className="video-responsive">
        <iframe title="trailer" width="100%" height="315" src="https://www.youtube.com/embed/qr8AJyuS-VY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  </div>
);

export default Home;
