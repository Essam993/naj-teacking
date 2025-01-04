import { Button } from "antd";
import Sider from "antd/es/layout/Sider";
import styled from "styled-components";

export const StyledSider = styled(Sider)`
    background-color: white;
    .ant-menu-item-selected{
        background-color: #013188;
        color: white;
    }

    .ant-flex {
        height: 100%;
        ul{
            height: 100%;
            border-right: 1px solid rgba(5, 5, 5, 0.06);
        }
    }

    .ant-menu-item,
    .ant-menu-submenu-title{
        height: 30px !important;
    }

    &.ant-layout-sider-collapsed{
        min-width: 0px !important;
        width: 0px !important;
        flex: 0 0 0px !important;
    }
`

export const CustomToggleBtn = styled(Button)`
    fontSize: 16px;
    background: transparent;
    borderRadius: 0;
    color: black;
    width: 100px;
    height: 100%;
`