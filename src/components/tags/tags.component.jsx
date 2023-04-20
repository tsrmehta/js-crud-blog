import { TagContainer, XSign, XSignWrapper } from "./tags.styles";

const Tag = ({ index, keyword, removeTag }) => {
  return (
    <TagContainer contentEditable={false}>
      {keyword}
      <XSignWrapper onClick={() => removeTag(index)}>
        <XSign />
      </XSignWrapper>
    </TagContainer>
  );
};

export default Tag;
