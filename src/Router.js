import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SiderComp from './components/MainLayout/SiderCompo';
import HeaderComp from './components/MainLayout/HeaderCompo';
import HeaderNaviCompo from './components/MainLayout/HeaderNaviCompo';
import FooterComp from './components/MainLayout/FooterCompo';
import Main from './pages/Main';
import Board from './pages/Board';
import Read from './pages/Read';
import { Layout } from 'antd';
import 'antd/dist/antd.css';

const { Content } = Layout;
const Router = () => {
  return (
    <BrowserRouter>
      <Layout
        style={{
          minHeight: '100vh',
        }}
      >
        <SiderComp />
        <Layout className="site-layout">
          <HeaderComp />
          <Content
            style={{
              margin: '16px',
              padding: '16px',
              backgroundColor: 'white',
            }}
          >
            <HeaderNaviCompo />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/board" element={<Board />} />
              <Route path="/read/:id" element={<Read />} />
            </Routes>
          </Content>
          <FooterComp />
        </Layout>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
