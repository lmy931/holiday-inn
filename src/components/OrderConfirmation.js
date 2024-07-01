import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const OrderConfirmation = () => {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate('/');
  };

  return (
    <div className="container mt-5 text-center">
      <h1 className="mb-4">订单确认</h1>
      <p className="lead">恭喜你，下单成功！</p>
      <p>您的订单已成功提交，我们会尽快处理并发货。</p>
      <button className="btn btn-primary mt-3" onClick={goToHomePage}>返回首页</button>
    </div>
  );
}

export default OrderConfirmation;
