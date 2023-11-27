import React from 'react';
import { HiOutlineShoppingCart } from "react-icons/hi";
import './BotaoCarrinho.css';
function BotaoCarrinho() {
  return(
    <button type="button" className="botao_carrinho">
      <HiOutlineShoppingCart/>
      <span className="carrinho-status">2</span>
    </button>
  );
}
export default BotaoCarrinho;
