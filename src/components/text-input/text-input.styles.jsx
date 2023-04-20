import styled from "styled-components";

export const TextInputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 20px;
    margin: 10px;
    `;

export const FormTextArea = styled.textarea`
    margin-top: 10px;
    height: 500px;
    background: #efefef;
    border-radius: 7px;
    border: 2px solid var(--dark-blue);
    padding: 10px;

    :focus-visible{
        outline: none;
        border-color: var(--yellow);
    }
`;

export const FormLabel = styled.label`

`