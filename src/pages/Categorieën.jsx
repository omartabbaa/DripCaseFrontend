import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import header from '../assets/Dummy images/header.png'
import apple from '../assets/Dummy images/apple.png'
import Portemonneehoesjes from '../assets/Dummy images/Portemonneehoesjes.png'
import Robuuste from '../assets/Dummy images/Robuuste.png'
import Samsung from '../assets/Dummy images/Samsung.png'
import transparent from '../assets/Dummy images/transparent.png'
import './Categoreën.css'


const Categorieën = () => {
    return (
        <div className='categorieen-container'>
    <header className="categorieen-header">
  <img className="categorieen-header-img" src={header} alt="Header Image" />
</header>

            <main>
                <div className='categorieen-title-container'>
                    <h1 className='categorieen-title'>Telefoonhoesjes Categorieën</h1>
                </div>
                <div className='categorieen-container'>
                    <div className='categorie-container'>
                        <Link className='categorie-link' to="/categorie/samsung">
                            <div className='categorie-img-container'>
                                <img className='categorie-img' src={Samsung} alt="Samsung" />
                            </div>
                            <div className='categorie-text'>
                                <h3 className='categorie-text-h3'>Samsung-hoesje</h3>
                                <a className='categorie-text-a'>Samsung-gebruikers die stevige bescherming nodig hebben met een modern design.</a>
                            </div>
                        </Link>
                    </div>

                    <div className='categorie-container'>
                        <Link className='categorie-link' to="/categorie/samsung">
                            <div className='categorie-img-container'>
                                <img className='categorie-img' src={Samsung} alt="Samsung" />
                            </div>
                            <div className='categorie-text'>
                                <h3>Samsung-hoesje</h3>
                                <a>Samsung-gebruikers die stevige 
                                    bescherming nodig hebben 
                                    met een modern design.</a>
                            </div>
                        </Link>
                    </div>

                    <div className='categorie-container'>
                        <Link to="/">
                            <div className='categorie-img-container'>
                                <img className='categorie-img' src={Samsung} alt="Samsung" />
                            </div>
                            <div className='categorie-text'>
                                <h3>Samsung-hoesje</h3>
                                <a>Samsung-gebruikers die stevige 
                                    bescherming nodig hebben 
                                    met een modern design.</a>
                            </div>
                        </Link>
                    </div>

                    <div className='categorie-container'>
                        <Link to="/">
                            <div className='categorie-img-container'>
                                <img className='categorie-img' src={Samsung} alt="Samsung" />
                            </div>
                            <div className='categorie-text'>
                                <h3>Samsung-hoesje</h3>
                                <a>Samsung-gebruikers die stevige 
                                    bescherming nodig hebben 
                                    met een modern design.</a>
                            </div>
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Categorieën;