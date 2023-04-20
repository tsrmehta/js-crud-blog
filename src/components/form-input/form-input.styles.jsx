import styled from "styled-components";


export const FormTextInput = styled.input`
    border: 2px solid var(--dark-blue);
    outline: none;
    background: rgb(239, 239, 239);
    margin-top: 10px;
    border-radius: 7px;
    height: 25px;
    :focus-visible{
        /* outline: none; */
        border-color: var(--yellow);
    }
`;