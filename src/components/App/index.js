import React, { Fragment, Component } from 'react';

import { isAuthenticated } from '../../auth';
import { Route, Redirect } from "react-router-dom";
import './styles.css';
import Header from '../Header';
import SubHeader from '../SubHeader';
import ProductList from '../ProductList';
import AddProduct from '../Footer';
import axios from 'axios';
import { API_URL } from '../../config';
// console.log(isAuthenticated());

export default ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() === 'true' ? (
        // <App {...props} />
        <App />
      ) : (
          <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
        )
    }
  />
);

class App extends Component {

  constructor() {
    super();

    //inicialização do state
    this.state = {
      products: [],
      dataPage: [],
    }
  }

  componentDidMount() {
    console.log(API_URL);
    
    axios.get(`${API_URL}/books/?page=1`).then(res => {
      const products = res.data.docs;
      const { limit, page, pages, total } = res.data;
      console.log(res.data);
      
      this.setState({ products, dataPage: { limit, page, pages, total } });
    });
  }

  addProduct(product = null) {
    if (product !== null) {
      const newProducts = this.state.products;
      newProducts.push(product);
      this.setState({ products: newProducts });
    }
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div className="App">
          <SubHeader />
          <ProductList products={this.state.products} dataPage={this.state.dataPage} />
          <AddProduct addProduct={this.addProduct.bind(this)} />
        </div>
      </Fragment>
    );
  }
}