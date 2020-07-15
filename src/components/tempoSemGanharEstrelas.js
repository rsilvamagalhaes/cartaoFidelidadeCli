
import React, { Component } from 'react';

class Estrelas extends Component {

    componentDidMount() {

    }

    render() {
        
        let dias = 30;
        return (
            <div>
                    Faz {dias} dias que você não ganha nenhuma estrela 😯<br/>
                    <a href="#" class="badge badge-info">Clique aqui</a> para você ver o seu histórico.
            </div>
        );
    }
}

export default Estrelas;