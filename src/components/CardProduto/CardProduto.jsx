import React from 'react';
import propTypes from 'prop-types';
import './CardProduto.css';
import { BsCartPlus } from "react-icons/bs";
import formatarMoeda from '../../utils/formatarMoeda.js';
function CardProduto({ produto }) {

  const { title, price, thumbnail } = produto;
  return (
    <section className="card_produto">
      <div>
        <img src={thumbnail} alt="produto" className="card_imagem" />
        <div className="card_infos">
          <h2 className="card_preco">{formatarMoeda(price, 'BRL')}</h2>
          <h2 className="card_titulo">{title}</h2>
        </div>
      </div>
      <button type="button" className="button_add_carrinho"><BsCartPlus /></button>
    </section>
  );
}
export default CardProduto;

CardProduto.propTypes = {
  props: propTypes.shape({}),
}.isRequired;
