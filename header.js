import React, { Component } from 'react';
import { render } from 'react-dom';

class Header extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <nav class="navbar navbar-expand-md bg-dark navbar-dark">

    <a class="navbar-brand" href="#">
    <img src="https://png.pngtree.com/template/20190314/ourmid/pngtree-hospital-logo-image_71269.jpg" alt="logo" style={{width:40}} />
  </a>
  

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="#">Hospital Name</a>
      </li>
    </ul>
    
  </div>
</nav>
    );
  }
}

export default Header;
