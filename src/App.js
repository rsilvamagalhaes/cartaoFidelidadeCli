import React from 'react';

import Routes from './routes'

import Header from './components/header';
import NavBar from './components/navBar';


const App = () => (
  <div className="container">
    <NavBar/>
    <Header/>

    <Routes/>
  </div>
);

export default App;
