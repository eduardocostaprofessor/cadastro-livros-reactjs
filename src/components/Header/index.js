import React from 'react';
import './style.css'
import { Link } from 'react-router-dom';
import { MdReorder } from "react-icons/md";

export default (props) => (
    <header className='header'>
        <MdReorder className='header__icon' />
        <div className='header__links-container' >
            <Link to="/" className='header__link'>Livros</Link>
            <Link to="/booksout" className='header__link'>Saída de Livros</Link>
        </div>
        <Link to="/logout" className='header__link'>Logout</Link>
    </header>
)