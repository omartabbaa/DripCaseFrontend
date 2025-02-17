import React from 'react';
import { Link } from 'react-router-dom';
import header from '../assets/Dummy images/header.png';
import apple from '../assets/Dummy images/apple.png';
import samsung from '../assets/Dummy images/samsung.png';
import Robuust from '../assets/Dummy images/Robuuste.png';
import './Winkelwagen.css';
import { AiOutlineClose } from "react-icons/ai";

const Winkelwagen = () => {



    
    return (
        <section className='Winkelwagen-section'>
            <div className='winkelwagen-container'>
                <div className="product-container">
                    <div className="product-image-name-container">
                        <div className="product-image-container">
                            <img className='product-image' src={header} alt="header" />
                        </div>
                        <div className="container-text">
                            <h2 className='product-title'>Product-title</h2>
                            <span className='Mobiel-naam'>Mobiel-naam</span>
                        </div>
                    </div>
                    <div className="prijs-container">
                        <h1 className='product-prijs'>€67,95 EUR</h1>
                        <button className='delete-button'><AiOutlineClose /></button>
                    </div>
                </div>



                <div className="product-container">
                    <div className="product-image-name-container">
                        <div className="product-image-container">
                            <img className='product-image' src={apple} alt="header" />
                        </div>
                        <div className="container-text">
                            <h2 className='product-title'>Product-title</h2>
                            <span className='Mobiel-naam'>Mobiel-naam</span>
                        </div>
                    </div>
                    <div className="prijs-container">
                        <h1 className='product-prijs'>€67,95 EUR</h1>
                        <button className='delete-button'><AiOutlineClose /></button>
                    </div>
                </div>



                <div className="product-container">
                    <div className="product-image-name-container">
                        <div className="product-image-container">
                            <img className='product-image' src={samsung} alt="header" />
                        </div>
                        <div className="container-text">
                            <h2 className='product-title'>Product-title</h2>
                            <span className='Mobiel-naam'>Mobiel-naam</span>
                        </div>
                    </div>
                    <div className="prijs-container">
                        <h1 className='product-prijs'>€67,95 EUR</h1>
                        <button className='delete-button'><AiOutlineClose /></button>
                    </div>
                </div>

         

      

        

                <div className="totaal-prijs-container">
                    <h2 className='totaal-prijs'>totaal-prijs   </h2>
                    <h2 className='totaal-prijs'> 200 euro</h2>
                </div>
                <button className='afrekenen-button'>Afrekenen</button>
            </div>
        </section>
    );
}

export default Winkelwagen;

