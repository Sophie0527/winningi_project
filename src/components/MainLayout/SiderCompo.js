import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import styled from 'styled-components';
import { PieChartOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
const { Sider } = Layout;

const SiderComp = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [page, setPage] = useState('1');

  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }

  const onClick = e => {
    setPage(e.key);

    e.key === '1' ? navigate('/') : navigate('/board');
  };

  const items = [
    getItem('메인', '1', <UserOutlined />),
    getItem('게시판', '2', <PieChartOutlined />),
  ];

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={value => setCollapsed(value)}
    >
      <a href="/">
        <Logo>
          <h1>Wi</h1>
        </Logo>
      </a>

      <Menu
        theme="dark"
        defaultSelectedKeys={page}
        mode="inline"
        items={items}
        onClick={onClick}
      />
    </Sider>
  );
};

export default SiderComp;
const Logo = styled.div`
  float: left;
  max-width: 80px;
  width: 100%;
  height: 31px;
  margin: 20px;
  @media (max-width: 530px) {
    width: 50px;
    margin: 16px 10px;
  }

  h1 {
    font-size: 25px;
    line-height: 31px;
    text-align: center;
    font-weight: 700;
    color: white;
    letter-spacing: 2px;
    @media (max-width: 530px) {
      font-size: 20px;
      letter-spacing: 1px;
    }
  }
`;
