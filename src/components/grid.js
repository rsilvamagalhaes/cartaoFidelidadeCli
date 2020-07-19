import React, { Component } from 'react';
import api from './../services/api';
import MessageErro from './messageErro';
import MessageSucesso from './messageSucesso';

export default class Grid extends Component {

  render() {
    return (
      <div className="box box-info">
        <div className="box-header with-border">
          <h3 className="box-title">Últimas Compras</h3>
        </div>

        <div className="row">
          <div className="col-sm-6">
              <div className="dataTables_length" id="example1_length">
                <label>
                  <label>Search: 
                    <select name="example1_length" aria-controls="example1" className="form-control input-sm">
                      <option value="10">10</option>
                      <option value="25">25</option>
                      <option value="50">50</option>
                      <option value="100">100</option>
                    </select>
                  </label>
                </label>
              </div>
          </div>
          <div className="col-sm-6">
              <div id="example1_filter" className="dataTables_filter">
                <label>Search:
                <input type="search" className="form-control input-sm" placeholder="" aria-controls="example1"/>
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
                <tr>
                  <td>2020-09</td>
                  <td>250,21</td>
                </tr>
                <tr>
                  <td>2020-10</td>
                  <td>250,21</td>
                </tr>
                <tr>
                  <td>2020-11</td>
                  <td>250,21</td>
                </tr>
                <tr>
                  <td>2020-12</td>
                  <td>250,21</td>
                </tr>
                <tr>
                  <td>2021-01</td>
                  <td>250,21</td>
                </tr>
                <tr>
                  <td>2021-02</td>
                  <td>250,22</td>
                </tr>
                <tr>
                  <td>2021-03</td>
                  <td>222,21</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>
    );
  }
}