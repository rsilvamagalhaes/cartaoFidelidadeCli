import React from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import ListaVenda from './pages/listaVenda';
import FormVenda from './pages/venda';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={ListaVenda}></Route>
            <Route path="/venda/:idVenda" component={FormVenda}></Route>
        </Switch>
    </BrowserRouter>

)

export default Routes