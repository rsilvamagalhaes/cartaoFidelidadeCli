import React, { Component } from 'react';
import api from './../services/api';
import MessageErro from './messageErro';
import MessageSucesso from './messageSucesso';
import { withRouter } from 'react-router-dom'

class FormVenda extends Component {
  // state = {
  //   _id: '',
  //   telefone: '',
  //   nome: '',
  //   valor: '',
  //   descricao: '',
  //   sucesso: '',
  // }

  // async componentDidMount() {
  //   const { idVenda } = this.props.match.params;
  //   const resp = await api.get(`/venda/${idVenda}`);
  //   const doc = resp.data.docs[0];
  //   if (doc) {
  //     this.setState({ '_id': doc._id, 'telefone': doc.telefone, 'nome': doc.nome, 'valor': doc.valor, 'descricao': doc.descricao, 'sucesso': '' });
  //   }
  // }

  // change = e => {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   });
  // }

  // onSubmit = () => {
  //   console.log("Salvando os registros " + this.state.descricao);
  //   debugger;
  //   if (!this.state._id) {
  //     var sucesso;
  //     api.post('/venda', { 'telefone': this.state.telefone, 'nome': this.state.nome, 'valor': this.state.valor, 'descricao': this.state.descricao })
  //       .then((response) => {
  //         if (response.error) {
  //           console.error(response.error);
  //           this.setState({
  //             sucesso: false,
  //           });
  //         } else {
  //           this.setState({
  //             telefone: '',
  //             nome: '',
  //             valor: '',
  //             descricao: '',
  //             sucesso: true,
  //           });
  //         }
  //       });
  //   } else {
  //     var sucesso;
  //     api.put('/venda/'+this.state._id, { 'telefone': this.state.telefone, 'nome': this.state.nome, 'valor': this.state.valor, 'descricao': this.state.descricao })
  //       .then((response) => {
  //         if (response.error) {
  //           console.error(response.error);
  //           this.setState({
  //             sucesso: false,
  //           });
  //         } else {
  //           this.setState({
  //             sucesso: true,
  //           });
  //         }
  //       });
  //   }
  // }

  render() {
    return (
      <form>

        {this.state.sucesso === true ? <MessageSucesso /> : null}
        {this.state.sucesso === false ? <MessageErro /> : null}

        <div className="form-group">
          <input id="id" type="hidden" value={this.state._id} />
          <label htmlFor="telefoneId">Telefone</label>
          <input type="text" className="form-control" name="telefone"
            value={this.state.telefone} onChange={e => this.setState({ telefone: e.target.value })}
            id="telefoneId" placeholder="Telefone cliente" />
        </div>
        <div className="form-group">
          <label htmlFor="nomeId">Nome</label>
          <input type="text" className="form-control" name="nome"
            value={this.state.nome} onChange={e => this.setState({ nome: e.target.value })}
            id="nomeId" placeholder="Nome do(s) produto(s)" />
        </div>
        <div className="form-group">
          <label htmlFor="valorId">Valor</label>
          <input type="text" className="form-control" name="valor"
            value={this.state.valor} onChange={e => this.setState({ valor: e.target.value })}
            id="valorId" placeholder="Valor total" />
        </div>
        <div className="form-group">
          <label htmlFor="descricaoId">Descrição dos produtos</label>
          <textarea className="form-control" name="descricao"
            value={this.state.descricao} onChange={e => this.setState({ descricao: e.target.value })}
            id="descricaoId" rows="3"></textarea>
        </div>
        <button type="button" onClick={() => this.onSubmit()} className="btn btn-primary btn-lg btn-block">Salvar Venda</button>
      </form>);
  }
}

export default withRouter(FormVenda)