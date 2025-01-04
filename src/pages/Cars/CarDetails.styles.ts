import { Col, Row, Table } from "antd";
import styled from "styled-components";

export const StyledTop = styled(Row)`
    padding: 15px 20px;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 8px;
    background: #fafafa;
    border: 1px solid #d9d9d9;

    h3{
        margin: 8px 0 0 0;
    }

    h5{
        margin: 0 0 8px 0;
        font-size: 14px;

        span{
            font-size: 16px;
            color: #001529;
            font-weight: 600;
            margin-right: 5px;
        }
    }

    span{
        font-size: 14px;
        color: #001529;
        font-weight: 500;

        &.price{
            font-weight: bold;
            color: black;
        }
    }
    
    .ant-btn{
        border-radius: 5px;
        background-color: rgb(2, 35, 67);
        height: 100%;
        span{
            color: white !important;
        }
    }
`

export const StyledTable = styled(Table)`
    thead{
        display: none
    }
`

export const StyledTableWrapper = styled(Col)`
    .table{
        width: 96%;
        border-radius: 0;
        // box-shadow: 0 2px 14px 0 lightgray;
        padding: 20px;
        margin: 0 0 0 auto;
    }
`