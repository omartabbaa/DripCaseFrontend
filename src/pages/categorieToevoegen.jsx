import React, { useState } from 'react';
import './categorieToevoegen.css';

const CategorieToevoegen = () => {
    const [categorieNaam, setCategorieNaam] = useState('');
    const [categorieBeschrijving, setCategorieBeschrijving] = useState('');
    const [categorieAfbeelding, setCategorieAfbeelding] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            categorieNaam,
            categorieBeschrijving,
            categorieAfbeelding
        });
    };

    return (
        <div className="categorie-toevoegen-container">
            <h1>Categorie Toevoegen</h1>
            <form onSubmit={handleSubmit} className="categorie-form">
                <input
                    type="text"
                    placeholder="Categorie naam"
                    value={categorieNaam}
                    onChange={(e) => setCategorieNaam(e.target.value)}
                    className="categorie-input"
                />
                <textarea
                    placeholder="Beschrijving"
                    value={categorieBeschrijving}
                    onChange={(e) => setCategorieBeschrijving(e.target.value)}
                    className="categorie-input categorie-textarea"
                />
                <input
                    type="file"
                    onChange={(e) => setCategorieAfbeelding(e.target.files[0])}
                    className="categorie-input"
                    accept="image/*"
                />
                <button type="submit" className="categorie-submit-btn">
                    Categorie Toevoegen
                </button>
            </form>
        </div>
    );
};

export default CategorieToevoegen; 