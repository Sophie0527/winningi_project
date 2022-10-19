import React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';
const { Header } = Layout;

const HeaderComp = () => {
  return (
    <Header
      className="site-layout-background"
      style={{
        // padding: 0,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        boxShadow: '4px 3px 5px rgba(160, 160, 160, 0.2)',
      }}
    >
      <img
        src="https://randomuser.me/api/portraits/women/62.jpg"
        alt="user_image"
        style={{
          width: '50px',
          height: '50px',
          borderRadius: '50px',
          border: '2px solid white',
        }}
      />
      <IdH1>13팀</IdH1>
    </Header>
  );
};

export default HeaderComp;

const IdH1 = styled.h1`
  color: white;
  margin-left: 10px;
`;
