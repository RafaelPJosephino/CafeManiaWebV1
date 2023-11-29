const fetchProdutos = async ()=> {
  const response =  await fetch('http://localhost:5280/api/Products/getAll');
  return response.json();
  
};
export default fetchProdutos;
