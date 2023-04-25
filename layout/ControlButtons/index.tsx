import { IconButton } from "@mui/material"
import { ControlsButtonsS } from "./styled"
import LocalMallIcon from '@mui/icons-material/LocalMall';
// import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { useDispatch, useSelector } from "react-redux";
import { changeDanwer } from "stores/slices/diffState";
import Badge from '@mui/material/Badge';
import { selectBasket } from "stores/slices/basket";

const ControlButtons = () => {

  const dispatch = useDispatch()

  const basket = useSelector(selectBasket)

  const openDanwer = () => {
    dispatch(changeDanwer(true))
  }

  return (
    <ControlsButtonsS>
      {/* <IconButton aria-label="delete" size="large">
        <PersonOutlineIcon />
      </IconButton> */}
      <IconButton aria-label="delete" size="large" onClick={() => openDanwer()}>
        {basket.length ? <Badge badgeContent={basket.length} color="primary">
          <LocalMallIcon />
        </Badge> : <LocalMallIcon />}
      </IconButton>
    </ControlsButtonsS>
  )
}

export default ControlButtons