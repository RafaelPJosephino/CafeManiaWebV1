import React from 'react';
import propTypes from 'prop-types';
import './CardProduto.css';
import { BsCartPlus } from "react-icons/bs";
import formatarMoeda from '../../utils/formatarMoeda';

function CardProduto({ produto }) {

  const { image, title, price, description } = produto;
  return (
    <section className="card_produto">
      <div>
        <img src={image} alt="produto" className="card_imagem" />
        <div className="card_infos">
          <h2 className="card_preco">{title}</h2>
          <h2 className="card_preco">{formatarMoeda(price)}</h2>
          <h2 className="card_titulo">{description}</h2>
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
