import React, {Fragment} from 'react';
import Producto from '../../components/Producto';
import Productos from '../../components/Productos';

function App() {
  return (
    <Fragment>
      <h1>Desde App n.n/</h1>
      <Producto 
        nombre="Bubu"
      />
      <Productos />
    </Fragment>
  );
}

export default App;
