import React from 'react';
import OrderList from './components/OrderList';
import ProductForm from './components/ProductForm';

const App = () => {

  return (
    <div className="App">
      <ProductForm />
      <OrderList />
    </div>
  );
}

export default App;
