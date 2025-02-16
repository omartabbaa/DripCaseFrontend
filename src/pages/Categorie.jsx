import React from 'react';
import { useState } from 'react';
import header from '../assets/Dummy images/header.png'
import apple from '../assets/Dummy images/apple.png'
import Portemonneehoesjes from '../assets/Dummy images/Portemonneehoesjes.png'
import Robuuste from '../assets/Dummy images/Robuuste.png'
import Samsung from '../assets/Dummy images/Samsung.png'
import transparent from '../assets/Dummy images/transparent.png'
import './Categorie.css'


const Categorie = () => {
    return (
        <div>
         <h1 className='categorie-title'>Portemonneehoesjes</h1>
            <main className='categorie-main'>
                <h1 className='categorie-title'>Telefoonhoesjes Categorieën</h1>

                <div className='categorie-container'>
                <Link to="/">
    
                    <div className='categorie-img-container'>
                        <img className='categorie-img' src={back} alt="Samsung" />
                    </div>
                    <div className='categorie-text'>
                    <h3 className='categorie-text-title'>Samsung-hoesje</h3>
                    <a className='mobiel-naam'>Samsung Galaxy S20</a>
                    <a className='mobiel-hoesje-prijs'>€ 19,99</a>
                    <a className='korting-prijs'>30%</a>
                    </div>
                    <div className='categorie-button-container'>
                    <button className='Toevoegen-aan-winkelwagen'>Toevoegen aan winkelwagen</button>
                    </div>
                    
                </Link>
                </div>
            </main>
        </div>
    )
}

export default Categorie;
