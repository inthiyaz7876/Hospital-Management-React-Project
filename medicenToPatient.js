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
  text: 'Expire Date'
}, {
  dataField: 'stack',
  text: 'Stack In'
},{
  dataField: 'cost',
  text: 'Cost'
},{
  dataField: 'button',
  text: 'Enter Number & Add'
}];

const products = [ 
{id : 1, name: "Paracetmal", cost: 10,expireDate: '12/20/2020', stack: 200 },
{id : 2, name: "Cetrix", cost: 10,expireDate: '12/20/2020', stack: 200 },
{id : 3, name: "Zencovit", cost: 10,expireDate: '12/20/2020', stack: 400 },
{id : 4, name: "Morthal", cost: 10,expireDate: '12/20/2020', stack: 300 },
{id : 5, name: "Test1", cost: 10,expireDate: '12/20/2020', stack: 200 },
{id : 6, name: "Test1", cost: 10,expireDate: '12/20/2020', stack: 200 },
{id : 7, name: "Test2", cost: 10,expireDate: '12/20/2021', stack: 200 },
{id : 8, name: "Test1", cost: 10,expireDate: '12/20/2020', stack: 200 },
{id : 9, name: "Test1", cost: 10,expireDate: '12/20/2020', stack: 200 },
{id : 10, name: "Test1", cost: 10,expireDate: '12/20/2020', stack: 200 },
{id : 11, name: "Test1", cost: 10,expireDate: '12/20/2020', stack: 800 },
{id : 12, name: "Test1", cost: 10,expireDate: '12/20/2020', stack: 200 },
{id : 13, name: "Test1", cost: 10,expireDate: '12/20/2020', stack: 200 },
{id : 14, name: "Test1", cost: 10,expireDate: '12/20/2020', stack: 200 },
{id : 15, name: "Test1", cost: 10,expireDate: '12/20/2020', stack: 200 },
{id : 16, name: "Test3", cost: 10,expireDate: '12/20/2021', stack: 200 },
{id : 17, name: "Test1", cost: 10,expireDate: '12/20/2020', stack: 200 },
{id : 18, name: "Test1", cost: 10,expireDate: '12/20/2020', stack: 200 },
{id : 19, name: "Test1", cost: 10,expireDate: '12/20/2020', stack: 200 },
{id : 20, name: "Test1", cost: 10,expireDate: '12/20/2020', stack: 200 },
{id : 21, name: "Test1", cost: 10,expireDate: '12/20/2020', stack: 200 },
{id : 22, name: "Test1", cost: 10,expireDate: '12/20/2020', stack: 200 },
{id : 23, name: "Test1", cost: 10,expireDate: '12/20/2020', stack: 200 },
{id : 24, name: "Test1", cost: 10,expireDate: '12/20/2020', stack: 200 },
{id : 25, name: "Test2", cost: 10,expireDate: '12/20/2020', stack: 200 }
]
   const options = {
        sizePerPage: 5,
        hideSizePerPage: true,
        hidePageListOnlyOnePage: true
    };


export default class MedicenToPatient extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {data} = this.props;
const getTabs = (e, row) => {
  
}
const date = new Date();
const currentDate = date.getDate()+'/'+date.getMonth()+'/'+date.getFullYear()+'-'+date.getHours()+':'+date.getMinutes();
        const colmns = [];
        for (let i = 0;i < columns.length; i++) {
            colmns.push({
                dataField: columns[i].dataField,
                text: columns[i].text,
                formatter: function callback(cell, row) {
                    if (columns[i].dataField === 'button') {
                        return (
                            <div>
                                <input type='number' />
                                <button className="IconMiu" onClick={(e)=>getTabs(e, row)}>Add</button>
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
                <h3>Available Medicals</h3>
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
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-sm-3">Id: {data.id}</div>
              <div class="col-sm-3">Name: {data.name}</div>
              <div class="col-sm-3">Age: {data.age}</div>
              <div class="col-sm-3">Date: {currentDate}</div>
            </div>
            <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-sm-3">Serial Number</div>
              <div class="col-sm-3">Medicen Name</div>
              <div class="col-sm-3">Number of Tablets</div>
              <div class="col-sm-3">Amount</div>
            </div>

            <div class="row">
              <div class="col-sm-3">Serial Number</div>
              <div class="col-sm-3">Medicen Name</div>
              <div class="col-sm-3">Number of Tablets</div>
              <div class="col-sm-3">Amount</div>
            </div>
            
            <div class="row">
              <div class="col-sm-3">Total Amount</div>
              <div class="col-sm-3"></div>
              <div class="col-sm-3"></div>
              <div class="col-sm-3">5000</div>
            </div>
          </div>
        </div>
          </div>
        </div>
        </div>
    )
  }
}