import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/ProductDetails.css';  // 引入自定义 CSS 文件
import provinceDetails from './provinceDetails';  // 省份说明的文件

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
    '广西': 'guangxi.png',
    '贵州': 'guizhou.png',
    '海南': 'hainan.png',
    '河北': 'hebei.png',
    '黑龙江': 'heilongjiang.png',
    '河南': 'henan.png',
    '湖北': 'hubei.png',
    '湖南': 'hunan.png',
    '江苏': 'jiangsu.png',
    '江西': 'jiangxi.png',
    '吉林': 'jilin.png',
    '辽宁': 'liaoning.png',
    '内蒙古': 'neimenggu.png',
    '宁夏': 'ningxia.png',
    '青海': 'qinghai.png',
    '山东': 'shandong.png',
    '山西': 'shanxi.png',
    '陕西': 'shanxi3.png',
    '上海': 'shanghai.png',
    '四川': 'sichuan.png',
    '天津': 'tianjin.png',
    '新疆': 'xinjiang.png',
    '云南': 'yunnan.png',
    '浙江': 'zhejiang.png'
  };

  const navigateToOrderForm = () => {
    navigate(`/order?province=${province}`);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">欢迎来到 {province}</h1>
      {province && (
        <div className="text-center mb-4">
          <img
            src={`${process.env.REACT_APP_BASE_URL}/images/provinces/${provinces[province]}`}
            alt={province}
            className="product-image"
          />
        </div>
      )}
      <div>
        <p className="lead"><strong>产品特点：</strong></p>
        <ul className="list-unstyled">
          {provinceDetails[province] && provinceDetails[province].split('，').map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
        <div className="text-center mt-5">
          <button className="btn btn-primary" onClick={navigateToOrderForm}>一键下单</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
