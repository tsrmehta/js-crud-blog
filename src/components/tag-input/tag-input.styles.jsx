import styled from "styled-components";

export const TagTextBox = styled.div`
  min-height: 200px;
  padding: 10px;
  border: 2px solid var(--dark-blue);
  border-radius: 7px;
  background: #efefef;
  margin-top: 10px; 

  :focus-visible {
    outline: none;
    border-color: var(--red);
    /* outline-color: var(--yellow); */
  }
`;
