import React from 'react';
import './Carrinho.css';
import CarrinhoItem from '../CarrinhoItem/CarrinhoItem';
function Carrinho() {
  return(
    <section className="carrinho">
      <div className="carrinho-itens">
        <CarrinhoItem/>
      </div>
      <div className="carrinho-resumo">resumo</div>
    </section>
  );
}

export default Carrinho;
