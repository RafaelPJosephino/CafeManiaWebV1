import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import "./Pedidos.css";
import CardPedido from '../CardPedido/CardPedido';
import fetchPedidos from '../../api/fetchPedidos';
function Pedidos() {
  const { perfil, pedidosVisivel, setPedidosVisivel, setCarregamento, setPedidos, pedidos } = useContext(AppContext);
  const OcultarPedidos = () => setPedidosVisivel(!pedidosVisivel);

  const carregarPedido = () => {
    setCarregamento(true);
    fetchPedidos(perfil.id).then((reponse) => {
      setPedidos(reponse);
    }).finally(setCarregamento(false));

  };


  return (
    <section className={` pedidos ${pedidosVisivel ? "pedidos-ativo" : ""}`}>
      <div className="pedidos-itens">
        {pedidos.map((p) => <CardPedido key={p.id} produto={p} />)}
      </div>
      <button type="button" className="botao_voltar" onClick={OcultarPedidos} >voltar</button>
      <button type="button" className="botao_voltar" onClick={carregarPedido} >Carregar</button>
    </section>
  );
}

export default Pedidos;
