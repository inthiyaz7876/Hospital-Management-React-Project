

import React, { Component } from 'react';
import { render } from 'react-dom';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search, CSVExport } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import MedicenToPatient from './medicenToPatient';

const { SearchBar, ClearSearchButton } = Search;
const { ExportCSVButton } = CSVExport;

const columns = [{
  dataField: 'id',
  text: 'Patient Id'
}, {
  dataField: 'name',
  text: 'Patient Name'
},{
  dataField: 'age',
  text: 'Age'
}, {
  dataField: 'problem',
  text: 'Problem'
},{
  dataField: 'joined',
  text: 'Joined Date'
},{
  dataField: 'totalDue',
  text: 'Total Due'
},{
  dataField: 'hospDue',
  text: 'Hospital Amount'
},{
  dataField: 'medDue',
  text: 'Medical Amount'
},{
  dataField: 'paid',
  text: 'Amount Paid'
},{
  dataField: 'button',
  text: 'Prescription/Medicen'
}];

const products = [
{id : 1, name: "Venkat", age: 25,joined: '03/07/2020',totalDue:2000,hospDue:1500,medDue:1000,paid:500,problem: 'Fever' },
{id : 2, name: "Bharn", age: 25,joined: '03/07/2020',totalDue:2000,hospDue:1500,medDue:1000,paid:500,problem: 'Dental' },
{id : 3, name: "Maanu", age: 25,joined: '03/07/2020',totalDue:2000,hospDue:1500,medDue:1000,paid:500,problem: 'Brop' },
{id : 4, name: "Gohan", age: 25,joined: '03/07/2020',totalDue:2000,hospDue:1500,medDue:1000,paid:500,problem: 'Liver' },
{id : 5, name: "Rosh", age: 25,joined: '03/07/2020',totalDue:2000,hospDue:1500,medDue:1000,paid:500,problem: 'Corona' },
{id : 6, name: "Molath", age: 25,joined: '03/07/2020',totalDue:2000,hospDue:1500,medDue:1000,paid:500,problem: 'Tified' },
{id : 7, name: "Runk", age: 25,joined: '03/07/2020',totalDue:2000,hospDue:1500,medDue:1000,paid:500,problem: 'Moriem' },
{id : 8, name: "Thanu", age: 25,joined: '03/07/2020',totalDue:2000,hospDue:1500,medDue:1000,paid:500,problem: 'Fever' },
{id : 9, name: "Wental", age: 25,joined: '03/07/2020',totalDue:2000,hospDue:1500,medDue:1000,paid:500,problem: 'Fever' },
{id : 10, name: "Morakal", age: 25,joined: '03/07/2020',totalDue:2000,hospDue:1500,medDue:1000,paid:500,problem: 'Fever' },
{id : 11, name: "Venkalsi", age: 25,joined: '03/07/2020',totalDue:2000,hospDue:1500,medDue:1000,paid:500,problem: 'Fever' },
{id : 12, name: "Test1", age: 25,joined: '03/07/2020',totalDue:2000,hospDue:1500,medDue:1000,paid:500,problem: 'Fever' },
{id : 13, name: "Test1", age: 25,joined: '03/07/2020',totalDue:2000,hospDue:1500,medDue:1000,paid:500,problem: 'Fever' },
{id : 14, name: "Test1", age: 25,joined: '03/07/2020',totalDue:2000,hospDue:1500,medDue:1000,paid:500,problem: 'Fever' },
{id : 15, name: "Test1", age: 25,joined: '03/07/2020',totalDue:2000,hospDue:1500,medDue:1000,paid:500,problem: 'Fever' },
{id : 16, name: "Test1", age: 25,joined: '03/07/2020',totalDue:2000,hospDue:1500,medDue:1000,paid:500,problem: 'Fever' },
{id : 17, name: "Test1", age: 25,joined: '03/07/2020',totalDue:2000,hospDue:1500,medDue:1000,paid:500,problem: 'Fever' }
]
   const options = {
        sizePerPage: 10,
        hideSizePerPage: true,
        hidePageListOnlyOnePage: true
    };

export default class PatientTable extends Component {
    constructor(props) {
    super(props);
    this.state= {
      isMedicen: false, 
      data: ''
    }
  }

  gethistoryModal = (e) => {
     console.log("e", e.targe.value);
  }
  render() {
    const {isMedicen, data} = this.state;
    const getRow = (e, row) => {
      this.setState({isMedicen: true});
      this.setState({data: row});
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
      <div> {
            isMedicen ?
            <MedicenToPatient data={data}/>
            :
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
      }
      </div>
    )
  }
}