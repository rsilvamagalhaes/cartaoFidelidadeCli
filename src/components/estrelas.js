
import React, { Component } from 'react';

class Estrelas extends Component {

    componentDidMount() {

    }

    render() {
        
        let valores = 30;
        return (
            <div>
                    Você possui
                {(() => {
                        const options = [];
                        options.push(<span className="badge badge-light">{valores} <i className="w3-xlarge fa fa-star-o fa-4x"></i></span>);
                        return options;
                    })()}
                
            </div>
        );
    }
}

export default Estrelas;