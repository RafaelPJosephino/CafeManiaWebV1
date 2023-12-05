import React  from 'react';
import Navbar from './components/Navbar/Navbar';
import Produtos from './components/Produtos/Produtos';
import Provider from './context/Provider';
import Carrinho from './components/Carrinho/Carrinho';
import Pedidos from './components/Pedidos/Pedidos';
import Login from './components/Login/Login';
import Perfil from './components/Perfil/Perfil';
import Carregamento from './components/Carregamento/Carregamento';
import Gerencial from './components/Gerencial/Gerencial';

function App() {
  return (
    <Provider>
      <Navbar />
      <Carregamento />
      <Login />
      <Perfil />
      <Produtos />
      <Carrinho />
      <Pedidos />
      <Gerencial/>
    </Provider>
  );
}

export default App;
