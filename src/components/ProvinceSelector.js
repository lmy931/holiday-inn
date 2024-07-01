import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProvinceSelector = () => {
  const navigate = useNavigate();
  const provinces = [
    { name: '安徽', img: 'anhui.png' },
    { name: '北京', img: 'beijing.png' },
    { name: '重庆', img: 'chongqing.png' },
    { name: '福建', img: 'fujian.png' },
    { name: '甘肃', img: 'gansu.png' },
    { name: '广东', img: 'guangdong.png' },
    { name: '湖北', img: 'hubei.png' },
    { name: '湖南', img: 'hunan.png' },
    { name: '江苏', img: 'jiangsu.png' },
    { name: '辽宁', img: 'liaoning.png' },
    { name: '山东', img: 'shandong.png' },
    { name: '山西', img: 'shanxi.png' },
    { name: '四川', img: 'sichuan.png' },
    { name: '天津', img: 'tianjin.png' },
    { name: '浙江', img: 'zhejiang.png' }
  ];

  const handleProvinceClick = (provinceName) => {
    navigate(`/products?province=${provinceName}`);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">请选择您的省份</h1>
      <ul className="list-group">
        {provinces.map(province => (
          <li
            key={province.name}
            onClick={() => handleProvinceClick(province.name)}
            className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
            style={{ cursor: 'pointer' }}
          >
            {province.name}
            <span className="badge badge-primary badge-pill">&gt;</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProvinceSelector;
