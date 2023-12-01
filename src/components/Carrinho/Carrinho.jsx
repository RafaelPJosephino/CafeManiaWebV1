import React, { useContext } from 'react';
import './Carrinho.css';
import CarrinhoItem from '../CarrinhoItem/CarrinhoItem';
import AppContext from '../../context/AppContext';
import formatarMoeda from '../../utils/formatarMoeda';
function Carrinho() {
  const { carrinhoItens } = useContext(AppContext);

  const totalCarrinho = carrinhoItens.reduce((acc, item) => {
    return item.price + acc;
  }, 0);

  return (
    <section className="carrinho">
      <div className="carrinho-itens">
        {carrinhoItens.map((item) => <CarrinhoItem key={item.id} produto={item} />)}
      </div>
      <div className="container-resumo">
        <div className="carrinho-resumo">{formatarMoeda(totalCarrinho, 'BRL')}</div>
        <button type="button" className="carrinho-resumo-botao-finalizar">Finalizar</button>
      </div>
    </section>
  );
}

export default Carrinho;
