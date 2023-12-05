import React, { useContext } from 'react';
import "./Gerencial.css";
import CardGerencial from '../CardGerencial/CardGerencial';
import fetchProdutos from '../../api/fetchProdutos';
import AppContext from '../../context/AppContext';
import { CiCirclePlus } from "react-icons/ci";
import fetchRegistrarProduto from '../../api/fetchRegistrarProduto';
function Gerencial() {
  const { produto, setProduto, produtos, setProdutos, setCarregamento,gerencialVisivel } = useContext(AppContext);



  const AtualizarLista = () => {
    setCarregamento(true);
    fetchProdutos().then((reponse) => {
      setProdutos(reponse);
    }).finally(setCarregamento(false));
  };

  const AdicionarProduto = () => {
    setCarregamento(true);
    fetchRegistrarProduto(produto).then(() => {
    }).finally(setCarregamento(false));
  };

  const valorinput = (e) => {
    setProduto({ ...produto, [e.target.name]: e.target.value });
  };
  return (
    <section className={`Gerencial ${gerencialVisivel?"Gerencial-ative":""}`}>
      <div className="Gerencial-itens">
        {produtos.map((item) => <CardGerencial key={item.id} produto={item} />)}
      </div>
      <div className="gerencial-item-conteudo">
        <button type="button" className="botao-adicionar-gerencial" onClick={AdicionarProduto}><CiCirclePlus /></button>
        <input name="title" placeholder="Titulo" className="gerencial-item-titulo" type="text" onChange={valorinput}></input>
        <input name="price" placeholder="Preco" className="gerencial-item-preco" type="text" onChange={valorinput}></input>
        <input name="description" placeholder="descricao" className="gerencial-item-descricao" type="text" onChange={valorinput}></input>
        <input name="image" placeholder="link Imagem" className="gerencial-item-link-imagem" type="text" onChange={valorinput}></input>
        <button type="button" className="botao-atualizar-gerencial" onClick={AtualizarLista}>Atualizar</button>
      </div>
    </section>
  );
}

export default Gerencial;
