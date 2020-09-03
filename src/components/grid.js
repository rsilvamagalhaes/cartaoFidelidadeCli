import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
//import {connect} from 'react-redux'
import {getListVenda} from '../vendas/apiAction'

class Grid extends Component {

  componentWillMount() {
    this.props.getListVenda()
  }
  
  renderRows() {
    const list = this.props.list || []
    return list.map(venda => (
      <tr key={venda._id}>
        <td>{venda.vitrine}</td>
        <td>{venda.valor}</td>
      </tr>
    ))
  }
  
  render() {
    console.log(this.props.list)
    return (
      <div className="box box-info">
        <div className="box-header with-border">
          <h3 className="box-title">Últimas Compras</h3>
        </div>

        <div className="row box-body">
          <div className="col-sm-6">
              <div id="filter" className="dataTables_filter">
                <label> Vitrine
                <div className="input-group input-group-sm">
                <input type="text" className="form-control"/>
                    <span className="input-group-btn ">
                      <button type="button" className="btn btn-info btn-flat">Filtrar</button>
                    </span>
                </div>
                </label>
              </div>
          </div>
        </div>

        <div className="box-body">
          <div className="table-responsive">
            <table className="table no-margin">
              <thead>
                <tr>
                  <th>Vitrine</th>
                  <th>Valor</th>
                </tr>
              </thead>
              <tbody>
                {this.renderRows()}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    );
  }
}
console.info("GRID " + getListVenda);
//const mapStateToProps = state => ({list: state.venda })
//const mapDispatchToProps = dispatch => bindActionCreators({getListVenda}, dispatch)
//export default connect(mapStateToProps, mapDispatchToProps)(Grid)