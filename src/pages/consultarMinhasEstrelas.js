import React, { Component } from 'react'
import ContentHeader from '../components/contentHeader'
import Content from '../components/content'
import { divide } from 'lodash'

class ConsultarMinhasEstrelas extends Component {
  render() {
    return (
      <div>
        <ContentHeader title='Seja Bem Vindo' small='Informe o telefone e saiba quantas estrelas você tem.'/>
        <Content>
          <form role="form">
              <div class="box-body">
              <div className="input-group input-group-lg col-xs-8 col-sm-8 col-md-3">
                      <input type="text" className="form-control input-lg" placeholder="(99) 9999-9999"/>
                      <span className="input-group-btn">
                        <button type="button" className="btn btn-info btn-flat">Ver!</button>
                      </span>
                </div>
              </div>
            </form>
        </Content>
      </div>
    )
  }
}

export default ConsultarMinhasEstrelas