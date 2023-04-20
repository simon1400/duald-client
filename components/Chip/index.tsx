import { FC } from "react"
import { ChipS } from "./styled"
import { ChipProps } from "@mui/material"

interface IChip extends ChipProps {

}

const Chip: FC<IChip> = ({color = "primary", ...rest}) => {
  return (
    <ChipS color={color} size="small" {...rest} />
  )
}

export default Chip