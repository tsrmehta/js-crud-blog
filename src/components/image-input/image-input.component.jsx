import { useEffect } from "react";
import { TextInputWrapper } from "../text-input/text-input.styles";
import {
  ImageInputButton,
  AddImageIcon,
  ImageLabel,
  ImagePreview,
  ImageDataText
} from "./image-input.styles";
import { useState } from "react";

const InputImage = ({ handleImageInput, imageData }) => {
  const [preview, setPreview] = useState(null);
  useEffect(() => {
    // create the preview
    if (imageData) {
      const objectUrl = URL.createObjectURL(imageData);
      setPreview(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    }

    // free memory when ever this component is unmounted
  }, [imageData]);
  return (
    <TextInputWrapper>
      <ImageLabel>
        {preview ? <ImagePreview src={preview} /> : <AddImageIcon />}
        <ImageInputButton
          type="file"
          onChange={handleImageInput}
          accept="image/*"
        />
        <ImageDataText>
          {imageData?.name
            ? `Image uploaded: ${imageData.name}`
            : "Click to upload Image"}
        </ImageDataText>
      </ImageLabel>
    </TextInputWrapper>
  );
};

export default InputImage;
