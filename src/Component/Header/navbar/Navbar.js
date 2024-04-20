import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
 
    
  return (<>
    <nav>
    <div className={`navbar container-fluid bg-${props.mode === "#D78D8A" ? "#BE9485": "#D78D8A"}`}>
      <div className="left-section">
        <Link to="/" className='navtitle'> <span className='titlespan'>Outfit</span>Oracle</Link>
      </div>
      <div className="right-section">
        <ul>  
          <li className='raise'  >
            <div className="bar">
            <img width="23" height="23" src="https://img.icons8.com/ios-filled/50/user.png" alt="user"/>

            <Link to="/Sign-in">Sign in</Link>
            </div>
           </li>
          <li className='raise'  >
            <div className="bar">
            <img width="25" height="25" src="https://img.icons8.com/external-smashingstocks-glyph-smashing-stocks/66/external-favourites-shopping-and-commerce-smashingstocks-glyph-smashing-stocks.png" alt="external-favourites-shopping-and-commerce-smashingstocks-glyph-smashing-stocks"/>
            <Link to="/">Favourite</Link>
            </div>
           
            </li>
          <li className='raise'  >
            <div className="bar">
            <img width="23" height="23" src="https://img.icons8.com/ios-filled/50/shopping-bag.png" alt="shopping-bag"/>
            <a href="#Shoppingbag">Shopping Bag</a>
            </div>
        </li>
          <li className='raise'   onClick={props.handleclick}>
            <div className="bar">
            <img width="25" height="25" src="https://img.icons8.com/sf-black/64/airport.png" alt="airport"/>
            <a href="#mode">Mode</a>
            </div>
            </li>
        </ul>
      </div>
    </div>
    </nav>
    <nav>
    <div id="menu">
  <ul>
    <li className='close' >
       <Link to="/Outfitoracle/Ladies">Ladies</Link>
    </li>
    <li className='close'> 
      <Link to="/Outfitoracle/Men">Men</Link>
    </li>
    <li className='close'><Link to="/Outfitoracle/Baby">Baby</Link> </li>
    <li className='close'><Link to="/Outfitoracle/Kids">Kids</Link> </li>
    <li className='close'><Link to="/Outfitoracle/Sport">Sport</Link>  </li>
    <li className='close'><Link to="/Outfitoracle/Sale">Sale</Link> </li>
    {/* <li className='close'><Link to="/Outfitoracle/Sustainibilty">Sustainibilty</Link> </li> */}
  </ul>
</div>




    </nav>

    </>
  );
}

export default Navbar;
