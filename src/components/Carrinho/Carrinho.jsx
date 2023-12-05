import React, { useContext } from 'react';
import './Carrinho.css';
import CarrinhoItem from '../CarrinhoItem/CarrinhoItem';
import AppContext from '../../context/AppContext';
import formatarMoeda from '../../utils/formatarMoeda';
import fetchRegistrarPedido from '../../api/fetchRegistrarPedido';

function Carrinho() {
  const { setCarrinhoItens,carrinhoItens, setCarrinhoVisivel, carrinhoVisivel, perfil, setCarregamento } = useContext(AppContext);

  const totalCarrinho = carrinhoItens.reduce((acc, item) => {
    return item.price + acc;
  }, 0);

  const finalizarCompra = () => {
    const idsProdutos = carrinhoItens.map(p =>p.id);
    const dto = {
      products: idsProdutos,
      user: perfil.id
    };
    setCarregamento(true);
    fetchRegistrarPedido(dto).then(() => {
      setCarrinhoVisivel(!carrinhoVisivel);
      setCarrinhoItens([]);
    }).finally(
      
      setCarregamento(false));
  };


  return (
    <section className={`carrinho ${carrinhoVisivel ? "carrinho-ative" : ""} `}>
      <div className="carrinho-itens">
        {carrinhoItens.map((item) => <CarrinhoItem key={item.id} produto={item} />)}
      </div>
      <div className="container-resumo">
        <div className="carrinho-resumo">{formatarMoeda(totalCarrinho, 'BRL')}</div>
        <button type="button" className="carrinho-resumo-botao-finalizar" onClick={finalizarCompra}>Finalizar</button>
      </div>
    </section>
  );
}

export default Carrinho;
