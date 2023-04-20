import { IconButton, SwipeableDrawer } from "@mui/material";
import { Content, DanwerButton } from "./styled";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { Open_Sans } from "next/font/google";
import DanwerItem from "components/DanwerItem";
import Button from "components/Button";
import { changeDanwer, selectAllState } from "stores/slices/diffState";
import { useDispatch, useSelector } from "react-redux";
import { selectBasket } from "stores/slices/basket";
import { useEffect, useState } from "react";
import { getBasketProducts } from "queries/products";
import { useLazyQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { getBasket } from "helpers/getBasket";
import { getSum } from "helpers/getSum";
import useTranslation from "next-translate/useTranslation";

const openSans = Open_Sans({ subsets: ["latin", "cyrillic"] });

const Danwer = () => {
  const { t, lang } = useTranslation('common')
  const { danwer } = useSelector(selectAllState);
  const basket = useSelector(selectBasket);
  const dispatch = useDispatch();
  const router = useRouter();

  const [basketItems, setBasketItems] = useState([]);

  const [getBasketItems] = useLazyQuery(getBasketProducts);

  const handleClose = () => {
    dispatch(changeDanwer(false));
  };

  const hadnleOpen = () => {
    dispatch(changeDanwer(true));
  };

  useEffect(() => {
    getBasket(basket, basketItems, getBasketItems, router.locale).then(result => {
      // @ts-ignore
      setBasketItems(result);
    })
  }, [basket]);

  return (
    <SwipeableDrawer
      anchor="right"
      open={danwer}
      className={openSans.className}
      onClose={handleClose}
      onOpen={hadnleOpen}
    >
      <Content>
        <div>
          <div className="danwer-top">
            <div>
              <ShoppingBagOutlinedIcon fontSize="medium" />
              <span>{basketItems.length} {t`item`}</span>
            </div>
            <div>
              <IconButton
                aria-label="close"
                size="small"
                onClick={() => handleClose()}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </div>
          </div>
          <div className="danwer-items">
            {basketItems.map((item: any, idx: number) => (
              <DanwerItem data={item} key={idx} />
            ))}
          </div>
        </div>
        <DanwerButton>
          <Button size="large" href={`${lang}/checkout`}>{t`checkoutNow`} ({t("price", {price: getSum(basketItems)})})</Button>
          {/* <Button size="large" variant="outlined">
            View Cart
          </Button> */}
        </DanwerButton>
      </Content>
    </SwipeableDrawer>
  );
};

export default Danwer;
