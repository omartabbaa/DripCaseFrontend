import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Samsung from '../assets/Dummy images/Samsung.png';
import './Categorie.css';

const Categorie = () => {
    const { id } = useParams();
    return (
        <section className='categorie-container-section'>
            <main className='categorie-main'>
                <div className='categorie-container'>
                    <Link className='categorie-link' to={`/product/${id}`}>
                        <div className='categorie-content-boven-container'>
                            <div className='categorie-img-container'>
                                <img className='categorie-img' src={Samsung} alt="Samsung" />
                            </div>
                            <div className='categorie-title-container'>
                                <h1 className='categorie-titel'>{id}</h1>
                            </div>
                            <div className='categorie-text'>
                                <h3 className='categorie-text-title'>Samsung-hoesje</h3>
                                <span className='mobiel-hoesje-prijs'>€ 19,99</span>
                                <span className='korting-prijs'>30%</span>
                            </div>
                        </div>
                        <div className='categorie-button-container'>
                            <button className='Toevoegen-aan-winkelwagen'>Toevoegen aan winkelwagen</button>
                        </div>
                    </Link>
                </div>
            </main>
        </section>
    );
}

export default Categorie;
