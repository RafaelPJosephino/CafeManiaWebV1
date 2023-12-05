import React, { useState } from 'react';
import AppContext from './AppContext';
import propTypes from 'prop-types';

function Provider({ children }) {

  const [produtos, setProdutos] = useState([]);
  const [carregamento, setCarregamento] = useState(true);
  
  const [carrinhoItens, setCarrinhoItens] = useState([]);
  const [carrinhoVisivel, setCarrinhoVisivel] = useState(false);

  const [login, setLogin] = useState({ "id": 0, "name": "" ,"username": "", "email": "", "password": "", "isAdmin": false, "street": "", "city": "", "state": "", "zipCode": "" });
  const [loginVisivel, setLoginVisivel] = useState(false);
  
  const [perfil, setPerfil] = useState({ "id": 0, "name": "" ,"username": "", "email": "", "password": "", "isAdmin": false, "street": "", "city": "", "state": "", "zipCode": "" });
  const [perfilVisivel, setPerfilVisivel] = useState(false);
  
  const [pedidos, setPedidos ] = useState([]);
  const [pedidosVisivel, setPedidosVisivel ] = useState(false);

  const [gerencialVisivel,setGerencialVisivel ] = useState(false);
  const [produto, setProduto] = useState({"id": 0,"image": "","title": "","description": "","price": 0});





  const value = {
    produtos,
    setProdutos,
    carregamento,
    setCarregamento,
    carrinhoItens,
    setCarrinhoItens,
    carrinhoVisivel,
    setCarrinhoVisivel,
    login,
    setLogin,
    loginVisivel,
    setLoginVisivel,
    perfil,
    setPerfil,
    perfilVisivel, 
    setPerfilVisivel,
    pedidos,
    setPedidos,
    pedidosVisivel,
    setPedidosVisivel,
    gerencialVisivel,
    setGerencialVisivel,
    produto, 
    setProduto,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}
export default Provider;

Provider.propTypes = {
  children: propTypes.any,
}.isRequired;
