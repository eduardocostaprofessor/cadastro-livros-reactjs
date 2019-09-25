import React, { Fragment } from 'react';
import { MdLibraryAdd} from "react-icons/md";
import NewProduct from '../NewProduct';

import './style.css'

export default () => (
    <Fragment>
        <div className="add-product">
            <label htmlFor="close" className="add-product__icon-button">
                <MdLibraryAdd />
            </label>
        </div>
        <input type="checkbox" id="close" className="add-product__magic-show" />

        <NewProduct />
    </Fragment>
)