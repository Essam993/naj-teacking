import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import { Spin } from 'antd';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const Main = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading effect
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Spin size="large" />
    </div>
  ) : (
    <App />
  );
};

root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
