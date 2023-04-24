import { useNavigate } from "react-router-dom";
import {
  PostSummaryContainer,
  PostSummaryDescription,
  PostSummaryHeading,
  PostSummaryReadMore,
  PostSummaryBody,
} from "./post-summary.styles";

const PostSummary = ({ blogData }) => {
    const navigate = useNavigate();
    const goToPost = ()=>{
        navigate(`/post/${blogData.id}`)
    }
  return (
    <PostSummaryContainer onClick={goToPost}>
      <PostSummaryHeading>{blogData?.headline}</PostSummaryHeading>
      <PostSummaryDescription>{blogData?.description}</PostSummaryDescription>
      <PostSummaryBody>
        {blogData?.articleBody?.substring(0, 400)}...{" "}
        <PostSummaryReadMore>Read more</PostSummaryReadMore>
      </PostSummaryBody>
    </PostSummaryContainer>
  );
};

export default PostSummary;
