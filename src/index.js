import React from 'react'
import ReactDOM from 'react-dom'
//import * as serviceWorker from './serviceWorker'

//import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

//import promise from 'redux-promise'
import App from './main/App'
//import reducers from './main/reducers'
import store from './vendas/vendaReducer'

// const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
//                 && window.__REDUX_DEVTOOLS_EXTENSION__()
// const store = applyMiddleware(promise)(createStore)(reducers, devTools)
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
, document.getElementById('app'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister()
