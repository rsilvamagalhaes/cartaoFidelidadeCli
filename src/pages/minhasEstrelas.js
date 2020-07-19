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
            <Grid/>
        </Content>
      </div>
    )
  }
}

export default MinhasEstrelas