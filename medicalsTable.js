

import React, { Component } from 'react';
import { render } from 'react-dom';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search, CSVExport } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';

const { SearchBar, ClearSearchButton } = Search;
const { ExportCSVButton } = CSVExport;

const columns = [{
  dataField: 'id',
  text: 'Medecine Id'
}, {
  dataField: 'name',
  text: 'Medecine Name'
}, {
  dataField: 'expireDate',
  text: 'ExpireDate'
},{
  dataField: 'stack',
  text: 'Stock'
}];

const products = [ {id : 1, name: "Test1", expireDate: '12/20/2020', stack: 200 },
{id : 2, name: "Test1", expireDate: '12/20/2020', stack: 200 },
{id : 3, name: "Test1", expireDate: '12/20/2020', stack: 400 },
{id : 4, name: "Test1", expireDate: '12/20/2020', stack: 300 },
{id : 5, name: "Test1", expireDate: '12/20/2020', stack: 200 },
{id : 6, name: "Test1", expireDate: '12/20/2020', stack: 200 },
{id : 7, name: "Test2", expireDate: '12/20/2021', stack: 200 },
{id : 8, name: "Test1", expireDate: '12/20/2020', stack: 200 },
{id : 9, name: "Test1", expireDate: '12/20/2020', stack: 200 },
{id : 10, name: "Test1", expireDate: '12/20/2020', stack: 200 },
{id : 11, name: "Test1", expireDate: '12/20/2020', stack: 800 },
{id : 12, name: "Test1", expireDate: '12/20/2020', stack: 200 },
{id : 13, name: "Test1", expireDate: '12/20/2020', stack: 200 },
{id : 14, name: "Test1", expireDate: '12/20/2020', stack: 200 },
{id : 15, name: "Test1", expireDate: '12/20/2020', stack: 200 },
{id : 16, name: "Test3", expireDate: '12/20/2021', stack: 200 },
{id : 17, name: "Test1", expireDate: '12/20/2020', stack: 200 },
{id : 18, name: "Test1", expireDate: '12/20/2020', stack: 200 },
{id : 19, name: "Test1", expireDate: '12/20/2020', stack: 200 },
{id : 20, name: "Test1", expireDate: '12/20/2020', stack: 200 },
{id : 21, name: "Test1", expireDate: '12/20/2020', stack: 200 },
{id : 22, name: "Test1", expireDate: '12/20/2020', stack: 200 },
{id : 23, name: "Test1", expireDate: '12/20/2020', stack: 200 },
{id : 24, name: "Test1", expireDate: '12/20/2020', stack: 200 },
{id : 25, name: "Test2", expireDate: '12/20/2020', stack: 200 }
]
   const options = {
        sizePerPage: 10,
        hideSizePerPage: true,
        hidePageListOnlyOnePage: true
    };

export default class MedicalsTable extends Component {

  render() {
    return (
      <div>
      <div>
          <button style={{ width: '100%', marginTop: 10 }} type="button" class="btn btn-info" data-toggle="modal" data-target="#myModal1" >Add Medicen</button></div>
        <ToolkitProvider
          keyField="id"
          data={products}
          columns={columns}
          search
          pagination
        >
          {
            props => (
              <div>
                <h3>Available Medicals</h3>
                <SearchBar {...props.searchProps} />
                <ClearSearchButton {...props.searchProps} />
                <hr />
                <BootstrapTable
                  {...props.baseProps}
                  pagination={ paginationFactory(options) }
                />
                <ExportCSVButton {...props.csvProps}>Export CSV!!</ExportCSVButton>
              </div>
            )
          }
        </ToolkitProvider>
        <div>
                  <div class="modal" id="myModal1">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h4 class="modal-title">Fill the details</h4>
                  <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>
                <div class="modal-body">
                  <div class="form-group">
                    <label for="usr">Medicen Name:</label>
                    <input type="text" class="form-control" id="usr" />
                  </div>
                  <div class="form-group">
                    <label for="usr">Expire Date</label>
                    <input type="text" class="form-control" id="usr" />
                  </div>
                  <div class="form-group">
                    <label for="usr">Stack</label>
                    <input type="text" class="form-control" id="usr" />
                  </div>

                  <div>
                  </div>
                </div>

                <div class="modal-footer">
                  <button type="button" class="btn btn-success" data-dismiss="modal">Save</button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}