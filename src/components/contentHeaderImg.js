import React from 'react'

export default props => (
     <div className='mb-2'>
      <div className='row'>
        <div className='col-md-2 bg-aqua-active'>
        <img src='https://secure.gravatar.com/avatar/de9b11d0f9c0569ba917393ed5e5b3ab?s=109&r=g&d=mm' 
          className='img-circle'></img>
        </div>
        <div className='col-md-4 bg-aqua-active'>
          <div className='card-body'>
          <h3 className="widget-user-username">(19)99128-9977</h3>
          <h3 className="widget-user-username">Olá Maria da Silva</h3>
          <h5 className="widget-user-desc">Você possui 38 <i className='w3-xlarge fa fa-star-o'></i></h5>
          </div>
        </div>
      </div>
    </div>
)
