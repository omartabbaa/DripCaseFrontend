import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo/logoDripcase.png';
import './inloggen.css'

function Inloggen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log(email, password);
  }


  return (
    <div className="login-container">
      <div className="logo-container">
        <img src={logo} alt="logo" />
      </div>
      <div className="login-CallToAction">
        <h1 className='login-text'>Log in om de hoes van je dromen te kopen.</h1>
      </div>
    <div className="about">
      <input className="login-input" type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input className="login-input" type="password" placeholder="Wachtwoord" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button className="button-login" onClick={handleLogin}>Inloggen</button>
    </div>
    <div className="register-container">
      <a className="register-text">Ik heb nog geen account</a>
      <Link to="/aanmelden" className="button">Registreer</Link>
    </div>
    </div>
  )
}

export default Inloggen;