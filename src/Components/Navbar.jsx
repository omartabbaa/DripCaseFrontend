import { Link } from 'react-router-dom';
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from 'react';
import logo from '../assets/logo/logoDripcase.png'
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="Navbar">
            <Link to="/categorieën" className="nav-item">Categorieën</Link>
            
            <div className="logo-container">
                <Link to="/">
                    <img className="logo" src={logo} alt="logo" />
                </Link>
            </div>
            <Link to="/product-toevoegen" className="nav-item">Product toevoegen</Link>
            <Link to="/categorie-toevoegen" className="nav-item">Categorie toevoegen</Link>

            <div className="nav-right">
                <Link to="/winkelwagen" className="nav-item">
                    <AiOutlineShoppingCart />
                </Link>
                
                <div className="dropdown-container">
                    <AiOutlineUser onClick={toggleDropdown} className="nav-item" />
                    {isOpen && (
                        <div className="dropdown">
                            <div className="dropdown-list">
                                <Link to="/admin">Admin</Link>
                                <Link to="/inloggen">Inloggen</Link>
                                <Link to="/aanmelden">Aanmelden</Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}   

export default Navbar;

