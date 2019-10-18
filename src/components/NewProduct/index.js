import React from 'react';
import { MdClose } from "react-icons/md";
import axios from 'axios';

import './style.css'

const insertBook = async(props) => {

    const title = document.getElementById('productName').value.trim();
    const qtd = parseInt(document.getElementById('productQtd').value);
    const userId = '5da79968b1d75f067b621f1f';//pegar do login do usuário

    if (isNaN(qtd) || title.lenght === 0) {
        alert('Preencha todos os campos!');
        return false;
    }

    let newBook = { "title": title, "quantity": qtd, userId };

    //insere novo livro
    await axios.post('http://localhost:3002/api/books', newBook, {
        headers: { 'Content-Type': 'application/json' }
    }).then(res => {

        props.addProduct(res.data);//retorna para o pai que retorna para o avô App
        
        //reseta os campos
        document.getElementById('productName').value = "";
        document.getElementById('productQtd').value = "";
        document.getElementById('close').checked = false;
        
        alert('Livro cadastrado com sucesso');

    }).catch(error => alert('Livro cadastrado com sucesso'));
}


export default (props) => (

    <section className='new-product'>
        <label htmlFor="close" >
            <MdClose className="new-product__icon-close" />
        </label>
        <input autoFocus className="new-product__title" type="text" id="productName" placeholder="Nome do Livro" />
        <input autoFocus className="new-product__qtd" type="number" id="productQtd" placeholder="qtd" />
        <button className="new-product__buttom-field" type="button" onClick={() => insertBook(props)} >Cadastrar</button>
    </section>
)