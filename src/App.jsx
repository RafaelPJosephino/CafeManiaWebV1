import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Produtos from './components/Produtos/Produtos';
import Provider from './context/Provider';
import Carrinho from './components/Carrinho/Carrinho';

function App() {
  return (
    <Provider>
      <Navbar />
      <Produtos/>
      <Carrinho/>
    </Provider>
  );
}

export default App;
