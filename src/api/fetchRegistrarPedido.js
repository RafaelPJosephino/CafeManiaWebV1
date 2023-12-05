const fetchRegistrarPedido = async (dto)=> {
  const url = 'http://localhost:5280/api/order/RegisterOrder';
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dto)
  });
  if (response.status != 200) alert(`Algum erro ocorreu, Status:${response.status}, descricão:${response.statusText}`);
  return response;
  
 
};
export default fetchRegistrarPedido;
