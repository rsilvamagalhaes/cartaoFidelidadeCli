import axios from 'axios'
const BASE_URL = 'http://localhost:3001/api';


// export function getListVenda(telefone) {
//     console.info("Chamando o serviço")
//     const request = axios.get(`${BASE_URL}/estrelas/` + telefone)
//     .then(resp => {
//         toastr.success('Sucesso', 'Operação Realizada com sucesso.')
//         console.info("request  " + JSON.stringify(request))
//         return resp;
//     })
//     .catch(e => {
//         console.error(e.response)
//     })
// }

export function getListVenda(dispatch, telefone) {
    return fetch(`${BASE_URL}/estrelas/` + telefone)
      .then(res => res.json())
      .then(
        data => dispatch({ type: 'VENDAS_POR_TELEFONE', data }),
        err => dispatch({ type: 'VENDAS_POR_TELEFONE', err }) 
      );
  }