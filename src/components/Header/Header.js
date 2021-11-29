import React from "react";
import './Header.css';
import headerimg from './headerimg.jpg';

const Header = () => {
    return (
      <div className='photo'>
          <img style={{paddingTop: '5px'}} alt='logo' src={headerimg}/> 
       </div>
     );
}    


export default Header;