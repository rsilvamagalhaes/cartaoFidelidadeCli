import React from 'react';

import Grid from './../components/grid'
import Estrelas from './../components/estrelas'
import TituloLista from './../components/tituloLista'

const ListaVenda = () => (
  <div className="container">
    <TituloLista/>
    <Estrelas/>
    <Grid/>
  </div>
);

export default ListaVenda;

