import { TextInputWrapper } from "../text-input/text-input.styles";
import { ImageInputButton } from "./image-input.styles";

const InputImage = ({ handleImageInput }) => {
  return (
    <TextInputWrapper>
    <label>
      <ImageInputButton
        type="file"
        onChange={handleImageInput}
        accept="image/*"
      />
    </label>
    </TextInputWrapper>
  );
};

export default InputImage;
