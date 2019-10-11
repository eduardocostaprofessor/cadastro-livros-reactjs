import React, { Component } from 'react';
import axios from 'axios';

import { MdEdit, MdClose, MdRemove} from "react-icons/md";
import './style.css';
import './productPopup.css';

export default class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {//estado de cada componente
            newQuantity: "",
            quantity: this.props.qtd,
            product: this.props,
        }
    }

    updateValue = /*async*/ (evento) => {
        let valor = evento.target.value;
        this.setState({ newQuantity: valor });
    }

    updateBookQuantity = async () => {

        if (this.state.newQuantity !== "")
            await this.setState({ quantity: this.state.quantity + parseInt(this.state.newQuantity) });

        axios.put(`http://localhost:3002/api/books/${this.props.id}`, { quantity: this.state.quantity }).then((res => {
            const { _id, title, quantity } = res.data;
            this.setState({
                product: {
                    id: _id,
                    title,
                    qtd: quantity
                }
            });

            alert('Livro atualizado com sucesso!');
        })).catch(error => {
            alert('Não foi possível atualizar os dados do livro. Tente novamente mais tarde')
        })

    }

    insertBookOut = () => {
        console.log('Dar saída do livro');
        
    }

    render() {
        return (
            <div className="product-container">
                <article className="product">
                    <figure className="product__image-box">
                        <img className="product__image" src={this.state.product.imageAddress} alt="Teste" />
                    </figure>

                    <div className="product__info">
                        <h2 className="product__title">{this.state.product.title}</h2>
                        <p className="product__qtd">{this.state.product.qtd}</p>
                    </div>
                   <div className="product__action-button">
                        <label htmlFor={`close${this.state.product.id}`} >
                            <MdEdit className="product__add" />
                        </label>
                        <label htmlFor={`closebo${this.state.product.id}`} >
                            <MdRemove className="product__add" />
                        </label>
                    </div>
                </article>

                {/* PRODUCT POPUP */}
                <input type="checkbox" id={`close${this.state.product.id}`} className="new-book__magic-show" />
                <section className='new-book'>
                    <label htmlFor={`close${this.state.product.id}`} >
                        <MdClose className="new-book__icon-close" />
                    </label>
                    <label htmlFor="oldQtd" >Qtd atual:</label>
                    <input className="new-book__input-field" type="text" id="oldQtd" value={this.state.product.qtd} disabled />
                    <input autoFocus className="new-book__input-field" type="number" value={this.state.newQuantity} onChange={this.updateValue} id="newQtd" placeholder="nova" />
                    <button className="new-book__buttom-field" type="button" onClick={this.updateBookQuantity} >Cadastrar</button>
                </section>

                {/* BOOK OUT POPUP */}
                <input type="checkbox" id={`closebo${this.state.product.id}`} className="out-book__magic-show" />
                <section className='out-book'>
                    <label htmlFor={`closebo${this.state.product.id}`} >
                        <MdClose className="out-book__icon-close" />
                    </label>
                    {/* <label htmlFor="turma" >Turma:</label> */}
                    <input autoFocus className="out-book__input-field" type="text" id="turma" placeholder="Turma" />
                    <input className="out-book__input-field" type="number" id="turma" placeholder="Quantidade" />
                    <button className="out-book__buttom-field" type="button"  >Cadastrar</button>
                </section>
            </div>
        )
    }
}