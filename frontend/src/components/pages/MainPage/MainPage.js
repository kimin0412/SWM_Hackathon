import React from 'react';
import { Layout } from 'antd';

<<<<<<< HEAD
import { Filter } from '../../organisms/Filter';
// import { Map } from '../../organisms/Map';
import { MinjunMap } from '../../organisms/Map';
=======
import { FilterMenu } from '../../organisms/FilterMenu';
import { Map } from '../../organisms/Map';
>>>>>>> frontend

const { Header, Content, Footer, Sider } = Layout;

export const MainPage = () => {
  return (
    <Layout>
      <Sider breakpoint="lg" collapsedWidth="0">
        <div className="logo" />
<<<<<<< HEAD
        <Filter />
=======
        <FilterMenu />
>>>>>>> frontend
      </Sider>
      <Layout>
        <Header
          className="site-layout-sub-header-background"
          style={{ padding: 0, paddingLeft: 20 }}
        >
          SWM HACKATHON TEAM NAME
        </Header>
        <Content style={{ margin: '24px 16px 0' }}>
<<<<<<< HEAD
          <MinjunMap />
=======
          <Map />
>>>>>>> frontend
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
