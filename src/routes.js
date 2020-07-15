import React from 'react'

import { Router, Route, Redirect, hashHistory } from 'react-router'

import ConsultarMinhasEstrelas from './pages/consultarMinhasEstrelas'
import MinhasEstrelas from './pages/minhasEstrelas'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={ConsultarMinhasEstrelas}/>
        <Route path='/estrelas/:telefone' component={MinhasEstrelas}/>
        <Redirect from='*' to='/' />
    </Router>
)