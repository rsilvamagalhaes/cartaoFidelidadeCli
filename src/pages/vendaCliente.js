import React from "react";
import { useForm } from 'react-hook-form/dist/index.ie11'

import ContentHeader from '../components/contentHeader'
import Content from '../components/content'
import { criarVenda } from '../vendas/criarVenda'
import { getListVenda } from '../vendas/listarVendas'
import { useDispatch } from 'react-redux';

export default function VendaCliente() {

  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
 
  const onSubmit = data => {
    //getListVenda(dispatch, data.telefone, false);
    criarVenda(dispatch, data);
    console.info(data)
  };


  return (
    <div>
      <Content>
      <form role="form" onSubmit={handleSubmit(onSubmit)}>        
      <div className="box box-primary">
          <div className="box-header with-border">
            <h3 className="box-title">Vender</h3>
          </div>
          <form role="form">
            <div className="box-body">
              <div className="form-group">
                <input type="text" className="form-control input-lg" name="telefone" id="telefone" placeholder="(99)99999-9999"  ref={register}/>
              </div>
              <div className="form-group">
                <label>Nome</label>
                <input type="text" className="form-control" id="nome" name="nome" placeholder="Nome" ref={register}/>
              </div>
              <div className="form-group">
                <label>Vitrine</label>
                <input type="text" className="form-control" id="vitrine" name="vitrine" placeholder="2020-07" ref={register}/>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="col-xs-3">
                    <label>Valor</label>
                    <input type="text" className="form-control " id="valor" name="valor" placeholder="0,00" ref={register}/>
                  </div>
                  <div>                        
                    <input type="checkbox" ref={register} name="dobroEstrela"/>Dobro de Estrelas?
                  </div>
                </div>
              </div>
            </div>
            <div className="box-footer">
              <button type="submit" className="btn btn-success">Salvar</button>
              <button type="submit" className="btn btn-sm btn-default btn-flat pull-right">Cancelar</button>
            </div>
          </form>
        </div>
        </form>

        grid aqui

        </Content>
      </div>
    )
}