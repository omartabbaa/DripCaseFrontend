import React from 'react';
import { useState } from 'react';
import header from '../assets/Dummy images/header.png'
import apple from '../assets/Dummy images/apple.png'
import Portemonneehoesjes from '../assets/Dummy images/Portemonneehoesjes.png'
import Robuuste from '../assets/Dummy images/Robuuste.png'
import Samsung from '../assets/Dummy images/Samsung.png'
import transparent from '../assets/Dummy images/transparent.png'


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
                    <a className='categorie-text-description'>Samsung-gebruikers die stevige 
                        bescherming nodig hebben 
                        met een modern design.</a>
                    </div>
                    
                </Link>
                </div>
            </main>
        </div>
    )
}

export default Categorie;
