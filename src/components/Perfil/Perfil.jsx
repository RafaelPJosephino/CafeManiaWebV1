import React, { useContext } from 'react';
import "./Perfil.css";
import AppContext from '../../context/AppContext';
import fetchUpdateUsuario from '../../api/fetchUpdateUsuario';

function Perfil() {

  const { setPerfil, perfil, perfilVisivel,pedidosVisivel, setPedidosVisivel,setCarregamento,setGerencialVisivel,gerencialVisivel } = useContext(AppContext);

  const valorinput = (e) => {
    setPerfil({ ...perfil, [e.target.name]: e.target.value });
  };

  const ocultarPedido = () => {
    setPedidosVisivel(!pedidosVisivel);
  };

  const ocultarGerencia = () => {
    setGerencialVisivel(!gerencialVisivel);
  };

  const { username, email, password, street, city, state, zipCode, isAdmin } = perfil;

  const salvarUsuario= () => {
    setCarregamento(true);
    fetchUpdateUsuario(perfil).finally(setCarregamento(false));
  };


  return (
    <div className={`container-informacoes ${perfilVisivel ? "container-informacoes-ativo" : ""} `}>
      <form className="menu-login">
        <input name="username" placeholder="Usuario" value={username} className="input-login" type="text" onChange={valorinput}></input>
        <input name="email" placeholder="Email" value={email} className="input-login" type="email" onChange={valorinput}></input>
        <input name="password" placeholder="Senha" value={password} className="input-login" type="password" onChange={valorinput}></input>
        <input name="street" placeholder="Endereço" value={street} className="input-login" type="email" onChange={valorinput}></input>
        <input name="city" placeholder="Cidade" value={city} className="input-login" type="text" onChange={valorinput}></input>
        <input name="state" placeholder="Estado" value={state} className="input-login" type="text" onChange={valorinput}></input>
        <input name="zipCode" placeholder="Cep" value={zipCode} className="input-login" type="text" onChange={valorinput}></input>
      </form>
      <div className="container-botao">
        <button type="button" className="botao-salvar" onClick={salvarUsuario}>Salvar</button>
        <button type="button" className="botao-perfil" onClick={ocultarPedido}>Acompanhar Pedidos</button>
        {isAdmin && <button type="button" className="botao-perfil" onClick={ocultarGerencia}>Gerenciar Itens</button>}
      </div>
    </div>
  );
}


export default Perfil;
