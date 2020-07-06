import React, { Component } from 'react';
import { render } from 'react-dom';

class Login extends Component {
  constructor() {
    super();
    this.state = {
        userName : '',
        userPassword: ''
    };
  }
  render() {
    const { userName, userPassword } = this.state;
    const getName = (e) => {
      this.setState({userName: e.target.value})
    }
     const getPassword = (e) => {
        this.setState({userPassword: e.target.value})
    }
    const getLogin = (e) => {

    }
    return (
      <div class="container" style={{marginTop: '5%', textAlign: 'center'}}>
          <div class="card">
          <div class="card-body login">
          <h1>Hospital Name</h1>
                <div class="card loginCard">
          <div class="card-body">
             <div class="form-group">
              <input type="text" class="form-control" onChange={(e)=>getName(e)} placeholder='Enter Name' id="usr" />
            </div>
            <div class="form-group">
              <input type="password" placeholder='Password' onChange={(e)=>getPassword(e)} class="form-control" id="pwd" />
            </div>
            <div class="row">
              <div class="col-sm-6"><button type="button" class="btn btn-primary">Forgot Password</button></div>
              <div class="col-sm-6"><button type="button" onClick={()=>getLogin()} class="btn btn-success">Login</button></div>
            </div>
          </div>
          </div>
   
</div>
        </div>
      </div>
    );
  }
}

export default Login;