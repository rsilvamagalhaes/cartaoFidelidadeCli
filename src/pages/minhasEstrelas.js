import React, { Component } from 'react'
import ContentHeader from '../components/contentHeader'
import ContentProfile from '../components/contentHeaderImg'
import Content from '../components/content'
import Grid from '../components/grid'

class MinhasEstrelas extends Component {
  render() {
    return (
      <div>
        <ContentProfile/>
        <Content>
          
          <h2>Últimas Compras</h2>
          <Grid/>
          

        </Content>
      </div>
    )
  }
}

export default MinhasEstrelas