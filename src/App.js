import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProvinceSelector from './components/ProvinceSelector';
import ProductDetails from './components/ProductDetails';
import OrderForm from './components/OrderForm';
import OrderConfirmation from './components/OrderConfirmation';
import usePreloadImages from './components/usePreloadImages';

const App = () => {
  const provinces = [
    'anhui.png', 'beijing.png', 'chongqing.png', 'fujian.png', 'gansu.png', 
    'guangdong.png', 'hubei.png', 'hunan.png', 'jiangsu.png', 'liaoning.png',
    'shandong.png', 'shanxi.png', 'sichuan.png', 'tianjin.png', 'zhejiang.png'
  ];
  const imageUrls = provinces.map(province => `${process.env.REACT_APP_BASE_URL}/images/provinces/${province}`);
  usePreloadImages(imageUrls);

  return (
    <Router basename="/aroma-booking">
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
