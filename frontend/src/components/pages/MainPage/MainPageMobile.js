import React, { useEffect, useState } from 'react';
import { Layout, Row, Col } from 'antd';
import { history } from '../../../store/store';
import { FilterMenu } from '../../organisms/FilterMenu';
import { Map } from '../../organisms/Map';
const { Header } = Layout;

export const MainPageMobile = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  useEffect(() => {
    if (width > 800) {
      history.push('/');
    }
  }, [width]);

  return (
    <Layout>
      <Header
        className="site-layout-sub-header-background"
        style={{ padding: 0, paddingLeft: 20 }}
      >
        SWM HACKATHON TEAM NAME
      </Header>
      <Layout style={{ margin: 10 }}>
        <Row gutter={[8, 8]}>
          <Col span={24}>
            <Map mobile={true} />
          </Col>
          <Col span={24}>
            <FilterMenu mobile={true} />
          </Col>
        </Row>
      </Layout>
    </Layout>
  );
};
