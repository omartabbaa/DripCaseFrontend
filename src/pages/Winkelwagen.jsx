import React from 'react';
import { Link } from 'react-router-dom';
import header from '../assets/Dummy images/header.png';

const Winkelwagen = () => {


    return (
       
            <div className='winkelwagen-container'>
                <div className="product-container">
                    <img src={header} alt="header" />
                    <h2 className='product-title'>product-title</h2>
                    <a className='Mobiel-naam'>Mobiel-naam</a>
                    <h1 className='product-prijs'>product-prijs</h1>
               <button className='delete-button'>delete-button</button>
                </div>
                <div className="totaal-prijs-container">
                    <h2 className='totaal-prijs'>totaal-prijs</h2>
                    <h2 className='totaal-prijs'>totaal-prijs</h2>
                    
                </div>
                <button className='afrekenen-button'>afrekenen-button</button>
            </div>
         
    )
}   

export default Winkelwagen;
