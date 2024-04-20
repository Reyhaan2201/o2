import React from "react";
import "./Wpic.css";
import image3 from "./img3.jpg";
import image4 from "./img4.jpg";
import {Link} from "react-router-dom"
function Wpic() {
  return <div>
     <div className="container-fluid mb-3 mt-3" id="imgbox">
      <img src={image3} alt="Image3" />
      <img src={image4} alt="Image4" />
      <div className="bottom-container">
        {/* <h6 style={{fontWeight: "bold",textTransform: "uppercase",wordSpacing: "2px",letterSpacing: "6px"}}>Spring Curation</h6> */}
        <h1 style={{fontWeight: "bold",color: "black"}}>O2</h1>
        <p style={{fontWeight: "bolder",color: "black"}}>The Collection arrives at 31 dec.</p>
       <Link to="/Outfitoracle/Men">View Collection</Link>
      </div>
      </div>
  </div>;
}

export default Wpic;
