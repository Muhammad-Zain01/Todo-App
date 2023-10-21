import styled from "styled-components";
import { Typography } from "antd";

export const TodoAppContainer = styled.div`
    display: flex;
    justify-content: center;
`

export const TodoHeading = styled(Typography.Title)`
    text-align: center;
`

export const TodoApp = styled.div`
    width: 500px;

    button{
        width: 100%; 
    }
`