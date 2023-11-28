const fetchProdutos = async ()=> {
  /*const response = await fetch('http://localhost/41000');
  const data = response.json();
  return data.content;*/
  const response =  await fetch('http://localhost:5280/api/Products/getAll');
  return response.json();
  
};
export default fetchProdutos;
