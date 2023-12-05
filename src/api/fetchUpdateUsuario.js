const fetchUpdateUsuario = async (usuario) => {

  const url = 'http://localhost:5280/api/User/UpdateUser';
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(usuario)
  });
  if (response.status != 200) alert(`Algum erro ocorreu, Status:${response.status}, descricão:${response.statusText}`);
  return response;
};


export default fetchUpdateUsuario;
