import React from 'react';
import './Season.css';
import season1 from "./seasonimg/season1.jpg";
import season2 from "./seasonimg/season2.jpg";
import {Link} from "react-router-dom"

const Season = () => {
  return (
    <div className="season mt-3 mb-3">
      <img src={season1} alt="Image1" />
      <img src={season2} alt="Image2" />
      <div className="seasondiv">
        <h3>Details of Season.</h3>
        <Link to="/Outfitoracle/Ladies">Shop Now</Link>
      </div>
       
    </div>
  );
};

export default Season;
