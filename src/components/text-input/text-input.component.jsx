import { FormTextArea, FormLabel, TextInputWrapper } from "./text-input.styles";

const TextInput = ({ labelText, inputName, handleTextInput, inputValue }) => {
  return (
    <TextInputWrapper>
      {labelText ? <FormLabel>{labelText}</FormLabel> : null}
      <FormTextArea
        onChange={handleTextInput}
        name={inputName}
        value={inputValue}
      />
    </TextInputWrapper>
  );
};

export default TextInput;
