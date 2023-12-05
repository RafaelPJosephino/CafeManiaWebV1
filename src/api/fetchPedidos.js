const fetchPedidos = async (Iduser)=> {
  const url = `http://localhost:5280/api/order/GetAllPerUser?iduser=${Iduser}`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  });
  if (response.status != 200) alert(`Algum erro ocorreu, Status:${response.status}, descricão:${response.statusText}`);
  return response.json();
  
 
};
export default fetchPedidos;

