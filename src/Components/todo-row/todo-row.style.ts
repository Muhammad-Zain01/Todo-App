import styled from "styled-components";

export const Todos = styled.div`
    display: flex;
    border: 1px solid #f4f4f4;
    padding: 10px;
    align-items: center;
    border-radius: 4px;
    justify-content: space-between;
    margin: 10px 0px;

    .row-container{
        display: flex;
        width: 75%;
    }
    &:hover{
        border: 1px solid #e7e7e7;
    }
    button{
        margin: 0px 0px 0px 10px;
    }
    .action-container{
        display: flex;
        width: 25%;
    }

    .add-decoration{
        text-decoration: line-through
    }
`