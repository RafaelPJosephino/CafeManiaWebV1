import React, { useContext } from 'react';
import { AiOutlineReload } from "react-icons/ai";
import './Carregamento.css';
import AppContext from '../../context/AppContext';


function Carregamento(){
  const { carregamento } = useContext(AppContext);


  return (carregamento && <div className="fundo-branco"><AiOutlineReload className="Carregamento" /></div>);
}
export default Carregamento;
