import React, { Component } from 'react';
import { render } from 'react-dom';
import OpChart from './opChart';
import RevenueChart from './revenueChart';

class Admin extends Component {
  constructor() {
    super();
    this.state = {
    };
  }
  render() {
    return (
      <div>
        <h4>Today updates</h4>
        <div class="row">
          <div class="col-sm-3">
            <div class="card" style={{background: '#eea355'}}>
              <div class="card-body">
                <span style={{fontSize: 20,fontWaeight: 700, color: 'white'}}>Total OP's <span style={{fontSize:28, float:'right', }}> 125</span></span>
                
              </div>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="card" style={{background: '#9ec355'}}>
              <div class="card-body">
                <span style={{fontSize: 20,fontWaeight: 700, color: 'white'}}>Total Patients <span style={{fontSize:28, float:'right', }}> 400</span></span>
              </div>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="card" style={{background: '#7fa0c9'}}>
              <div class="card-body">
                <span style={{fontSize: 20,fontWaeight: 700, color: 'white'}}>Available Beds<span style={{fontSize:28, float:'right', }}> 145</span></span>
              </div>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="card" style={{background: '#c56b74'}}>
              <div class="card-body">
                <span style={{fontSize: 20,fontWaeight: 700, color: 'white'}}>Revenue<span style={{fontSize:28, float:'right', }}> 12500</span></span>
              </div>
            </div></div>
        </div>
        <h4>Weekely update</h4>
         <div class="row">
         <div class="col-sm-6"><h5>OP's</h5><OpChart /></div>
         <div class="col-sm-6"><h5>Revenue</h5><RevenueChart /></div>
         </div>
      </div>
    )
  }
}

export default Admin;
