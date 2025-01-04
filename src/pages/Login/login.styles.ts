import styled from "styled-components";

export const LoginWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: radial-gradient( circle at 20% 100%, rgba(184, 184, 184, 0.1) 0%, rgba(184, 184, 184, 0.1) 33%, rgba(96, 96, 96, 0.1) 33%, rgba(96, 96, 96, 0.1) 66%, rgba(7, 7, 7, 0.1) 66%, rgba(7, 7, 7, 0.1) 99%), linear-gradient(40deg, #040a22, #162561, #202e64, #6f7aa6);
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;

    form{
        background: #fff;
        padding: 40px;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 500px;
        
        img{
            margin-bottom: 30px;
            
        }

        .ant-input{
            height: 45px;
            margin-bottom: 15px;
        }

        .ant-btn{
            width: 100%;
            height: 45px;
            background: rgb(1 49 136);

            &:hover{
                background-color: rgb(2, 35, 67) !important;
            }
        }
    }

`