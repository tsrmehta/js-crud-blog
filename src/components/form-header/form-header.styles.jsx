import styled from "styled-components";

import { ReactComponent as PostingBlogSvg } from "../../assets/Website Creator-bro.svg";

export const ImageDiv = styled.div`
  background: linear-gradient(45deg, rgba(54, 209, 220, 1), rgba(91, 134, 229, 1));
  color: var(--white-text);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const CreatingSiteSvg = styled(PostingBlogSvg)`
  width: 300px;
`;
