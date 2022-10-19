import React from 'react';
import { Layout } from 'antd';
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
    </Header>
  );
};

export default HeaderComp;
