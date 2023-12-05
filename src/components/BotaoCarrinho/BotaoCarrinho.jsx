import React, { useContext } from 'react';
import { HiOutlineShoppingCart } from "react-icons/hi";
import './BotaoCarrinho.css';
import AppContext from '../../context/AppContext';
function BotaoCarrinho() {

  const { carrinhoItens, setCarrinhoVisivel, carrinhoVisivel } = useContext(AppContext);
  const OcultarCarrinho = () => {
    setCarrinhoVisivel(!carrinhoVisivel);
  };


  return (
    <button type="button" className="botao_carrinho" onClick={OcultarCarrinho}>
      <HiOutlineShoppingCart />
      {carrinhoItens.length > 0 && <span className="carrinho-status">{carrinhoItens.length}</span>}
    </button>
  );
}
export default BotaoCarrinho;
