import '../components/template/dependencias'
import React from 'react'

import Header from '../components/header'
import Main from '../components/main'
import Footer from '../components/footer'

export default props => (
  <div className="wrapper">
    <Header/>
    <Main/>
    <Footer/>
  </div>
)