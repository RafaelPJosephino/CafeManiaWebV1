const fetchProdutos = async ()=> {
  const response =  await fetch('http://localhost:5280/api/Products/getAll');
  if (response.status != 200) alert(`Algum erro ocorreu, Status:${response.status}, descricão:${response.statusText} , Error: ${response.Error} `);
  return response.json();
};
export default fetchProdutos;
