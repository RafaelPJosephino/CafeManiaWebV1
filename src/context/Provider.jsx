import React, { useState } from 'react';
import AppContext from './AppContext';
import propTypes from 'prop-types';

function Provider({ children }){

  const [produtos, setProdutos] = useState([]);
  const [carregamento, setCarregamento] = useState(true);

  const value = {
    produtos,
    setProdutos,
    carregamento,
    setCarregamento,
  };

  return(
    <AppContext.Provider value = { value }>
      {children}
    </AppContext.Provider>
  );
}
export default Provider;

Provider.propTypes = {
  children: propTypes.any,
}.isRequired;
