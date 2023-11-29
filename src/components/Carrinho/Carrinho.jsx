import React, { useContext } from 'react';
import './Carrinho.css';
import CarrinhoItem from '../CarrinhoItem/CarrinhoItem';
import AppContext from '../../context/AppContext';
function Carrinho() {
  const {carrinhoItens} = useContext(AppContext);
  return(
    <section className="carrinho">
      <div className="carrinho-itens">
        {carrinhoItens.map((item)=><CarrinhoItem key={item.id} produto = { item }/>)}
      </div>
      <div className="carrinho-resumo">resumo</div>
    </section>
  );
}

export default Carrinho;
