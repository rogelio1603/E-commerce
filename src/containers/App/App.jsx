import React, { Fragment } from 'react';
import Product from '../../components/NewProduct';
import Products from '../../components/Products';

function App() {
  return (
    <Fragment>
      <h1>In App</h1>
      <Product nombre="Bubu" />
      <Products />
    </Fragment>
  );
}

export default App;
