import { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";

import CustomButton from "../../components/button/button.component";
import { BUTTON_TYPE_MAP } from "../../components/button/button.styles";

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

import { getRequest, deleteRequest } from "../../utils/fetch-api.util";

const Post = () => {
  const navigate = useNavigate();
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

  const handleDeleteData = async()=>{
    const {response, error} = await deleteRequest(`http://localhost:8080/o/headless-delivery/v1.0/blog-postings/${postId}`)
    if(error) return console.log(error);

    console.log(response);
    navigate('/');

  };

  const handleEditPost =()=>{
    navigate(`/edit-post/${postId}`);
  }

  return blogData.headline ? (
    <div>
      <PostWrapper>
        <PostImageDiv
          backgroundImageUrl={`http://localhost:8080${blogData?.image?.contentUrl}`}
        >
          <FirstHeadingDiv>
            <TextRevealingSpan>
              {blogData?.headline?.substring(0, 26)}
            </TextRevealingSpan>
          </FirstHeadingDiv>
          <SecondHeadingDiv>
            <TextRevealingSpan>
              {blogData?.headline?.substring(26, 44)}
            </TextRevealingSpan>
          </SecondHeadingDiv>
          <ThirdHeadingDiv>
            <TextRevealingSpan>
              {blogData?.headline?.substring(44, 56)}
            </TextRevealingSpan>
          </ThirdHeadingDiv>
        </PostImageDiv>
        <BlogDescription>{blogData.description}</BlogDescription>
        <BlogParagraph>{blogData?.articleBody}</BlogParagraph>
        {/* <BlogParagraph>{blogData?.articleBody?.replace(/\n/g, "<br />")}</BlogParagraph> */}
      </PostWrapper>
      <div>
        <CustomButton onClick={handleEditPost} buttonText={"Edit"} buttonType={BUTTON_TYPE_MAP.blue} />
        <CustomButton onClick={handleDeleteData} buttonText={"Delete"} buttonType={BUTTON_TYPE_MAP.red} />
      </div>
    </div>
  ) : null;
};

export default Post;
