import React from 'react';

const MessageSucesso = () => (
    <div className="alert alert-success alert-dismissible fade show" role="alert">
        Operação realizada com sucesso.
    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
);

export default MessageSucesso;