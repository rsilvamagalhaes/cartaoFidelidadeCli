
import React, { Component } from 'react';

class Estrelas extends Component {

    render() {
        const valores = [1, 2, 3, 4, 5];
        return (
            <div>
                {(() => {
                    const options = [];
                    // options.push(<h1>);
                    for (let i = 0; i <= 30; i++) {
                        options.push(<span className="badge badge-light"><i className="w3-xlarge fa fa-star-o"></i></span>);
                    }
                    // options.push(</h1>);
                    options.push(<span className="badge badge-light">... 30</span>);
                    return options;
                })()}
            </div>
        );
    }
}

export default Estrelas;