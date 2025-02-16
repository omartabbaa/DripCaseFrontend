import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Aanmelden.css';
    const Aanmelden = () => {
    const [voornaam, setVoornaam] = useState('');
    const [achternaam, setAchternaam] = useState('');
    const [straatnaam, setStraatnaam] = useState('');
    const [huisnummer, setHuisnummer] = useState('');
    const [postcode, setPostcode] = useState('');
    const [stadnaam, setStadnaam] = useState('');
    const [email, setEmail] = useState('');
    const [wachtwoord, setWachtwoord] = useState('');
    const [wachtwoordHerhalen, setWachtwoordHerhalen] = useState('');

    const handleAanmelden = () => {
        console.log(voornaam, achternaam, straatnaam, huisnummer, postcode, stadnaam, email, wachtwoord, wachtwoordHerhalen);
    }
    return (
        <div>
            <div className="titel-container">


            <h1>Aanmelden</h1>
            <a className='titel-text'>Log in om de hoes van je dromen te kopen.</a>
            <div className='button-container'>
            <Link className='button' to="/Aanmelden">Aanmelden</Link>
            <Link className='button' to="/Admin">Admin</Link>
            </div>  
            <div className="register-container">

            <input className='register-input' value={voornaam} type="text" placeholder="Voornaam" onChange={(e) => setVoornaam(e.target.value)} />
            <input className='register-input' value={achternaam} type="text" placeholder="Achternaam" onChange={(e) => setAchternaam(e.target.value)} />
            <input className='register-input' value={straatnaam} type="text" placeholder="Straatnaam" onChange={(e) => setStraatnaam(e.target.value)} />
            <input className='register-input' value={huisnummer} type="text" placeholder="Huisnummer" onChange={(e) => setHuisnummer(e.target.value)} />
            <input className='register-input' value={postcode} type="text" placeholder="Postcode" onChange={(e) => setPostcode(e.target.value)} />
            <input className='register-input' value={stadnaam} type="text" placeholder="Stadnaam" onChange={(e) => setStadnaam(e.target.value)} />
            <input className='register-input' value={email} type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input className='register-input' value={wachtwoord} type="password" placeholder="Wachtwoord" onChange={(e) => setWachtwoord(e.target.value)} />
            <input className='register-input' value={wachtwoordHerhalen} type="password" placeholder="Wachtwoord herhalen" onChange={(e) => setWachtwoordHerhalen(e.target.value)} />

            <button className='register-button' onClick={handleAanmelden}> Meld je aan</button>
            <a>Ik heb al een account? <Link to="/inloggen">Inloggen</Link></a>
            </div>
        </div>
        </div>
    )
}   

export default Aanmelden;
