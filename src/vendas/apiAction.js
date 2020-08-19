import axios from 'axios'
const BASE_URL = 'http://localhost:3001/api';


export function getListVenda() {
    console.info("Chamando o serviço")
    const request = axios.get(`${BASE_URL}/estrelas/19991289211`)
    //const request = axios.get(`${BASE_URL}/teste`)
    .then(resp => {
        toastr.success('Sucesso', 'Operação Realizada com sucesso.')
        dispatch(init())
    })
    .catch(e => {
        e.response.data.errors.forEach(error => toastr.error('Erro', error))
    })

    console.info("request  " + request)
    console.info("request  " + JSON.stringify(request))
    return {
        type: 'VENDAS_POR_TELEFONE',
        payload: request
    }
}