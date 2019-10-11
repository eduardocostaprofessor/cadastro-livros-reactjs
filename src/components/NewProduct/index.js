import React, { Component } from 'react';
import { MdClose } from "react-icons/md";
import axios from 'axios';

import './style.css'

function insertBook() {
    let title = document.getElementById('productName').value.trim();
    let qtd = parseInt(document.getElementById('productQtd').value);
    
    if(isNaN(qtd) || title.lenght == 0) {
        alert('Preencha todos os campos!');
        return false;
    }

    let newBook = { "title" : title, "quantity" : qtd }
    
    //insere novo livro
    axios.post('http://localhost:3002/api/books', newBook, { 
        headers: {'Content-Type': 'application/json'} 
    }).then(data => {
        console.log(data);
    });
}

export default (props) => (
        <section className='new-product'>
            <label htmlFor="close" >
                <MdClose className="new-product__icon-close" />
            </label>

            <input autoFocus className="new-product__title" type="text" id="productName" placeholder="Nome do Livro" />
            <input autoFocus className="new-product__qtd" type="number" id="productQtd" placeholder="qtd" />
            <button className="new-product__buttom-field" type="button" onClick={insertBook} >Cadastrar</button>
        </section>
)