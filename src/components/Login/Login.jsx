import React, { useContext, useState } from 'react';
import "./Login.css";
import AppContext from '../../context/AppContext';
import fetchLoginUsuario from '../../api/fetchLoginUsuario';
import fetchRegistrarUsuario from '../../api/fetchRegistrarUsuario';
function Login() {

  const { setLogin, setCarregamento, login, setLoginVisivel, loginVisivel, setPerfil } = useContext(AppContext);
  const [trocarCadastro, setTrocarCadastro] = useState(true);

  const valorinput = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
  const OcultarCadastro = () => {
    setTrocarCadastro(!trocarCadastro);
  };
  const ocultarLogin = () => {
    setLoginVisivel(!loginVisivel);
  };

  const logarConta = () => {
    setCarregamento(true);
    if (!login.password.length) alert("Campos obrigatorios(*)");
    fetchLoginUsuario(login)
      .then((reponse) => { setPerfil(reponse); ocultarLogin(); })
      .finally(() => setCarregamento(false));
  };

  const registrarConta = () => {
    if (!login.password.length || !login.confirmar.length || !login.email.length)
      alert("Campos obrigatorios(*)");
    if (login.password != login.confirmar) {
      alert("As senhas digitadas não coincidem");
    } else {
      setCarregamento(true);
      fetchRegistrarUsuario(login)
        .then((response) => {
          OcultarCadastro();
          if (response.status == 200) alert(`Conta Criada`);
        })
        .catch(error => console.error(error)).finally(() => setCarregamento(false));
    }
  };

  return (
    <div className={`login ${loginVisivel ? 'login-ativo' : ''} `}>
      <form className="menu-login">
        <input name="username" hidden={trocarCadastro} placeholder="Usuario" className="input-login" type="text" onChange={valorinput}></input>
        <input name="email" placeholder="Email*" className="input-login" type="email" onChange={valorinput}></input>
        <input name="password" placeholder="Senha*" className="input-login" type="password" onChange={valorinput}></input>
        <input name="confirmar" hidden={trocarCadastro} placeholder="Confirmar senha*" className="input-login" type="password" onChange={valorinput}></input>
      </form>
      <div className="container-login">
        <button type="button" className="botao-registar" hidden={trocarCadastro} onClick={registrarConta} >Registrar</button>
        <button type="button" className="botao-login" hidden={!trocarCadastro} onClick={logarConta}>login</button>
        <button type="button" className="trocar-cadastro" onClick={OcultarCadastro}>{trocarCadastro ? "Me registrar" : "ja tenho conta"}</button>
      </div>

    </div >
  );
}

export default Login;
