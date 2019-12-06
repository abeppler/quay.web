import Axios from 'axios';

const urlBase = 'http://localhost:5000/cliente';

export const login = cliente => {
  return Axios
    .post(`${urlBase}/login`, cliente)
    .then(x => alert('Requisição de login efetuado com sucesso!'))
    .catch(ex => alert(ex.response.data));
}

export const cadastro = cliente => {
  return Axios
    .post(`${urlBase}/cadastro`, cliente)
    .then(x => alert('Requisição de cadastro efetuado com sucesso!'))
    .catch(ex => alert(ex.response.data));
}