import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/ProvinceSelector.css'; // 引入自定义CSS文件
import { ChinaMapPaths } from '../data/ChinaMapPaths'; // 引入SVG内容
import { provinces } from '../data/provinces'; // 引入省份数据

const ProvinceSelector = () => {
  const navigate = useNavigate();

  const handleProvinceClick = (event) => {
    let provinceName = event.target.getAttribute('name');
    if (provinceName) {
      // 转换省份名称为小写并去掉下划线
      provinceName = provinceName.replace(/_/g, '').toLowerCase();
      // 检查省份是否在列表中
      const province = provinces.find(p => p.name.toLowerCase() === provinceName);
      if (province) {
        navigate(`/products?province=${provinceName}`);
      } else {
        alert('选择的省份无效，请选择一个有效的省份');
      }
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
