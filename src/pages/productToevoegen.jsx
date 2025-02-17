import React, { useState } from 'react';
import './productToevoegen.css';

const ProductToevoegen = () => {
    const [productNaam, setProductNaam] = useState('');
    const [productPrijs, setProductPrijs] = useState('');
    const [productBeschrijving, setProductBeschrijving] = useState('');
    const [productCategorie, setProductCategorie] = useState('');
    const [productKorting, setProductKorting] = useState('');
    const [productAfbeelding, setProductAfbeelding] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            productNaam,
            productPrijs,
            productBeschrijving,
            productCategorie,
            productKorting,
            productAfbeelding
        });
    };

    return (
        <div className="product-toevoegen-container">
            <h1>Product Toevoegen</h1>
            <form onSubmit={handleSubmit} className="product-form">
                <input
                    type="text"
                    placeholder="Product naam"
                    value={productNaam}
                    onChange={(e) => setProductNaam(e.target.value)}
                    className="product-input"
                />
                <input
                    type="number"
                    placeholder="Prijs"
                    value={productPrijs}
                    onChange={(e) => setProductPrijs(e.target.value)}
                    className="product-input"
                />
                <textarea
                    placeholder="Beschrijving"
                    value={productBeschrijving}
                    onChange={(e) => setProductBeschrijving(e.target.value)}
                    className="product-input product-textarea"
                />
                <select
                    value={productCategorie}
                    onChange={(e) => setProductCategorie(e.target.value)}
                    className="product-input"
                >
                    <option value="">Selecteer categorie</option>
                    <option value="samsung">Samsung</option>
                    <option value="apple">Apple</option>
                    <option value="huawei">Huawei</option>
                </select>
                <input
                    type="number"
                    placeholder="Korting (%)"
                    value={productKorting}
                    onChange={(e) => setProductKorting(e.target.value)}
                    className="product-input"
                />
                <input
                    type="file"
                    onChange={(e) => setProductAfbeelding(e.target.files[0])}
                    className="product-input"
                    accept="image/*"
                />
                <button type="submit" className="product-submit-btn">
                    Product Toevoegen
                </button>
            </form>
        </div>
    );
};

export default ProductToevoegen;
