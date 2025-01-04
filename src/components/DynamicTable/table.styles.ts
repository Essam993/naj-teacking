import { Popover, Row, Table } from "antd";
import styled from "styled-components";

export const StyledTable = styled(Table)`
    thead th,
    tbody td {
        padding: 8px 16px !important;
    }
`

export const StyledTableTopBar = styled(Row)`
    border-bottom-width: 1px;
    display: flex;
    justify-content: space-between;
    min-width: 100%;
    max-width: 100%;
    width: 100%;
    padding: 10px 24px 10px 36px;
    height: 57px;

    .ant-btn{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .table-title{
        text-align: left;
        display: inline-block;
        min-width: 100px;
        font-weight: 400;
        font-size: 20px
    }
`

export const StyledPopover = styled(Popover)`
        .ant-popover-content{
            display: block;
            max-width: 50% !important;
        }

        .ant-popover-content .ant-popover-inner{
            padding: 0 0 0 0 !important;
            
    }
`