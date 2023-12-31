import React, { useContext } from 'react';
import propTypes from 'prop-types';
import './CardProduto.css';
import { BsCartPlus } from "react-icons/bs";
import formatarMoeda from '../../utils/formatarMoeda';
import AppContext from '../../context/AppContext';
function CardProduto({ produto }) {

  const { image, title, price, description } = produto;
  const { carrinhoItens, setCarrinhoItens } = useContext(AppContext);
  const addCarrinho = () => {
    setCarrinhoItens([...carrinhoItens, produto]);
  };
  return (
    <section className="card_produto">
      <div>
        <img src={image} alt="produto" className="card_imagem-produto" />
        <div className="card_infos-produto">
          <h2 className="card_titulo-produto">{title}</h2>
          <h2 className="card_preco-produto">{formatarMoeda(price, 'BRL')}</h2>
          <h2 className="card_titulo-produto">{description}</h2>
        </div>
      </div>
      <button type="button" className="button_add_carrinho" onClick={addCarrinho}><BsCartPlus /></button>
    </section>
  );
}
export default CardProduto;

CardProduto.propTypes = {
  props: propTypes.shape({}),
}.isRequired;
