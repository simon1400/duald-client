import { IconButton } from "@mui/material"
import { ControlButtons } from "./styled"
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useDispatch } from "react-redux";
import { changeModal } from "stores/slices/diffState";
import { FC } from "react";
import { changeProduct } from "stores/slices/products";

interface IControlButtonsCard {
  data: any
}

const ControlButtonsCard: FC<IControlButtonsCard> = ({data}) => {

  const dispatch = useDispatch()

  const handleModal = () => {
    dispatch(changeModal(true))
    dispatch(changeProduct(data))
  }

  return (
    <ControlButtons>
      <IconButton aria-label="show-more" size="small" onClick={() => handleModal()}>
        <VisibilityIcon fontSize="small" />
      </IconButton>
    </ControlButtons>
  )
}

export default ControlButtonsCard