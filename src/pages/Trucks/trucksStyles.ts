import { Flex, Row } from "antd";
import styled from "styled-components";

export const StyledTruckDetailsWrapper = styled(Row)`
    gap: 20px
`

export const CustomTruckDetail = styled(Flex)`
    background: white;
    padding: 10px 20px;
    border-radius: 8px;
    border: 1px solid #d9d9d9;
    span{
        &.title{
            font-weight: bold;
            margin-right: 20px;
            min-width: 100px;
        }
    }
`

export const CustomTitle = styled.p`
    font-size: 24px;
    font-weight: bold;
    margin: 30px 10px;
`