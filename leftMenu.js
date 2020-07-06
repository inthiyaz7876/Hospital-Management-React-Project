import React, { Component } from 'react';
import { render } from 'react-dom';

export default class LeftMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doc : 'Select Doctor'
    }
  }
  handlePageChange(url) {
    window.location = url;
  }
  getDropValue = (e) => {
    this.setState({doc: e.target.value});
  }
  render() {
 

    return (
      <div>
        <div>
          <button style={{ width: '100%', marginTop: 10 }} type="button" class="btn btn-success" onClick={() => this.handlePageChange('/')}>Dashboard</button></div>
           <div>
          <button style={{ width: '100%', marginTop: 10 }} type="button" class="btn btn-success" onClick={() => this.handlePageChange('admin')}>Admin</button></div>
        <div>
          <button style={{ width: '100%', marginTop: 10 }} type="button" class="btn btn-success" onClick={() => this.handlePageChange('createOp')} >Create OP</button></div>
        <div><button style={{ width: '100%', marginTop: 10 }} type="button" onClick={() => this.handlePageChange('medical')} class="btn btn-success">Pharmacy</button></div>
        <div><button style={{ width: '100%', marginTop: 10 }} type="button" class="btn btn-success">Lab</button></div>
        <div><button style={{ width: '100%', marginTop: 10 }} type="button" onClick={() => this.handlePageChange('patient')} class="btn btn-success">Patient</button></div>
        <div class="card" style={{ width: '100%', backgroundColor: '#c2c9d1',marginTop: 10, overflow: 'scroll' }}>
        <h5 style={{marginTop:10}}>Available Doctors</h5>
         <div class="card" style={{ width: '100%', marginTop: 10, height: 200, overflow: 'scroll' }}>
              <div class="card-body">
              
                <ul><li>Shaik Inthiyaz ali - Dental </li>
                <li>Prashanth - General</li>
                <li>Surekha - General</li>
                <li>Nandhu - General</li>
                <li>Rajesh - General</li>
                <li>Neha - General</li>
                <li>Chandra - General</li>
                <li>Mukesh - General</li>
                </ul>
              </div>
            </div>
               <h5 style={{marginTop:10}}>Available Staff</h5>
             <div class="card" style={{ width: '100%', marginTop: 10, height: 200, overflow: 'scroll' }}>
              <div class="card-body">
           
                <ul><li>Priya - Nurse </li>
                <li>Agarwala - Nurse</li>
                <li>Raaji - Clean</li>
                <li>Safi - Clean</li>
                <li>Jyothi - Nurse</li>
                <li>Mohan - Security</li>
                <li>Vidhya - Reception</li>
                <li>Lokesh - Medical</li>
                <li>Venkatesh - Office boy</li>
                </ul>
              </div>
            </div>
            </div>
        <div>
  
        </div>
      </div>
    )
  }
}