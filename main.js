import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from './header';
import Dashboard from './dashboard';
import LeftMenu from './leftMenu';


export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Header />
        <div class="container-fluid">
        <div class="row">
          <div class="col-sm-2" style={{height: '92vh', backgroundColor: '#f3f4f8'}}><LeftMenu /></div>
          <div class="col-sm-10"><Dashboard /></div>
        </div>
        </div>
      </div>
    );
  }
}

