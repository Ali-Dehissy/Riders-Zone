import React, { Component } from 'react';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { firstname, lastname, email, password } = this.state;
    console.log(firstname, lastname, email, password);
    fetch('http://localhost:3001/register', {
      method: 'POST',
      crossDomain: true,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        firstname,
        lastname,
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, 'userRegister');
      });
  }

  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <form onSubmit={this.handleSubmit} style={{ width: '300px', textAlign: 'center',}} >
          <p style={{ fontFamily: 'fantasy', fontWeight: 'bold', fontSize: '25px', textAlign: 'center', }}>Sign Up</p>
          <div className="mb-3">
            <label style={{ fontFamily: 'fantasy', fontWeight: 'bold' }}>First name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              style={{ width: '100%' }}
              onChange={(e) => this.setState({ firstname: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <label style={{ fontFamily: 'fantasy', fontWeight: 'bold' }}>Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              style={{ width: '100%' }}
              onChange={(e) => this.setState({ lastname: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <label style={{ fontFamily: 'fantasy', fontWeight: 'bold' }}>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              style={{ width: '100%' }}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <label style={{ fontFamily: 'fantasy', fontWeight: 'bold' }}>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              style={{ width: '100%' }}
              onChange={(e) => this.setState({ password: e.target.value })}
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-right" style={{ fontFamily: 'fantasy', fontWeight: 'bold' }}>
            Already registered? <a href="/">Log In</a>
          </p>
        </form>
      </div>
    );
  }
}
