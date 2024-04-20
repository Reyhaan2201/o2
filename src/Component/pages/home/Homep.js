import React from "react";
import "./Homep.css";
import Swiperimg from "./swiper/Swiperimg";
import Wpic from "./wpic/Wpic";
import Season from "./season/Season";
import Kidseason from "./kidseasoon/Kidseason";

function Homep() {
   
  return <div id="maincontent">
  
    <Swiperimg/>
    <Wpic/>
    <Season/>
    <Kidseason/>
  </div>;
}

export default Homep;
