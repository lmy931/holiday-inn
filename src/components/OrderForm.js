import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import hotelsByProvince from '../data/hotelsByProvince';

const OrderForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const province = queryParams.get('province'); // 获取省份参数

  const [quantity, setQuantity] = useState('');
  const [selectedHotel, setSelectedHotel] = useState('');

  const handleOrderSubmit = async (event) => {
    event.preventDefault();
    navigate('/confirmation');
    // try {
    //   // 假设的 API 请求发送订单详情
    //   const response = await fetch('YOUR_API_ENDPOINT', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ orderDetails: { quantity, selectedHotel } }),
    //   });

    //   if (response.ok) {
    //     navigate('/confirmation');
    //   } else {
    //     console.error('Failed to submit order:', response.statusText);
    //   }
    // } catch (error) {
    //   console.error('Failed to submit order:', error);
    // }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">订购表单</h1>
      <form onSubmit={handleOrderSubmit}>
        <div className="mb-3">
          <label htmlFor="quantity" className="form-label"><strong>订购箱数</strong></label>
          <input
            type="number"
            className="form-control"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="请输入订购箱数"
            min="1"
            required
          />
        </div>
        {province && hotelsByProvince[province] && (
          <div className="mb-3">
            <label htmlFor="hotelSelect" className="form-label"><strong>选择酒店</strong></label>
            <select
              id="hotelSelect"
              className="form-control"
              value={selectedHotel}
              onChange={(e) => setSelectedHotel(e.target.value)}
              required
            >
              <option value="">请选择酒店</option>
              {hotelsByProvince[province].map((hotel, index) => (
                <option key={index} value={hotel}>{hotel}</option>
              ))}
            </select>
          </div>
        )}
        <div className="text-center">
          <button type="submit" className="btn btn-primary">提交订单</button>
        </div>
      </form>
    </div>
  );
}

export default OrderForm;
