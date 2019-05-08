import React from 'react';

const MessageErro = () => (
    <div className="alert alert-error alert-dismissible fade show" role="alert">
        Operação com erro.
  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
);

export default MessageErro;