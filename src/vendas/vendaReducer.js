import {createStore} from 'redux'

const INITIAL_STATE = {data: []}

function vendasPorTelefone (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'VENDAS_POR_TELEFONE':
            console.log(action.data);
            return { ...state, data: [...state.data, action.data] }
        case 'VENDAS_CADASTRO':
                console.log(action.data);
                return { ...state, vendaCadastro: [...state.vendaCadastro, action.data] }
        default:
            return state
    }
}

const store = createStore(vendasPorTelefone);

export default store;