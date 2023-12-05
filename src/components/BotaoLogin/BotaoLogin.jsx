import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import { SlLogin } from "react-icons/sl";
import { FaUser } from "react-icons/fa";
import "./BotaoLogin.css";
function BotaoLogin() {

  const { perfil, loginVisivel, setLoginVisivel, perfilVisivel, setPerfilVisivel } = useContext(AppContext);

  const ocultarLogin = () => {
    setLoginVisivel(!loginVisivel);
  };

  const ocultarPerfil = () => {
    setPerfilVisivel(!perfilVisivel);
  };

  return (
    <div className="container">
      {(!!perfil.id && 
        <button type="button" className="botao_perfil" onClick={ocultarPerfil}><FaUser /></button>) ||
        <button type="button" className="botao_login" onClick={ocultarLogin}><SlLogin /></button>}
    </div>
  );
}
export default BotaoLogin;


