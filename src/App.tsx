import React from 'react';
import ShipmentLists from './components/ShipmentLists';
import ProductForm from './components/ProductForm';

const App = () => {

  return (
    <div className="App">
      <ProductForm />
      <ShipmentLists />
    </div>
  );
}

export default App;
