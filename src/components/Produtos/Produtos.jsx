import React, { useContext, useEffect } from 'react';
import './Produtos.css';
import fetchProdutos from '../../api/fetchProdutos';
import CardProduto from '../CardProduto/CardProduto';
import AppContext from '../../context/AppContext';

function Produtos() {

  const {produtos,setProdutos,setCarregamento} = useContext(AppContext);

  useEffect(() => {
    setCarregamento(true);
    fetchProdutos().then((reponse) => { 
      setProdutos(reponse);   
    }).finally(setCarregamento(false));
    
  }, []);
  return (
    <section className="produtos container">
      {produtos.map((p) => <CardProduto key={p.id} produto={p} />)}
    </section>
  );

}


export default Produtos;
