import React, { useEffect, useState } from 'react';
import { Layout, Space } from 'antd';
import { history } from '../../../store/store';
import { FilterMenu } from '../../organisms/FilterMenu';
import { Map } from '../../organisms/Map';
const { Header, Sider, Content } = Layout;

const day = [
  'https://youtu.be/Ke-fgwOQuu4',
  'https://youtu.be/WgpHgYfiW9o',
  'https://youtu.be/WDqE5XCbOK8',
  'https://youtu.be/762tHUGbmfk',
];
const night = [
  'https://youtu.be/5db-S0iXqSY',
  'https://youtu.be/oTWB6OeST3Q',
  'https://youtu.be/z4v02AhFNDI',
  'https://youtu.be/inQr-cULHkc',
];

export const MainPage = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  useEffect(() => {
    if (width <= 800) {
      history.push('/mobile');
    }
  }, [width]);

  return (
    <Layout>
      <Header style={{ padding: 0, height: '7vh' }}>
        <Space style={{ float: 'right', marginRight: 30 }}>
          <a
            href={day[Math.floor(Math.random() * 4)]}
            target="_blank"
            rel="noreferrer"
          >
            <span role="img" float="right">
              ☀️
            </span>
          </a>
          <a
            href={night[Math.floor(Math.random() * 4)]}
            target="_blank"
            rel="noreferrer"
          >
            <span role="img" float="right">
              🌙
            </span>
          </a>
        </Space>
      </Header>
      <Layout className="site-body" style={{ marginLeft: 240 }}>
        <Sider
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
          }}
          width="240px"
        >
          <FilterMenu mobile={false} />
        </Sider>
        <Content style={{ margin: '3vh 17px 3vh', overflow: 'initial' }}>
          <Map mobile={false} />
        </Content>
      </Layout>
    </Layout>
  );
};
