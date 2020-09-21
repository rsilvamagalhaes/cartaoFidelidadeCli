import axios from 'axios'
const BASE_URL = 'http://localhost:3001/api';

export function criarVenda(dispatch, data) {
  axios.post(`${BASE_URL}/venda/`, data)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });


    // return fetch(`${BASE_URL}/venda/` + data.telefone)
    //   .then(res => res.json())
    //   .then(
    //     data => dispatch({ type: 'VENDAS_CADASTRO', data }),
    //     err => dispatch({ type: 'VENDAS_CADASTRO', err }),
    //   ).then(
    //     // function() {
    //     //   window.location.href = 'http://localhost:3000/#/estrelas/' + telefone;
    //     // }
    //   );
}