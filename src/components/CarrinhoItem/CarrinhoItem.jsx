import React from 'react';
import { BsCartX } from "react-icons/bs";
import './CarrinhoItem.css';
function CarrinhoItem() {
  return(
    <section className="carrinho-item">
      <img src="teste" alt="Imagem do produto" className="carrinho-item-imagem"/>
      <div className="carrinho-item-conteudo">
        <h3 className="carrinho-item-titulo">titulo</h3>
        <h3 className="carrinho-item-preco">preco</h3>
        <button type="button" className="botao-remover-carrinho"><BsCartX /></button>
      </div>
    </section>
  );
}
export default CarrinhoItem;
