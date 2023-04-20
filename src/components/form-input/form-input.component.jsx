import { FormTextInput } from "./form-input.styles";
import { TextInputWrapper,FormLabel } from "../text-input/text-input.styles";

const FormInput = ({ labelText, inputName, handleTextInput, inputValue }) => {
  return (
    <TextInputWrapper>
      {labelText ? <FormLabel>{labelText}</FormLabel> : null}
      <FormTextInput onChange={handleTextInput} value={inputValue} name={inputName} />
    </TextInputWrapper>
  );
};

export default FormInput;
