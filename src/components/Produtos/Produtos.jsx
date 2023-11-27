import React, { useEffect, useState } from 'react';
import './Produtos.css';
import fetchProdutos from '../../api/fetchProdutos';
import CardProduto from '../CardProduto/CardProduto';
import Carregamento from '../Carregamento/Carregamento';

function Produtos() {

  const [produtos, setProdutos] = useState([]);
  const [carregamento, setCarregamento] = useState(true);

  useEffect(() => {

    fetchProdutos().then((reponse) => { setProdutos(reponse); });
    setCarregamento(false);
  }, []);
  console.log(produtos);
  return (
    (carregamento && <Carregamento />) || (
      <section className="produtos container">
        {produtos.map((p) => <CardProduto key={p.id} produto={p} />)}
      </section>
    )
  );

}


export default Produtos;
