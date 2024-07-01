import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const OrderForm = () => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState('');

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
    //     body: JSON.stringify({ orderDetails: { quantity } }),
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
        <div className="text-center">
          <button type="submit" className="btn btn-primary">提交订单</button>
        </div>
      </form>
    </div>
  );
}

export default OrderForm;
