// src/App.js
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderComponent from './components/Header';
import FooterComponent from './components/Footer';
import './index.css';
import AppRoutes from './routes/AppRoutes.jsx';
import { Layout } from 'antd';

const { Content } = Layout;

const App = () => {
  return (
    <Router>
      <Layout>
        <HeaderComponent />
        <Content className="w-full h-full" style={{ marginTop: '6rem' }}>
          <AppRoutes />
        </Content>
        <FooterComponent />
      </Layout>
    </Router>
  );
};

export default App;
