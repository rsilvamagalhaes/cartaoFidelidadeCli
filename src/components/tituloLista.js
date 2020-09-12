import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import {useSelector} from 'react-redux';

export default function Header() {
    const detalhes = useSelector(state => state.detalhes);

        this.state.nomeCliente = "Maria";
        return (
            <div className="mx-auto" style={{ justifyContent: 'center', paddingTop: '20px', paddingBottom: '20px', display: 'flex' }}>
                <h2>Listagem de compras.</h2>
            </div>
        );
}
