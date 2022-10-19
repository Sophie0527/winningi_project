import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  UserOutlined,
} from '@ant-design/icons';
const { Sider } = Layout;

const SiderComp = () => {
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
  };

  const items = [
    getItem('메인', '1', <UserOutlined />),
    getItem('게시판', '2', <PieChartOutlined />),
    getItem('개인설정', '3', <DesktopOutlined />),
  ];

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={value => setCollapsed(value)}
    >
      <div className="logo" />
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
