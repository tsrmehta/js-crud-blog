import { forwardRef } from "react";

import Tag from "../tags/tags.component";

import { TagTextBox } from "./tag-input.styles";
import { TextInputWrapper } from "../text-input/text-input.styles";

const TagInput = forwardRef(
  ({ handleDivChange, handleKeyUpEvent, keywords, labelText, removeTag }, ref) => {
    return (
      <TextInputWrapper>
      {
        labelText?<label>{labelText}</label>:null
      }
        <TagTextBox
          ref={ref}
          key={Math.random()}
          contentEditable="true"
          onInput={handleDivChange}
          onKeyUp={handleKeyUpEvent}
          suppressContentEditableWarning={true}
        >
          {keywords?.map((keyword, i) => (
            <Tag key={i} index={i} keyword={keyword} removeTag={removeTag}/>
          ))}
        </TagTextBox>
      </TextInputWrapper>
    );
  }
);

export default TagInput;
