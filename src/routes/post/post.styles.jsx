import styled, { keyframes } from "styled-components";

export const PostWrapper = styled.div`
  max-width: 800px;
  margin: 20px auto;
`;

const zoomImage = keyframes`
  0% {transform: scale(1.5)}
  100% {transform: scale(1)}
`;

export const PostImageDiv = styled.div`
  background: ${({ backgroundImageUrl }) => `url(${backgroundImageUrl})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 500px;
  max-width: 800px;
  border-radius: 7px;
  margin: auto;
  animation: 0.3s ${zoomImage} ease-in-out;
`;
const headingAnimation = keyframes`
    0% {
    transform:scaleX(0);
    transform-origin:left;
  }
  100% {
    transform:scaleX(1);
    transform-origin:left;
  }
`;

export const BaseHeadingDiv = styled.div`
  font-size: 50px;
  font-weight: 700;
  background: #fff;
  border-radius: 0 0 7px 0;
  overflow: hidden;
  animation: 0.5s ${headingAnimation} ease-in-out;
  animation-delay: 0.3s;
  animation-fill-mode: both;
`;
export const FirstHeadingDiv = styled(BaseHeadingDiv)`
  width: 80%;
`;

export const SecondHeadingDiv = styled(BaseHeadingDiv)`
  width: 60%;
`;

export const ThirdHeadingDiv = styled(BaseHeadingDiv)`
  width: 40%;
`;

const reveal = keyframes`
  0% {
    opacity: 0 ;
    transform: translate(0,100%);
}
100% {
      opacity: 1;
    transform: translate(0,0);
  }
`;

export const TextRevealingSpan = styled.span`
  display: block;
  animation: ${reveal} 1s cubic-bezier(0.77, 0, 0.175, 1) 0.5s;
  animation-delay: 0.5s;
  animation-fill-mode: both;
`;

export const BlogDescription = styled.span`
  color: var(--secondary-text);
  margin: 5px;
  display: block;
`;

export const BlogParagraph = styled.p`
  text-align: justify;
  padding: 5px;
  margin-top: 20px;
  /* white-space: pre-line; */
`;
