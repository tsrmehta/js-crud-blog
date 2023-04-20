import styled from "styled-components";

import { ReactComponent as XSignSVG } from "../../assets/cross.svg";

export const TagContainer = styled.span`
  border: 1px solid;
  padding: 5px;
  border-radius: 7px;
  margin: 5px;
  background: #fff;
  display: inline-block;
  /* display: flex; */
  width: fit-content;
  /* align-items: center; */
`;

export const XSignWrapper = styled.span`
  background: var(--red);
  border: 1px solid var(--dark-blue);
  border-radius: 50%;
  width: fit-content;
  margin-left: 5px;
  cursor: pointer;
  padding: 0 3px;
  height: fit-content;
`;

export const XSign = styled(XSignSVG)`
  width: 10px;
  fill: white;
`;
