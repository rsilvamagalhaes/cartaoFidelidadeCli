import React from 'react'

import { Router, Route, Redirect, hashHistory } from 'react-router'

import ConsultarMinhasEstrelasForm from './pages/consultarMinhasEstrelasForm'
import MinhasEstrelas from './pages/minhasEstrelas'
import VendaCliente from './pages/vendaCliente'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={ConsultarMinhasEstrelasForm}/>
        <Route path='/estrelas/:telefone' component={MinhasEstrelas}/>
        <Route path='/venda' component={VendaCliente}/>
        <Redirect from='*' to='/' />
    </Router>
)