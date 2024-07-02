import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const province = queryParams.get('province'); // 获取省份参数

  const provinces = {
    '安徽': 'anhui.png',
    '北京': 'beijing.png',
    '重庆': 'chongqing.png',
    '福建': 'fujian.png',
    '甘肃': 'gansu.png',
    '广东': 'guangdong.png',
    '湖北': 'hubei.png',
    '湖南': 'hunan.png',
    '江苏': 'jiangsu.png',
    '辽宁': 'liaoning.png',
    '山东': 'shandong.png',
    '山西': 'shanxi.png',
    '四川': 'sichuan.png',
    '天津': 'tianjin.png',
    '浙江': 'zhejiang.png'
  };

  const navigateToOrderForm = () => {
    navigate('/order');
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">欢迎来到 {province}</h1>
      {province && (
        <div className="text-center mb-4">
          <img
            src={`${process.env.REACT_APP_BASE_URL}/images/provinces/${provinces[province]}`}
            alt={province}
            className="img-fluid rounded"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
      )}
      <div>
        <p className="lead"><strong>产品特点：</strong></p>
        <ul className="list-unstyled">
          <li><strong>天然成分</strong>：精选天然植物精华，无添加任何人工合成香料，确保每一滴香氛都纯净无害。</li>
          <li><strong>持久留香</strong>：独特的配方设计，香气持久，不易散去，全天候保持怡人气息。</li>
          <li><strong>优雅瓶身</strong>：简约大方的设计，适合各种场合的摆放，是家居装饰的点睛之笔。</li>
          <li><strong>享受和风花语</strong>：开启一段与众不同的芳香之旅。</li>
        </ul>
        <div className="text-center mt-5">
          <button className="btn btn-primary" onClick={navigateToOrderForm}>一键下单</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
