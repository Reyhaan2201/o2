import React from "react";
import "./Swiperimg.css"
import image1 from "../images/img1.jpg"
import image2 from "../images/img2.jpg"
import {Link} from "react-router-dom"


function Swiperimg() {
  return <div>
     <div className="container-fluid" id="imgbox">
      <img src={image1} alt="Image1" />
      <img src={image2} alt="Image2" />
      <div className="bottom-container">
        <h6 style={{fontWeight: "bold",textTransform: "uppercase",wordSpacing: "2px",letterSpacing: "6px"}}>Spring Curation</h6>
        <h1 style={{fontWeight: "bold"}}>Lights & Linen</h1>
        <p style={{fontWeight: "bold"}}>unmatched layers  for pared-back sophistication.</p>
       <Link to="/Outfitoracle/Men">Shop Now</Link>
      </div>
    </div>
    

  </div>;
}

export default Swiperimg;
