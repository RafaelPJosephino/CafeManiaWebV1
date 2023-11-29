import React from 'react';
import propTypes from 'prop-types';
import { BsCartX } from "react-icons/bs";
import './CarrinhoItem.css';
import formatarMoeda from '../../utils/formatarMoeda';

function CarrinhoItem({ produto }) {
  const {  image, title, price, description  } = produto;
  return(
    <section className="carrinho-item">
      <img src={image} alt="Imagem do produto" className="carrinho-item-imagem"/>
      <div className="carrinho-item-conteudo">
        <h2 className="carrinho-item-titulo">{title}</h2>
        <h3 className="carrinho-item-preco">{formatarMoeda(price,'BRL')}</h3>
        <h4 className="carrinho-item-descricao">{description}</h4>
        <button type="button" className="botao-remover-carrinho"><BsCartX /></button>
      </div>
    </section>
  );
}
export default CarrinhoItem;

CarrinhoItem.propTypes = {
  props: propTypes.shape({}),
}.isRequired;
