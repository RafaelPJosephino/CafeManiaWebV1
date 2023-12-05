import React from 'react';
import "./CardPedido.css";
import propTypes from 'prop-types';
function CardPedido({ produto }) {
  const { id, street, city, zipCode, finished } = produto;

  return (
    <section className="card-pedido">
      <div className="card_infos-pedido">
        <h2 className="card_titulo-pedido">{`Pedido ${id}`}</h2>
        <h2 className="card_preco-street">{`Rua: ${ street?street:""}`}</h2>
        <h2 className="card_endereco-endereco">{`Endereco: ${ city?city:""}  ${ street?street:"" } ${ zipCode?zipCode:""} `}</h2>
        <h2 className="card_status-finished">{`Status: ${finished ? "Pendente" : "Finalizado"}`}</h2>
      </div>
    </section>
  );
}

export default CardPedido;

CardPedido.propTypes = {
  props: propTypes.shape({}),
}.isRequired;
