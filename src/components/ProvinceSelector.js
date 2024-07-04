import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/ProvinceSelector.css'; // 引入自定义CSS文件
import { ChinaMapPaths } from '../data/ChinaMapPaths'; // 引入SVG内容

const ProvinceSelector = () => {
  const navigate = useNavigate();

  const handleProvinceClick = (event) => {
    let provinceName = event.target.getAttribute('name');
    if (provinceName) {
      navigate(`/products?province=${provinceName}`);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">请选择您的省份</h1>
      <div
        className="china-map"
        onClick={handleProvinceClick}
        dangerouslySetInnerHTML={{ __html: ChinaMapPaths }}
      />
    </div>
  );
}

export default ProvinceSelector;
