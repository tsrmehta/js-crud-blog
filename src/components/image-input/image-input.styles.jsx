import styled from "styled-components";

import { ReactComponent as AddSVG } from "../../assets/add.svg";

export const ImageLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid var(--dark-blue);
  border-radius: 7px;
  padding: 20px;
  background: var(--default-background);
`;

export const ImagePreview = styled.img`
  width: 200px;
`;

export const ImageInputButton = styled.input`
  display: none;
`;

export const AddImageIcon = styled(AddSVG)`
  width: 120px;
  fill: none;
  stroke: var(--dark-blue);
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
`;

export const ImageDataText = styled.span`
    margin-top: 10px;
`;
