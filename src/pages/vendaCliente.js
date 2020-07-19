import React, { Component } from 'react'
import Grid from '../components/grid'
import Content from '../components/content'


class VendaCliente extends Component {
  render() {
    return (
      <div>
        <Content>
        <div className="box box-primary">
            <div className="box-header with-border">
              <h3 className="box-title">Vender</h3>
            </div>
            <form role="form">
              <div className="box-body">
                <div className="form-group">
                  <input type="text" className="form-control input-lg" id="telefone" placeholder="(99)99999-9999"/>
                </div>
                <div className="form-group">
                  <label>Nome</label>
                  <input type="text" className="form-control" id="nome" placeholder="Nome"/>
                </div>
                <div className="form-group">
                  <label>Vitrine</label>
                  <input type="text" className="form-control" id="vitrine" placeholder="2020-07"/>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="col-xs-3">
                      <label>Valor</label>
                      <input type="text" className="form-control " id="valor" placeholder="0,00"/>
                    </div>
                    <div>                        
                      <input type="checkbox"/>Dobro de Estrelas?
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

          <Grid/>
        </Content>
      </div>
    )
  }
}

export default VendaCliente