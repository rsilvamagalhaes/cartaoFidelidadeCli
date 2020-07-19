import React from 'react'

export default props => (
    <div className="box box-info">
        <div className="box-header with-border">
            <h1>{props.title}</h1>
            <h1><small>{props.small}</small></h1>
        </div>
    </div>
)
