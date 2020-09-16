import React, { Component } from 'react';
import {useSelector} from 'react-redux';

export default function Grid() {
  const detalhes = useSelector(state => state.data[0]);
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
            {
            detalhes.venda.map(ven => (
              <tr key={ven._id}>
                <td>{ven.vitrine}</td>
                <td>{ven.valor}</td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}