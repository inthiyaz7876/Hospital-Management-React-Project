

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
      data: '',
      patientData: ''
    }
  }

  gethistoryModal = (e) => {
     console.log("e", e.targe.value);
  }
  render() {
    const {isMedicen, data, patientData} = this.state;
    const getRow = (e, row) => {
      this.setState({isMedicen: true});
      this.setState({data: row});
    }
    const setPatientData = (e, row) => {
      this.setState({patientData: row});
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
                                <button className="IconMiu" onClick={e=>setPatientData(e, row)} data-toggle="modal" data-target="#myModal1">Presciption</button>
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
      <div>
          <div class="modal" id="myModal1">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h4 class="modal-title">Patient details</h4>
                  <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>
                <div class="modal-body">
                  <div class="form-group">
                    <label for="usr">Medicen Name:</label>
                    <input type="text" placeholder={patientData.name} class="form-control"  id="usr" disabled />
                  </div>
                   <div class="form-group">
                    <label for="usr">Patient Problem</label>
                    <input type="text" placeholder={patientData.problem}class="form-control" id="usr" disabled />
                  </div>
                   <div class="form-group">
                    <label for="usr">Age</label>
                    <input type="text" placeholder={patientData.age}class="form-control" id="usr" disabled />
                  </div>
                  <div class="form-group">
                    <label for="usr">Assigned Doctor</label>
                    <input type="text" placeholder={patientData.name}class="form-control" id="usr" disabled/>
                  </div>
                   <div class="form-group">
                  <label for="comment">Prescription</label>
                  <textarea class="form-control" rows="5" id="comment"></textarea>
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