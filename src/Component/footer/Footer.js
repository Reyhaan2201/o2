import React from 'react';
import './Footer.css';
import {Link} from "react-router-dom"

const Footer = () => {
  return (
    <footer className='fixed-footer'>
      <div className="upper-section container">
        <div className="subsection">
          <h4>SHOP</h4>
          <ul>
            <li><Link href="/Outfitoracle/Ladies">Ladies</Link></li>
            <li><Link href="/Outfitoracle/Men">Men</Link></li>
            <li><Link href="/Outfitoracle/Baby">Baby</Link></li>
            <li><Link href="/Outfitoracle/Kids">Kids</Link></li>
            <li><Link href="/Outfitoracle/Sport">Sport</Link></li>
            <li><Link href="/Outfitoracle/Sale">Sale</Link></li>
          </ul>
        </div>
        <div className="subsection">
          <h4>CORPORATE INFO</h4>
          <ul>
            <li><a href="#Carrer">Carrer</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#Sustainabiltiy">Sustainabiltiy</a></li>
            <li><a href="#Press">Press</a></li>
            <li><a href="#Relations">Investor Relations</a></li>
            <li><a href="#Corporate">Corporate governance</a></li>
          </ul>
        </div>
        <div className="subsection">
          <h4>HELP</h4>
          <ul>
            <li><a href="#Customer">Customer Service</a></li>
            <li><a href="#o2">My O2</a></li>
            <li><a href="#Find a Store">Find a Store</a></li>
            <li><a href="#Legal & Privacy">Legal & Privacy</a></li>
            <li><a href="#Contact">Contact</a></li>
            <li><a href="#Report">Report a Scam</a></li>
          </ul>
        </div>
        <div className="subsection">
          <ul>
            <li id='ssf'> Sign up now and be the first to know about exclusive offers, latest fashion news & style tips!</li>
            <li><a href="#readmore">Read More</a></li>
          </ul>
        </div>
      </div>
      <div className="lower-section container">
        <div className='lowersub_sec lowersub_sec1'>
        
        
        <a href="#img"><img width="48" height="48" src="https://img.icons8.com/color/48/instagram-new--v1.png" alt="instagram-new--v1"/></a>
          <a href="#img2"><img width="48" height="48" src="https://img.icons8.com/color/48/pinterest--v1.png" alt="pinterest--v1"/></a>
          <a href="#img3"><img width="48" height="48" src="https://img.icons8.com/color/48/facebook-circled--v1.png" alt="facebook-circled--v1"/></a>
          <a href="#img4"><img width="48" height="48" src="https://img.icons8.com/color/48/youtube-play.png" alt="youtube-play"/></a>
         
        </div>
        <div className='lowersub_sec lowersub_sec2'>
            <p>The content of this site is copyright-protected and is the property of R.R</p>
         
          <p style={{}}>&copy; 2024  <a href="#Outfit">OUTFIT ORACLE</a>. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
