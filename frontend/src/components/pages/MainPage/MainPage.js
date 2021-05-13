import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';
import { history } from '../../../store/store';
import { FilterMenu } from '../../organisms/FilterMenu';
import { Map } from '../../organisms/Map';
const { Header, Sider, Content } = Layout;

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
      <Header style={{ padding: 0, height: '7vh' }} />
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
        <Content style={{ margin: '3vh 30px 15vh', overflow: 'initial' }}>
          <Map mobile={false} />
        </Content>
      </Layout>
    </Layout>
  );
};
