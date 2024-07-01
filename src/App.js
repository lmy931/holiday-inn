import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProvinceSelector from './components/ProvinceSelector';
import ProductDetails from './components/ProductDetails';
import OrderForm from './components/OrderForm';
import OrderConfirmation from './components/OrderConfirmation';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProvinceSelector />} />
        <Route path="/products" element={<ProductDetails />} />
        <Route path="/order" element={<OrderForm />} />
        <Route path="/confirmation" element={<OrderConfirmation />} />
      </Routes>
    </Router>
  );
}

export default App; // Ensure that you use `export default` here
