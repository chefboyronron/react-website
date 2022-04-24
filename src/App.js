import React from 'react';
import './App.css';
// Ant Design Stylesheet
import 'antd/dist/antd.min.css'

// Custom components
import Appheader from './components/common/header';
import AppHome from './views/home';
import AppFooter from './components/common/footer';

// Ant Design Component
import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="mainLayout">
      <Header>
        <Appheader/>
      </Header>
      <Content>
        <AppHome/>
      </Content>
      <Footer>
        <AppFooter/>
      </Footer>
    </Layout>
  );
}

export default App;