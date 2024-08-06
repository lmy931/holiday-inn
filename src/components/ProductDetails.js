import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/ProductDetails.css';  // 引入自定义 CSS 文件
import provinceDetails from '../data/provinceDetails';  // 省份说明的文件
import { provinces } from '../data/provinces'; // 引入省份数据

const ProductDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const province = queryParams.get('province'); // 获取省份参数

  const provinceData = provinces.find(p => p.name.toLowerCase() === province);

  if (!provinceData) {
    navigate('/');
    return null; // 返回 null 以防止页面继续渲染
  }

  const navigateToOrderForm = () => {
    navigate(`/order?province=${province}`);
  };

  return (
    <div className="container mt-5">
      {province && (
        <div className="text-center mb-4">
          <img
            src={`${process.env.REACT_APP_BASE_URL}/images/provinces/${provinceData.img}`}
            alt={province}
            className="product-image"
          />
        </div>
      )}
      <div>
        <p className="lead"><strong>产品特点：</strong></p>
        <ul className="list-unstyled">
        {provinceDetails[province] && provinceDetails[province].split(/[,，;；]/).map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
        </ul>
        <div className="text-center mt-5 mb-5">
          <button className="btn btn-primary" onClick={navigateToOrderForm}>一键下单</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
