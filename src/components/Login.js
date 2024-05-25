import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(email, password);
    fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status.toLowerCase() === "ok") {
          alert("Login successful");
          window.localStorage.setItem("token", data.data);
          window.localStorage.setItem("loggedIn", true);
          navigate('/home');
        } else {
          alert("Login failed: " + data.error);
        }
      })
      .catch((error) => {
        console.error("Error during login:", error);
        alert("An error occurred during login. Please try again.");
      });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      
      <form onSubmit={handleSubmit} style={{textAlign: 'center',}}>
      <p style={{fontFamily: 'fantasy', fontWeight: 'Bold', fontSize: '25px',}}>Please enter your login Credentials :</p>
        <div className="mb-3">
          <label style={{fontFamily: 'fantasy', fontWeight: 'Bold',}}>Email address</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label style={{fontFamily: 'fantasy', fontWeight: 'Bold',}}>Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
        <a href='/signup' style={{fontFamily: 'fantasy', fontWeight: 'Bold',}}>Sign Up here</a>        
      </form>
    </div>
  );
};

export default LoginComponent;
