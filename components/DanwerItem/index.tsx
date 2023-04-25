import ButtonCount from "components/ButtonCount"
import { DanwerItemS, ImgWrap } from "./styled"
import Image from "next/image"
import { IconButton, Typography } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';
import { FC, useEffect, useMemo, useState } from "react"
import { getPrice } from "helpers/getPrice";
import { useDispatch, useSelector } from "react-redux";
import { changeBasket, selectBasket } from "stores/slices/basket";
import { changeCountProduct } from "helpers/changeCountProduct";
import useTranslation from "next-translate/useTranslation";

interface IDanwerItem {
  data: any
}

const DanwerItem: FC<IDanwerItem> = ({data}) => {

  const { t } = useTranslation('common')

  const [count, setCount] = useState<number>(0)
  const dispatch = useDispatch()
  const basket: BasketItem[] = useSelector(selectBasket)
  const localePrice = useMemo<number>(() => data.variants[0].salePrice ? data.variants[0].salePrice.toFixed(2) : getPrice(data.variants[0]), [])

  const handleChange = (type: string) => {
    const {newBasket} = changeCountProduct(data, type, data.count, basket)
    dispatch(changeBasket(newBasket))
  }

  useEffect(() => {
    const currentBasketItem = basket.find(item => item.id === data.id && item.idVariant === data.idVariant) || data
    setCount(currentBasketItem.count)
  }, [basket])

  useEffect(() => {
    setCount(data.count)
  }, [data])

  const removeItem = (id: string, idVariant: string) => {
    const oldBasket = [...basket]
    const newBasket = oldBasket.map((item) => {
      if(+item.id !== +id && +item.idVariant !== +idVariant) {
        return item
      }
    }).filter(item => item !== undefined)
    // @ts-ignore
    dispatch(changeBasket(newBasket))
  }

  return (
    <DanwerItemS>
      <div className="count-wrap">
        <ButtonCount handleChange={handleChange} count={count} vertical />
      </div>
      <ImgWrap>
        <Image src={data.variants[0].images.data[0].attributes.url} fill alt="" />
      </ImgWrap>
      <div className="danwer-item-body">
        <Typography variant="h4">{data.title} - {data.variants[0].title}</Typography>
        <small>{t("price", {price: localePrice})} x {t("countInPack", {count: data.variants[0].countInPack})} x {data.count}</small>
        <span>{t("price", {price: (localePrice * data.variants[0].countInPack * data.count).toFixed(2)})}</span>
      </div>
      <div>
        <IconButton aria-label="close" size="small" onClick={() => removeItem(data.id, data.variants[0].id)}>
          <CloseIcon fontSize="small" />
        </IconButton>
      </div>
    </DanwerItemS>
  )
}

export default DanwerItem