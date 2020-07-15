import React, { Component } from 'react';
import api from './../services/api';
import MessageErro from './messageErro';
import MessageSucesso from './messageSucesso';

export default class Grid extends Component {
    // state = {
    //     vendas: [],
    //     vendasInfo: {},
    //     page: 1,
    //     telefone: '',
    //     sucesso: '',
    // }

    // componentDidMount() {
    //     //TODO: user digitara
    //     this.setState({ 'telefone': '19991289965' });
    //     this.carregarVendas();
    // }

    // carregarVendas = async (page) => {
    //     if (!page) page = 1;

    //     const response = await api.get('/venda/' + this.state.telefone + '?page=' + page);

    //     const { docs, ...vendasInfo } = response.data;

    //     this.setState({ vendas: docs, vendasInfo, page });
    // }

    // anterior = () => {
    //     const { page, vendasInfo } = this.state;

    //     if (page === 1) return;
    //     const pageNumber = page - 1;

    //     this.carregarVendas(pageNumber);
    // }

    // proximo = () => {
    //     const { page, vendasInfo } = this.state;

    //     if (page === vendasInfo.pages) return;

    //     const pageNumber = page + 1;

    //     this.carregarVendas(pageNumber);

    //     console.log(this.state.page === 1);
    // }
    
    
    // remover = (idVenda) => {
    //     console.log("Remver!! -->> " + idVenda);
    //     api.delete('/venda/' + idVenda)
    //   .then((response) => {
    //     if (response.error) {
    //         this.setState({sucesso: false});
    //         console.log("Ocorreu erro " + response.error);
    //     } else {
    //         this.setState({sucesso: true});
    //         this.carregarVendas(this.state.page);
    //     }
    //   });
    // }

    // redirecionar = (idVenda) => {
    //     console.log("Alterar --> " + idVenda);
    //     window.location = "/venda/" + idVenda;
    // }

    // proximoNumero = (page) => {
    //     this.carregarVendas(page);
    // }

    render() {
        return (
            <div>

                {this.state.sucesso === true ? <MessageSucesso /> : null}
                {this.state.sucesso === false ? <MessageErro /> : null}
                
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th className="col-md-2" scope="co3">Descrição</th>
                            <th className="col-md-1" scope="co2">Valor</th>
                            <th className="col-md-1" scope="co4">Estrelas</th>
                            <th className="col-md-1" scope="co5"></th>
                            <th className="col-md-1" scope="co6"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.vendas.map(venda => (
                            <tr key={venda._id}>
                                <td>{venda.descricao}</td>
                                <td>{venda.valor}</td>
                                <td>
                                    <h3><span className="badge badge-light">{Math.floor(venda.valor / 75)} <i className="w3-xlarge fa fa-star"></i></span></h3>
                                </td>
                                <td>
                                    <div>
                                        <i key={'alterar' + venda._id} className="w3-xlarge fa fa-edit" onClick={()=>this.redirecionar(venda._id)}/>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <i key={'remover' + venda._id} className="w3-xlarge fa fa-trash" style={{color:'red'}} onClick={()=>this.remover(venda._id)}></i>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <nav>
                    <ul className="pagination justify-content-center">
                        <li className="page-item">
                            <a className="page-link" onClick={this.anterior} tabIndex="-1" aria-disabled="{this.state.page === 1}">{'<'}</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" onClick={this.proximo} aria-disabled="{this.state.page === this.state.vendasInfo.pages}">{'>'}</a>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}