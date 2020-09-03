import axios from 'axios'
const BASE_URL = 'http://localhost:3001/api';


export function getListVenda(telefone) {
    console.info("Chamando o serviço")
    const request = axios.get(`${BASE_URL}/estrelas/` + telefone)
    .then(resp => {
        toastr.success('Sucesso', 'Operação Realizada com sucesso.')
    })
    .catch(e => {
        console.error(e.response)
    })

    console.info("request  " + request)
    console.info("request  " + JSON.stringify(request))
    return {
        type: 'VENDAS_POR_TELEFONE',
        payload: request
    }
}