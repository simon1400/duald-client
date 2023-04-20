import { IconButton } from "@mui/material"
import { ControlsButtonsS } from "./styled"
import LocalMallIcon from '@mui/icons-material/LocalMall';
// import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { useDispatch } from "react-redux";
import { changeDanwer } from "stores/slices/diffState";

const ControlButtons = () => {

  const dispatch = useDispatch()

  const openDanwer = () => {
    dispatch(changeDanwer(true))
  }

  return (
    <ControlsButtonsS>
      {/* <IconButton aria-label="delete" size="large">
        <PersonOutlineIcon />
      </IconButton> */}
      <IconButton aria-label="delete" size="large" onClick={() => openDanwer()}>
        <LocalMallIcon />
      </IconButton>
    </ControlsButtonsS>
  )
}

export default ControlButtons