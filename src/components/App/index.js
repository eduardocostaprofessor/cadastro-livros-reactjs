import React, { Fragment, Component } from 'react';
import './styles.css';
import Header from '../Header';
import SubHeader from '../SubHeader';
import ProductList from '../ProductList';
import AddProduct from '../Footer';
import axios from 'axios';

export default class App extends Component {

  constructor() {
    super();

    //inicialização do state
    this.state = {
      products: [],
      dataPage: [],
    }
  }

  componentDidMount() {

    axios.get('http://localhost:3002/api/books/?page=1').then(res => {
      const products = res.data.docs;
      const { limit, page, pages, total } = res.data;
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


// export default (props) => {

//   return (
//     <Fragment>
//       <Header />
//       <div className="App">
//         <SubHeader />
//         <ProductList />
//         <AddProduct />
//       </div>
//     </Fragment>
//   );
// }