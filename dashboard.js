import React, { Component } from 'react';
import { render } from 'react-dom';
import OpChart from './opChart';
import RevenueChart from './revenueChart';

class Dashboard extends Component {
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
          <div class="col-sm-4">
            <div class="card" style={{background: '#eea355'}}>
              <div class="card-body">
                <span style={{fontSize: 20,fontWaeight: 700, color: 'white'}}>Total OP's <span style={{fontSize:28, float:'right', }}> 125</span></span>
                
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card" style={{background: '#9ec355'}}>
              <div class="card-body">
                <span style={{fontSize: 20,fontWaeight: 700, color: 'white'}}>Total Patients <span style={{fontSize:28, float:'right', }}> 400</span></span>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card" style={{background: '#7fa0c9'}}>
              <div class="card-body">
                <span style={{fontSize: 20,fontWaeight: 700, color: 'white'}}>Available Beds<span style={{fontSize:28, float:'right', }}> 145</span></span>
              </div>
            </div>
          </div>
        </div>
  <div id="demo" class="carousel slide" data-ride="carousel">
  <ul class="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" class="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
  </ul>

  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://vimalahospital.in/images/vimala%20banner1.jpg" width= '100%' height='350' alt="Los Angeles" />
    </div>
    <div class="carousel-item">
      <img src="https://png.pngtree.com/thumb_back/fh260/background/20190221/ourmid/pngtree-2-5d-see-a-doctor-medical-hospital-image_18143.jpg"  width= '100%' height='350' alt="Chicago" />
    </div>
    <div class="carousel-item">
      <img src="https://www.koradeeyehospital.com/images/header1.png"  width= '100%' height='350' alt="New York" />
    </div>
  </div>

  <a class="carousel-control-prev" href="#demo" data-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </a>
  <a class="carousel-control-next" href="#demo" data-slide="next">
    <span class="carousel-control-next-icon"></span>
  </a>

</div>
         <div class="row">
         <div class="col-sm-6"><h5>OP's Since Week</h5><OpChart /></div>
         </div>
      </div>
    )
  }
}

export default Dashboard;
