import React from "react";
import "./Kidseason.css"
import kidseason1 from "./kidseasonimg/bd68995cb3cd578da188433caf4668c7.jpg"
import kidseason2 from "./kidseasonimg/d62a7e9d2ae24dd4c17adbf83b954518.jpg"
import {Link} from "react-router-dom"

function Kidseason() {
  return <div>
     <div className="season mt-3 mb-3">
      <img src={kidseason1} alt="Image1" />
      <img src={kidseason2} alt="Image2" />
      <div className="seasondiv">
        <h3 style={{color: "black"}}>Kids Linen</h3>
        <Link to="/Outfitoracle/Kids">Shop Now</Link>
      </div>
       
    </div>
  </div>;
}

export default Kidseason;
