import { Body, ModalS } from "./styled";
import { Open_Sans } from "next/font/google";
import CloseIcon from '@mui/icons-material/Close';
import { IconButton, Typography } from "@mui/material";
import { changeModal, selectAllState } from "stores/slices/diffState";
import { useDispatch, useSelector } from "react-redux";
import Slider from "components/Slider";
// import Label from "components/Label";
import Price from "components/Price";
import BuyButton from "components/BuyButton";
import { selectProduct } from "stores/slices/products";

const openSans = Open_Sans({ subsets: ["latin", "cyrillic"] });

const Modal = () => {
  const { modal } = useSelector(selectAllState);
  const product = useSelector(selectProduct);

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(changeModal(false));
  };

  return (
    <ModalS open={modal} onClose={handleClose} className={openSans.className}>
      {product?.titleParent && <Body>
        <div className="close-button">
          <IconButton aria-label="close" size="small" onClick={() => handleClose()}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </div>
        <div>
          <Slider data={product.images.data.map((item: any) => item.attributes.url)} />
        </div>
        <div>
          <Typography variant="h2">{product.titleParent} - {product.title}</Typography>
          {/* <Label /> */}
          <Price data={product} big />
          <Typography component="div"><p>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus liberpuro ate vol faucibus adipiscing.</p></Typography>
          <hr />
          <BuyButton product={{id: product.idParent, idVariant: product.id}} big />
        </div>
      </Body>}
    </ModalS>
  );
};

export default Modal;
