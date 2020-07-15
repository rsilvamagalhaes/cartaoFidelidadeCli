import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

class Header extends Component {
    // state = {
    //     nomeCliente : '',
    // }
    // async componentDidMount() {
    // }

    render() {
        this.state.nomeCliente = "Maria";
        return (
            <div className="mx-auto" style={{ justifyContent: 'center', paddingTop: '20px', paddingBottom: '20px', display: 'flex' }}>
                <h2>Listagem de compras.</h2>
            </div>);
    }
}

export default Header;