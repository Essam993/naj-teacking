import styled from "styled-components";

export const CustomPageHeader = styled.h1`
    padding: 20px;
    margin-top: 0;
    border-radius: 8px;
    background: #fafafa;
    border: 1px solid #d9d9d9;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .ant-btn{
        padding: 0 30px;
        border-radius: 5px;
        height: 40px;
        font-size: 16px;
        background: rgb(2, 35, 67) !important;

        span{
        color: white;
        }
    }
`