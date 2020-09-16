import React from "react";
import { useForm } from 'react-hook-form/dist/index.ie11'

import ContentHeader from '../components/contentHeader'
import Content from '../components/content'
import { getListVenda } from '../vendas/apiAction'
import {submitConsultarMinhasEstrelasAction} from '../vendas/consultarMinhasEstrelasAction'
import { useDispatch } from 'react-redux';


import { Redirect } from 'react-router-dom'


import { useHistory } from "react-router-dom";
export default function ConsultarMinhasEstrelasForm() {

  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();
 
  const onSubmit = data => {
    getListVenda(dispatch, data.telefone);
  };

  return (
    <div>
      <ContentHeader title='Seja Bem Vindo' small='Informe o telefone e saiba quantas estrelas você tem.'/>
      <Content>
        <form role="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="box-body">
            <div className="input-group input-group-lg col-xs-8 col-sm-8 col-md-3">
                    <input id="telefone" value="19991289211" name="telefone" className="form-control input-lg" placeholder="(99) 9999-9999" type="text" ref={register}/> 
                    <span className="input-group-btn">
                      <button type="submit" className="btn btn-info btn-flat">Ver!</button>
                    </span>
              </div>
            </div>
          </form>
      </Content>
    </div>
  )
}
