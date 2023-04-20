import { ImageDiv, CreatingSiteSvg, FormHeaderText } from "./form-header.styles";

const FormHeader = ()=>{
    return (
        <ImageDiv>
            <CreatingSiteSvg />
            <FormHeaderText>Enter your post details</FormHeaderText>
        </ImageDiv>
    )
}

export default FormHeader;