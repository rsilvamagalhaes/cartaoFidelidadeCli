import React, { Component } from 'react';
import {useSelector} from 'react-redux';

export default function contentHeaderImg() {
  const detalhes = useSelector(state => state.data[0]);
  const cliente = detalhes.cliente;
  return (
     <div className='mb-2'>
      <div className='row'>
        <div className='col-md-2 bg-aqua-active'>
        <img src='https://secure.gravatar.com/avatar/de9b11d0f9c0569ba917393ed5e5b3ab?s=109&r=g&d=mm' 
          className='img-circle'></img>
        </div>
        <div className='col-md-4 bg-aqua-active'>
          <div className='card-body'>
          <h3 className="widget-user-username">{cliente.telefone}</h3>
          <h3 className="widget-user-username">{cliente.nome}</h3>
          <h5 className="widget-user-desc">Você possui {cliente.qtdEstrelas} <i className='w3-xlarge fa fa-star-o'></i></h5>
          </div>
        </div>
      </div>
    </div>
  );
}