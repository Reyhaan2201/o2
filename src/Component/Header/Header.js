import React from "react";
import { useState } from 'react';

import Navbar from "./navbar/Navbar";
import Announcement from "./announcement/Announcement";

function Header() {
    const [mode, setmode] = useState({bg:"#D78D8A"});
    function onhandleclick(){
        if(mode.bg === "#D78D8A"){
            setmode( {bg:"#BE9485"});
            document.body.style.backgroundColor= "#BE9485"
        }
        else{
            setmode( {bg:"#D78D8A"});
            document.body.style.backgroundColor= "#D78D8A"

        }
    }
  return <div > 
<Navbar handleclick={onhandleclick} mode={mode} />
<Announcement/>
    </div>     
    
  
}

export default Header;
