import { HomeOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';
import { useLocation } from 'react-router-dom';
const HeaderNaviCompo = () => {
  const location = useLocation();

  return (
    <Breadcrumb
      style={{
        margin: '16px 0',
      }}
    >
      <Breadcrumb.Item href="/">
        <HomeOutlined />
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        {location.pathname === '/' ? <span>Main</span> : <p>Board</p>}
      </Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default HeaderNaviCompo;
