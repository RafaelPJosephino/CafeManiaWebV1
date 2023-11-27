import React from 'react';
import './Navbar.css';
import Logo from '../Images/LogoCafemania.png';
import BotaoCarrinho from '../BotaoCarrinho/BotaoCarrinho';
function Navbar() {
  return (
    <nav className="navbar">
      <div className="container" >
        <img src={Logo} className="logo"></img>
        <BotaoCarrinho/>
      </div>
    </nav >
  );
}
export default Navbar;
