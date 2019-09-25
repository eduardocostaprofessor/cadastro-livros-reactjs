import React from 'react';
import { MdEdit, MdClose } from "react-icons/md";
import './style.css';
import './productPopup.css';

export default (props) => (
    <div className="product-container">
        <article className="product">
            <figure className="product__image-box">
                <img className="product__image" src={props.imageAddress} alt="Teste" />
            </figure>

            <div className="product__info">
                <h2 className="product__title">{props.title}</h2>
                <p className="product__qtd">{props.qtd}</p>
            </div>
            <label htmlFor={`close${props.id}`} >
                <MdEdit className="product__add" />
            </label>
        </article>

        {/* PRODUCT POPUP */}
        <input type="checkbox" id={`close${props.id}`} className="add-product__magic-show" />
        <section className='new-book'>
            <label htmlFor={`close${props.id}`} >
                <MdClose className="new-book__icon-close" />
            </label>
            <label htmlFor="oldQtd" >Qtd atual:</label>
            <input autoFocus className="new-book__input-field" type="text" id="oldQtd" value={props.qtd} disabled />
            <input autoFocus className="new-book__input-field" type="number" id="newQtd" placeholder="nova" />
            <button className="new-book__buttom-field" type="button" >Cadastrar</button>
        </section>
    </div>
)