import React from 'react';
import { useState } from 'react';
import header from '../assets/Dummy images/header.png'
import apple from '../assets/Dummy images/apple.png'
import Portemonneehoesjes from '../assets/Dummy images/Portemonneehoesjes.png'
import Robuuste from '../assets/Dummy images/Robuuste.png'
import Samsung from '../assets/Dummy images/Samsung.png'
import transparent from '../assets/Dummy images/transparent.png'
import { useParams } from 'react-router-dom'
import './Categorie.css'

const Categorie = () => {
    const { id } = useParams()
    
    return (
        <div className="category">
            <h1>Categorie {id}</h1>
            <div className="products-grid">
                {/* Products in this category will be listed here */}
            </div>
        </div>
    )
}

export default Categorie;
