import React from 'react';

const NavBar = () => (
    <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" source="http:localhost:3000">Cartão Fidelidade</a>
        <form className="form-inline">
            <input className="form-control mr-sm-2" type="search" placeholder="Telefone" aria-label="Telefone"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Procurar</button>
        </form>
    </nav>
);
export default NavBar;