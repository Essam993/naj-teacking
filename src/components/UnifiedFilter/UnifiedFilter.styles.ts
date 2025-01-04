import { Col, Row } from "antd";
import styled from "styled-components";

export const CustomFilterItemWrapper = styled(Col)`
    padding: 5px;
    
    .ant-input-number-input,
    .ant-input-number-input-wrap,
    .ant-input-number,
    .ant-input,
    .ant-picker,
    .ant-select{
        height: 38px;
        width: 100%;
    }

    label{
        font-weight: 600;
        display: block;
        margin: 15px 0px;
    }
`

export const StyledFilterRow = styled(Row)`
    justify-content: flex-start;
    align-items: center;
    margin: 5px 0;

    .card-header{
        border-bottom: 1px solid lightgray;
        padding-bottom: 10px;
        margin: 0;
        padding: 10px 0 20px;
    }

    .card-footer{
        padding-top: 10px;
        border-top: 1px solid lightgray;
    }
`