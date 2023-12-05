import React, { useContext }  from 'react';
import propTypes from 'prop-types';
import "./CardGerencial.css";
import { CiCircleRemove } from "react-icons/ci";
import { FaPencilAlt } from "react-icons/fa";
import fetchRemoverProduto from '../../api/fetchRemoverProduto';
import AppContext from '../../context/AppContext';
function CardGerencial({ produto }) {
  const { id, image, title, price, description } = produto;
  
  const { setCarregamento } = useContext(AppContext);
  
  const removergerencial =()=>{
    setCarregamento(true);
    fetchRemoverProduto(id).then(() => {
    }).finally(setCarregamento(false));
    id;
  };



  const valorinput = (e) => {
    produto[e.target.name] = e.target.value;
  };



  return (
    <section className="gerencial-item">
      <img src={image} alt="Imagem do produto" className="gerencial-item-imagem" />
      <div className="gerencial-item-conteudo">
        <input  name="title" placeholder={title} className="gerencial-item-titulo" type="text" onChange={valorinput}></input>
        <input  name="price" placeholder={price} className="gerencial-item-preco" type="text" onChange={valorinput}></input>
        <input  name="description" placeholder={description} className="gerencial-item-descricao" type="text" onChange={valorinput}></input>
        <input  name="image" placeholder={image} className="gerencial-item-link-imagem" type="text" onChange={valorinput}></input>
        <button type="button" className="botao-remover-gerencial" onClick={removergerencial}><CiCircleRemove /></button>
        <button type="button" className="botao-editar-gerencial" onClick={removergerencial}><FaPencilAlt  /></button>
      </div>
    </section>


  );
}

export default CardGerencial;
CardGerencial.propTypes = {
  props: propTypes.shape({}),
}.isRequired;
