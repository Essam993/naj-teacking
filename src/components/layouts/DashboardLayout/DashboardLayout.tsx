import React, { useState } from 'react';
import SideMenu from '../../SideMenu';
import { GlobalOutlined, InboxOutlined, LayoutOutlined, MessageOutlined } from '@ant-design/icons';
import { Layout as AntdLayout, theme, Menu, Button, Flex } from 'antd';
import { Link } from 'react-router-dom';
import { CustomToggleBtn } from '../../SideMenu/sideMenu.styles';

const { Header, Content } = AntdLayout;

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const [collapsed, setCollapsed] = useState(false);
    const [userMenuVisible, setUserMenuVisible] = useState(false);

    const toggleUserMenu = () => {
        setUserMenuVisible(!userMenuVisible);
    };

    const userMenu = (
        <Menu
            style={{
                position: 'absolute',
                right: 0,
                top: 48,
                width: 150,
                zIndex: 1000,
                backgroundColor: colorBgContainer,
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
            }}
            onClick={() => setUserMenuVisible(false)}
        >
            <Menu.Item key="profile">
                <a href="#">Profile</a>
            </Menu.Item>
            <Menu.Item key="logout">
                <Link to="/">Logout</Link>
            </Menu.Item>
        </Menu>
    );

    return (
        <AntdLayout style={{ minHeight: '100vh' }}>
            <Header style={{ padding: '15px 20px', background: colorBgContainer, borderBottom: '1px solid #e5e7eb' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 30 }}>
                        <img src="logo-en.png" width={120} alt="" />
                        <CustomToggleBtn
                            icon={<LayoutOutlined />}
                            onClick={() => setCollapsed(!collapsed)}
                        />
                    </div>
                    <Flex gap={10} justify="flex-end" align="center" style={{ position: 'relative' }}>
                        <Button><GlobalOutlined /></Button>
                        <Button><InboxOutlined /></Button>
                        <Button><MessageOutlined /></Button>
                        <Button style={{ border: 'none' }} onClick={toggleUserMenu}>
                            <span style={{ display: 'flex', alignItems: 'center' }}>
                                <img style={{ width: 40, height: 40, marginRight: 10 }} src="https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369988.png" alt="" />
                                Ahmed Essam
                            </span>
                        </Button>
                        {userMenuVisible && userMenu}
                    </Flex>
                </div>
            </Header>
            <AntdLayout>
                <SideMenu collapsed={collapsed} />
                <Content
                    style={{
                        margin: '0',
                        padding: '0',
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    {children}
                </Content>
            </AntdLayout>
        </AntdLayout>
    );
};

export default Layout;
