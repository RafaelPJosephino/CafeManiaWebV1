import React from 'react';
import './Navbar.css';
import Logo from '../Images/LogoCafemania.png';
import BotaoCarrinho from '../BotaoCarrinho/BotaoCarrinho';
import BotaoLogin from '../BotaoLogin/BotaoLogin';
function Navbar() {
  return (
    <nav className="navbar">
      <div className="container" >
        <img src={Logo} className="logo"></img>
        <div>
          <BotaoLogin/>
          <BotaoCarrinho/>
        </div>
      </div>
    </nav >
  );
}
export default Navbar;
