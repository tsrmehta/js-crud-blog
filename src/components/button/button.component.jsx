import { DefaultButton } from "./button.styles"

const CustomButton = ({buttonText, buttonType , ...otherProps})=>{
    return <DefaultButton buttonType={buttonType} {...otherProps}>{buttonText}</DefaultButton>
};

export default CustomButton;