import React, { Fragment } from 'react';
import Producto from '../../components/NuevoProducto';
import Productos from '../../components/Productos';

function App() {
  return (
    <Fragment>
      <h1>Desde App</h1>
      <Producto nombre="Bubu" />
      <Productos />
    </Fragment>
  );
}

export default App;
