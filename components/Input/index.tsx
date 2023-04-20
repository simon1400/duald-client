import { FC } from "react";
import { InputS } from "./styled";
import { StandardTextFieldProps } from "@mui/material";

interface IInput extends StandardTextFieldProps {
  rounded?: boolean;
}

const Input: FC<IInput> = ({ label, placeholder, ...rest }) => {
  return <InputS size="small" label={label} variant="outlined" placeholder={placeholder} {...rest} />;
};

export default Input;
