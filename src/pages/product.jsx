import React from 'react';

const Product = () => {
    return (
        <div>
            <div className="product-Photo-container">
                <img src={header} alt="header" />
            </div>

            <div className="product-info-container">

                <h2 className='product-title'>product-title</h2>
                <a className='Mobiel-naam'>Mobiel-naam</a>
            
                <h1 className='product-prijs'>product-prijs</h1>
                <div className='knop-container'>
                    <button className='product-korting'>product-korting</button>
                    <button className='product-winkelwagen'>product-winkelwagen</button>
                </div>
                <div className='product-beschrijving-container'>
                    <p className='product-beschrijving'>product-beschrijving</p>
                </div>
             

            </div>
            <h1>Product</h1>
        </div>
    )
}   

export default Product;

