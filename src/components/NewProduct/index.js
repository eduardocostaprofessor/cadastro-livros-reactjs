import React from 'react';
import { MdClose } from "react-icons/md";

import './style.css'

export default () => (
        <section className='new-product'>
            <label htmlFor="close" >
                <MdClose className="new-product__icon-close" />
            </label>

            <input autoFocus className="new-product__title" type="text" id="productName" placeholder="Nome do Livro" />
            <input autoFocus className="new-product__qtd" type="number" id="productQtd" placeholder="qtd" />
            <button className="new-product__buttom-field" type="button" >Cadastrar</button>
        </section>
)