import { combineReducers } from 'redux'

import VendaReducer from '../vendas/vendaReducer'

const rootReducer = combineReducers({
    vendaReducer : VendaReducer
})

export default rootReducer
