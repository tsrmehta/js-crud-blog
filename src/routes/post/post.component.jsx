import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  PostImageDiv,
  PostWrapper,
  FirstHeadingDiv,
  SecondHeadingDiv,
  ThirdHeadingDiv,
  TextRevealingSpan,
  BlogDescription,
  BlogParagraph,
} from "./post.styles";

import { getRequest } from "../../utils/fetch-api.util";

const Post = () => {
  const { postId } = useParams();
  const [blogData, setBlogData] = useState({});

  const getPostData = async () => {
    const { response, error } = await getRequest(
      `http://localhost:8080/o/headless-delivery/v1.0/blog-postings/${postId}`
    );
    if (error) return console.log(error);
    setBlogData(response);
  };

  useEffect(() => {
    getPostData();
  }, []);

  return blogData.headline ? (
    <PostWrapper>
      <PostImageDiv
        backgroundImageUrl={`http://localhost:8080${blogData?.image?.contentUrl}`}
      >
        <FirstHeadingDiv>
          <TextRevealingSpan>
            {blogData?.headline?.substring(0, 25)}
          </TextRevealingSpan>
        </FirstHeadingDiv>
        <SecondHeadingDiv>
          <TextRevealingSpan>
            {blogData?.headline?.substring(25, 43)}
          </TextRevealingSpan>
        </SecondHeadingDiv>
        <ThirdHeadingDiv>
          <TextRevealingSpan>
            {blogData?.headline?.substring(43, 53)}
          </TextRevealingSpan>
        </ThirdHeadingDiv>
      </PostImageDiv>
      <BlogDescription>{blogData.description}</BlogDescription>
      <BlogParagraph>{blogData?.articleBody}</BlogParagraph>
    </PostWrapper>
  ) : null;
};

export default Post;
