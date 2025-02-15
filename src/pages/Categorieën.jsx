import React from 'react';
import { useState } from 'react';
import header from '../assets/Dummy images/header.png'
import apple from '../assets/Dummy images/apple.png'
import Portemonneehoesjes from '../assets/Dummy images/Portemonneehoesjes.png'
import Robuuste from '../assets/Dummy images/Robuuste.png'
import Samsung from '../assets/Dummy images/Samsung.png'
import transparent from '../assets/Dummy images/transparent.png'


const Categorieën = () => {
    return (
        <div>
            <header>
                <img src={header} alt="header" />
            </header>
            <main>
                <h1>Telefoonhoesjes Categorieën</h1>

                <div className='categorie-container'>
                <Link to="/">
    
                    <div className='categorie-img-container'>
                        <img className='categorie-img' src={back} alt="Samsung" />
                    </div>
                    <div className='categorie-text'>
                    <h3>Samsung-hoesje</h3>
                    <a>Samsung-gebruikers die stevige 
                        bescherming nodig hebben 
                        met een modern design.</a>
                    </div>
                    
                </Link>
                </div>
            </main>
        </div>
    )
}

export default Categorieën;