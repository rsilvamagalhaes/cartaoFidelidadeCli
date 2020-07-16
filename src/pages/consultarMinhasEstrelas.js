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
          <form className="form-inline">
              <input className="form-control mr-lg-1" type="search" placeholder="(99)99999-9999" aria-label="Telefone"/>
              <button className="btn btn-success block-button" type="submit">Ver <i className="fa fa-star"></i></button>
          </form>
        </Content>
      </div>
    )
  }
}

export default ConsultarMinhasEstrelas