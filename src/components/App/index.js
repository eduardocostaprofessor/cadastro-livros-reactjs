import React, { Fragment } from 'react';
import './styles.css';
import Header from '../Header';
import SubHeader from '../SubHeader';
import ProductList from '../ProductList';
import AddProduct from '../Footer';

function App() {
  return (
    <Fragment>
        <Header />
      <div className="App">
        <SubHeader />
        <ProductList />
        <AddProduct />
      </div>
    </Fragment>
  );
}

export default App;
