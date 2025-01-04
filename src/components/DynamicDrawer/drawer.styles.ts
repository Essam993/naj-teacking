import styled from "styled-components";
import { Col, Drawer, Flex } from "antd";

export const StyledDrawer = styled(Drawer)`
    .ant-input,
    .ant-select,
    .ant-input-number,
    .ant-picker,
    textarea  {
        width: 100%
    }

    .ant-btn{
        margin: 0 10px;
        width: 97%;
    }

    .ant-drawer-header-title{
        display: flex;
        flex-direction: row-reverse;

        .ant-drawer-close{
            border: 1px solid #d9d9d9;
            font-size: 11px;
        }

        .ant-drawer-title{
            font-size: 20px;
        }
    }

`

export const StyledUploadWrapper = styled(Flex)`
    .ant-tag{
        height: 29px;
        width: -webkit-fill-available;
        margin: 0 2px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .upload-data{
        h3{
            margin: 5px 0;
            font-size: 23px;
        }
    }
`

export const StyledInputWrapper = styled(Col)`
    margin-bottom: 16px;
    padding: 0 10px;

    label{
        font-weight: bold;
        margin-bottom: 5px;
        display: block;
    }
`