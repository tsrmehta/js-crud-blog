import styled from "styled-components";

export const PostSummaryContainer = styled.div`
  padding: 10px 20px;
  margin: 25px 0px;
  cursor: pointer;
  border: 2px solid #e9ecef;
  border-radius: 7px;
  background: var(--default-background);
`;

export const PostSummaryHeading = styled.h2`
  color: var(--blue);
  margin-bottom: 3px;
`;

export const PostSummaryDescription = styled.span`
  color: var(--secondary-text);
`;

export const PostSummaryBody = styled.p`
  font-size: 15px;
  color: var(--text);
  margin-top: 10px;
  text-align: justify;
`;

export const PostSummaryReadMore = styled.span`
  display: block;
  margin-top: 10px;
  font-weight: 600;
  font-size: 18px;
`;
