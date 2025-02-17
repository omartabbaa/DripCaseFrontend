import React from 'react';
import { useParams } from 'react-router-dom';
import header from '../assets/Dummy images/header.png';
import Samsung from '../assets/Dummy images/Samsung.png';
import './product.css';

const Product = () => {
    const { id } = useParams();

    return (
        <div className="product-page">
            <div className="product-Photo-container">
                <img src={Samsung} alt="Samsung" />
            </div>

            <div className="product-info-container">
                <h2 className='product-title'>Product: {id}</h2>
                <span className='Mobiel-naam'>Samsung Galaxy S20</span>
            
                <h1 className='product-prijs'>€19.99</h1>
                <div className='knop-container'>
                    <button className='product-korting'>30% Korting</button>
                    <button className='product-winkelwagen'>Toevoegen aan winkelwagen</button>
                </div>
                <div className='product-beschrijving-container'>
                    <p className='product-beschrijving'>
                        Bescherm je {id} met dit stevige hoesje.
                    </p>
                </div>
            </div>
        </div>
    )
}   

export default Product;

