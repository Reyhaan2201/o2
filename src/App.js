import React from "react";
import Header from "./Component/Header/Header";
import { BrowserRouter } from "react-router-dom";
import {Routes,Route} from "react-router-dom"
import Homep from "./Component/pages/home/Homep";
import Footer from "./Component/footer/Footer";
import Ladiespg from "./Component/pages/ladiespg/Ladiespg";
import Menpg from "./Component/pages/Menpg/Menpg";
import Baby from "./Component/pages/Babypg/Baby";
import Kidpg from "./Component/pages/Kidpg/Kidpg";
import Sport from "./Component/pages/Sport/Sport";
import Sale from "./Component/pages/Sale/Sale";
import Sign from "./Component/Sign/Sign";
import Login from "./Component/login/Login";

function App() {
  return <div>
    <BrowserRouter>
    <Header/>
   
    <Routes>
      <Route path="/"  element={<Homep/>} />
      <Route path="/Outfitoracle/Ladies"  element={<Ladiespg/>} />
      <Route path="/Outfitoracle/Men"  element={<Menpg/>} />
      <Route path="/Outfitoracle/Baby"  element={<Baby/>} />
      <Route path="/Outfitoracle/Kids"  element={<Kidpg/>} />
      <Route path="/Outfitoracle/Sport"  element={<Sport/>} />
      <Route path="/Outfitoracle/Sale"  element={<Sale/>} />
      <Route path="/Sign-in"  element={<Sign/>} />
      <Route path="/Login"  element={<Login/>} />
   
    
    </Routes>
    <Footer/>
    </BrowserRouter>
  </div>;
}

export default App;
