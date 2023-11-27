const fetchProdutos = async ()=> {
  /*const response = await fetch('http://localhost/41000');
  const data = response.json();
  return data.content;*/
  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=iphone`);
  const data = await response.json();
  return data.results;
};
export default fetchProdutos;
