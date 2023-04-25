import styled from "styled-components";

export const BUTTON_TYPE_MAP = {
    default: 'default',
    red: 'red',
    blue: 'blue',
}

const BUTTON_TYPE = {
    default: 'var(--dark-blue)',
    red: 'var(--red)',
    blue: 'var(--blue)',
}

export const DefaultButton = styled.button`
    border-radius: 7px;
    color: white;
    background: ${({buttonType})=> BUTTON_TYPE[buttonType] || BUTTON_TYPE['default'] };
    box-shadow: 0 4px 14px 0 rgba(0,118,255,0.39);
    padding: 0 2rem;
    border: none;
    height: 2.5rem;
    font-weight: 500;
    line-height: 2.5rem;
    margin: 25px auto;
    width: 250px;
    display: block;
    font-weight: 600;
    font-size: 18px;
    cursor: pointer;
`;