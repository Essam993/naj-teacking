import { useState } from 'react';
import {
    CarOutlined,
    DeploymentUnitOutlined,
    EnvironmentOutlined,
    TruckOutlined,
    UsergroupAddOutlined,
    UserSwitchOutlined,
    CaretDownOutlined,
    CaretRightOutlined,
    SendOutlined,
    ShopOutlined,
    ProductOutlined,
    BarChartOutlined
} from '@ant-design/icons';
import { Button, Flex, Menu, MenuProps } from 'antd';
import { Link } from 'react-router-dom';
import { StyledSider } from './sideMenu.styles';
import DynamicDrawer from '../DynamicDrawer';
import OrderForm from '../../pages/Orders/OrderForm';

const SideMenu = ({ collapsed }: { collapsed: boolean }) => {
    const [openDrawer, setOpenDrawer] = useState(false);
    const items: MenuProps['items'] = [
        {
            key: 'operations',
            icon: <DeploymentUnitOutlined />,
            label: 'Operations',
            children: [
                {
                    key: 'operations-dashboard',
                    icon: <ShopOutlined />,
                    label: <Link to="/dashboard">Dashboard</Link>,
                },
                {
                    key: 'operations-statistics',
                    icon: <BarChartOutlined />,
                    label: <Link to="/statistics">Statistics</Link>,
                },
                {
                    key: 'operations-users',
                    icon: <UserSwitchOutlined />,
                    label: <Link to="/users">Users</Link>,
                },
                {
                    key: 'operations-customers',
                    icon: <UserSwitchOutlined />,
                    label: <Link to="/customers">Customers</Link>,
                },
                {
                    key: 'operations-roles',
                    icon: <DeploymentUnitOutlined />,
                    label: <Link to="/roles">Roles</Link>,
                },
            ],
        },
        {
            key: 'resources',
            icon: <DeploymentUnitOutlined />,
            label: 'Resources',
            children: [
                {
                    key: 'resources-orders',
                    icon: <ProductOutlined />,
                    label: <Link to="/orders">Orders</Link>,
                },
                {
                    key: 'resources-drivers',
                    icon: <UsergroupAddOutlined />,
                    label: <Link to="/drivers">Drivers</Link>,
                },
                {
                    key: 'resources-trucks',
                    icon: <TruckOutlined />,
                    label: <Link to="/trucks">Trucks</Link>,
                },
                {
                    key: 'resources-cars',
                    icon: <CarOutlined />,
                    label: <Link to="/cars">Cars</Link>,
                },
                {
                    key: 'resources-suppliers',
                    icon: <DeploymentUnitOutlined />,
                    label: <Link to="/suppliers">Suppliers</Link>,
                },
                {
                    key: 'resources-places',
                    icon: <EnvironmentOutlined />,
                    label: <Link to="/places">Places</Link>,
                },
            ],
        },
    ];


    return (
        <StyledSider trigger={null} collapsible collapsed={collapsed}>
            <Flex vertical>
                <Button type="primary" style={{ margin: '10px 5px 0' }} onClick={() => setOpenDrawer(true)}><SendOutlined /> Create New Order</Button>
                <Menu
                    theme="light"
                    defaultSelectedKeys={['operations-dashboard']}
                    defaultOpenKeys={['operations', 'resources']}
                    mode="inline"
                    items={items}
                    expandIcon={({ isOpen }) =>
                        isOpen ? <CaretDownOutlined /> : <CaretRightOutlined />
                    }
                />
            </Flex>
            <DynamicDrawer
                fields={<OrderForm />}
                title={'Create Order'}
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
            />
        </StyledSider>
    );
};

export default SideMenu;
