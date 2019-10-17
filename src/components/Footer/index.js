import React, { Fragment } from 'react';
import { MdLibraryAdd} from "react-icons/md";
import NewProduct from '../NewProduct';

import './style.css'

export default (props) => (
    <Fragment>
        <div className="add-product">
            <label htmlFor="close" className="add-product__icon-button">
                <MdLibraryAdd />
            </label>
        </div>
        <input type="checkbox" id="close" className="add-product__magic-show" />

        {/* 
            repassando a função do avô para o neto - 
            comunicação indireta de componentes
            forma alternativa ao redux, já que o projeto é pequeno
        */}
        <NewProduct addProduct={props.addProduct.bind(this)} />
    </Fragment>
)