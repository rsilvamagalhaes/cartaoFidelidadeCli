import axios from 'axios'
const BASE_URL = 'http://localhost:3001/api';

export function getListVenda(dispatch, telefone, redirect) {
    return fetch(`${BASE_URL}/estrelas/` + telefone)
      .then(res => res.json())
      .then(
        data => dispatch({ type: 'VENDAS_POR_TELEFONE', data }),
        err => dispatch({ type: 'VENDAS_POR_TELEFONE', err }),
      ).then(
        function() {
          if (redirect) {
            window.location.href = 'http://localhost:3000/#/estrelas/' + telefone;
          }
        }
      );
}