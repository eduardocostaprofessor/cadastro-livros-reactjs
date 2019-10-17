import React, { Component } from 'react';
// import axios from 'axios'
import './style.css';
import Product from '../Product';

export default class ProductList extends Component {

    render() {
        return (
            <section className="product-list">
                <div className="product-list__container">
                    {
                        this.props.products.map(product =>
                            <Product
                                key={product._id}
                                id={product._id}
                                title={product.title}
                                qtd={product.quantity}
                            // imageAddress={product.imageAddress}
                            />)
                    }
                </div>
            </section>
        )
    }
}



/* livros de testes
            productsData: [
                {
                    id: 6,
                    title: 'Desenvolvimento Web com React e Redux',
                    qtd: 2,
                    imageAddress: 'https://i.pinimg.com/originals/84/b1/06/84b1065e798f61aa80b8670a4b6fbb4d.png'
                },
                {
                    id: 2,
                    title: 'Excel',
                    qtd: 16,
                    imageAddress: 'https://s2.glbimg.com/caJWl-XvrSgaNHs43wCc4VflPH0=/0x0:620x336/984x0/smart/filters:strip_icc()/s.glbimg.com/po/tt2/f/original/2018/05/24/excel-excel-kommentare-drucken-excel-vba-function-mehrere-rckgabewerte.jpg'
                },
                {
                    id: 3,
                    title: 'Excel Avançado',
                    qtd: 10,
                    imageAddress: 'data:image/png;base64,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'
                },
                {
                    id: 5,
                    title: 'Photoshop',
                    qtd: 15,
                    imageAddress: 'https://l3software.com.br/wp-content/uploads/2018/05/site17.jpg'
                },
                {
                    id: 7,
                    title: 'Informática Básica',
                    qtd: 10,
                    imageAddress: 'https://images.tcdn.com.br/img/img_prod/104003/curso_online_videoaula_sobre_excel_2881_1_20190525123710.jpg'
                },
                {
                    id: 8,
                    title: 'Informática Básica',
                    qtd: 10,
                    imageAddress: 'https://images.tcdn.com.br/img/img_prod/104003/curso_online_videoaula_sobre_excel_2881_1_20190525123710.jpg'
                },
                {
                    id: 1,
                    title: 'Informática Básica',
                    qtd: 10,
                    imageAddress: 'https://images.tcdn.com.br/img/img_prod/104003/curso_online_videoaula_sobre_excel_2881_1_20190525123710.jpg'
                },
            ]*/