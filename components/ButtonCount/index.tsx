import Button from "components/Button"
import { ButtonCountS } from "./styled"
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { FC } from "react";

interface IButtonCount {
  big?: boolean;
  vertical?: boolean;
  handleChange: (type: string) => void;
  count: number;
}

const ButtonCount: FC<IButtonCount> = ({big = false, vertical = false, handleChange, count}) => {
  return (
    <ButtonCountS big={big} vertical={vertical}>
      <Button onClick={() => handleChange("-")} size={big ? "large" : "small"} variant="outlined"><RemoveIcon /></Button>
      <span>{count}</span>
      <Button onClick={() => handleChange("+")} size={big ? "large" : "small"} variant="outlined"><AddIcon /></Button>
    </ButtonCountS>
  )
}

export default ButtonCount