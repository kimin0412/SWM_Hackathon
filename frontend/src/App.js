import "./App.css";

import { Layout } from "antd";
import Filter from "./components/Filter/Filter";
import Map from "./components/Map/Map";

const { Header, Content, Footer, Sider } = Layout;

function App() {
  return (
    <Layout>
      <Sider breakpoint="lg" collapsedWidth="0">
        <div className="logo" />
        <Filter />
      </Sider>
      <Layout>
        <Header
          className="site-layout-sub-header-background"
          style={{ padding: 0, paddingLeft: 20 }}
        >
          SWM HACKATHON TEAM NAME
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <Map />
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}

export default App;
