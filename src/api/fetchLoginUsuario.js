const fetchLoginUsuario = async (usuario) => {
  const url = 'http://localhost:5280/api/User/LoginUser';
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(usuario)
  });
  if (response.status == 204) alert(`Usuario nao encontrado`);
  if (response.status != 200 && response.status != 204) alert(`Algum erro ocorreu, Status:${response.status}, descricão:${response.statusText}`);
  return response.json();
};


export default fetchLoginUsuario;
