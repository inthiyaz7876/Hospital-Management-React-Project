

import React, { Component } from 'react';
import { render } from 'react-dom';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search, CSVExport } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';

const { SearchBar, ClearSearchButton } = Search;
const { ExportCSVButton } = CSVExport;

const columns = [{
  dataField: 'id',
  text: 'Patient Id'
}, {
  dataField: 'name',
  text: 'Patient Name'
}, {
  dataField: 'problem',
  text: 'Problem'
},{
  dataField: 'button',
  text: 'button'
}];

const products = [
{id : 1, name: "Test1", problem: 'Fever' },
{id : 2, name: "Test1", problem: 'Fever' },
{id : 3, name: "Test1", problem: 'Fever' },
{id : 4, name: "Test1", problem: 'Fever' },
{id : 5, name: "Test1", problem: 'Fever' },
{id : 6, name: "Test1", problem: 'Fever' },
{id : 7, name: "Test1", problem: 'Fever' },
{id : 8, name: "Test1", problem: 'Fever' },
{id : 9, name: "Test1", problem: 'Fever' },
{id : 10, name: "Test1", problem: 'Fever' },
{id : 11, name: "Test1", problem: 'Fever' },
{id : 12, name: "Test1", problem: 'Fever' },
{id : 13, name: "Test1", problem: 'Fever' },
{id : 14, name: "Test1", problem: 'Fever' },
{id : 15, name: "Test1", problem: 'Fever' },
{id : 16, name: "Test1", problem: 'Fever' },
{id : 17, name: "Test1", problem: 'Fever' }
]
   const options = {
        sizePerPage: 5,
        hideSizePerPage: true,
        hidePageListOnlyOnePage: true
    };

export default class PatientTable extends Component {

  gethistoryModal = (e) => {
     console.log("e", e.targe.value);
  }
  render() {
    const getRow = (e, row) => {
      console.log('row', row);
    }
      const colmns = [];
        for (let i = 0;i < columns.length; i++) {
            colmns.push({
                dataField: columns[i].dataField,
                text: columns[i].text,
                formatter: function callback(cell, row) {
                    if (columns[i].dataField === 'button') {
                        return (
                            <div>
                                <button className="IconMiu">Presciption</button>
                                <button className="IconMiu" onClick={(e)=>getRow(e, row)}>Medicen</button>
                            </div>
                        );
                    }
                    return <span>{cell}</span>
                },
            })
        };

    return (
      <div>
        <ToolkitProvider
          keyField="id"
          data={products}
          columns={colmns}
          search
          pagination
        >
          {
            props => (
              <div>
                <h3>Current Patients In</h3>
                <SearchBar {...props.searchProps} />
                <ClearSearchButton {...props.searchProps} />
                <hr />
                <BootstrapTable
                  {...props.baseProps}
                  pagination={ paginationFactory(options) }
                />
              </div>
            )
          }
        </ToolkitProvider>
      </div>
    )
  }
}