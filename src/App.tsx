import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashboardLayout from './components/layouts/DashboardLayout';
import Drivers from './pages/Drivers';
import Trucks from './pages/Trucks';
import TrucksDetails from './pages/Trucks/TrucksDetails';
import Cars from './pages/Cars';
import Suppliers from './pages/Suppliers';
import Users from './pages/Users';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Places from './pages/Places';
import CarDetails from './pages/Cars/CarDetails';
import Roles from './pages/Roles';
import NotFound from './pages/NotFound';
import { ConfigProvider } from 'antd';
import Customers from './pages/Warehouse';
import OrderList from './pages/Orders';
import Statistics from './pages/Statistics';

const App: React.FC = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          colorPrimary: '#013188',
          borderRadius: 5,

          // Alias Token
          colorBgContainer: '#fff',
        },
        components: {
          Button: {
            boxShadow: 'none',
            colorPrimaryHover: '#013188',
          }
        }
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<DashboardLayout><Dashboard /></DashboardLayout>} />
          <Route path="/drivers" element={<DashboardLayout><Drivers /></DashboardLayout>} />
          <Route path="/statistics" element={<DashboardLayout><Statistics /></DashboardLayout>} />
          <Route path="/trucks" element={<DashboardLayout><Trucks /></DashboardLayout>} />
          <Route path="/cars" element={<DashboardLayout><Cars /></DashboardLayout>} />
          <Route path="/suppliers" element={<DashboardLayout><Suppliers /></DashboardLayout>} />
          <Route path="/users" element={<DashboardLayout><Users /></DashboardLayout>} />
          <Route path="/customers" element={<DashboardLayout><Customers /></DashboardLayout>} />
          <Route path="/orders" element={<DashboardLayout><OrderList /></DashboardLayout>} />
          <Route path="/roles" element={<DashboardLayout><Roles /></DashboardLayout>} />
          <Route path="/trucks/:truckId" element={<DashboardLayout><TrucksDetails /></DashboardLayout>} />
          <Route path="/cars/:carId" element={<DashboardLayout><CarDetails /></DashboardLayout>} />
          <Route path="/places" element={<DashboardLayout><Places /></DashboardLayout>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>

  );
};

export default App;