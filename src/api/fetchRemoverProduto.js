const fetchRemoverProduto = async (IdProduto)=> {
  const url = `http://localhost:5280/api/Products/RemoverProduct?idproduct=${IdProduto}`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  });
  if (response.status != 200) alert(`Algum erro ocorreu, Status:${response.status}, descricão:${response.statusText}`);
  return response;
  
 
};
export default fetchRemoverProduto;

